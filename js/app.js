/* Deutsch in 100 Tagen: application logic.
   Static app, no build step. Progress lives in localStorage under KEY. */
(function () {
  "use strict";
  var C = window.COURSE, A = window.ASSIGN;
  var KEY = "deutsch100.v1";
  var TARGET = C.targetMinutes;
  var $app = document.getElementById("app");

  /* ---------------- State ---------------- */
  var S = load();
  function fresh() {
    return { start: isoDate(new Date()), blocks: {}, min: {}, log: {}, scores: {}, tasks: {}, timer: null, theme: "auto", known: {} };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var o = JSON.parse(raw); var f = fresh(); for (var k in f) if (!(k in o)) o[k] = f[k]; return o; }
    } catch (e) {}
    return fresh();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function isoDate(d) { var m = d.getMonth() + 1, day = d.getDate(); return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day; }
  function today() { return isoDate(new Date()); }
  function h(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* ---------------- Course helpers ---------------- */
  function dayObj(n) { return C.days[n]; }
  function modOf(n) { var d = C.days[n]; return C.modules.filter(function (m) { return m.id === d.m; })[0]; }
  function levelOf(n) { return C.levels.filter(function (l) { return n >= l.s && n <= l.e; })[0]; }

  function blocksFor(n) {
    var d = dayObj(n), m = modOf(n);
    if (d.blocks) return d.blocks.map(function (b) { return { t: b.t, m: b.m, d: b.d }; });
    if (d.type === "assignment") return [
      { t: "Review the module", m: 20, d: "Go through the vocabulary and phrases of Module " + m.id + " once more. Use the flashcards on the earlier days.", flash: "module" },
      { t: "Practice quiz", m: 25, d: "Take the module quiz. You need 70% to pass; retake it as often as you like.", aid: d.aid },
      { t: "Speaking task", m: 20, d: m.speak },
      { t: "Writing task", m: 25, d: m.write }
    ];
    if (d.type === "test") return [
      { t: "Warm-up review", m: 10, d: "Skim your mistake log and the vocabulary you got wrong most often.", flash: "level" },
      { t: "Graded quiz", m: 30, d: "Take the graded quiz without notes. Pass mark: 60% overall.", aid: d.aid },
      { t: "Writing test", m: 25, d: "Write the task in the assignment, then score yourself with the checklist.", aid: d.aid },
      { t: "Speaking test", m: 25, d: "Record yourself, listen back, then score yourself with the checklist.", aid: d.aid }
    ];
    if (d.type === "review") return [
      { t: "Vocabulary sweep", m: 25, d: "Flashcards from the whole level. Move only words you know out of the pile.", flash: "level" },
      { t: "Grammar recap", m: 20, d: d.c },
      { t: "Fix your weak spots", m: 20, d: "Look at the practice quizzes you scored lowest on and retake them." },
      { t: "Speaking out loud", m: 15, d: "Talk for 5 minutes about yourself, your day and your plans. Record it." },
      { t: "Listening", m: 10, d: "Watch or listen to one short DW or Slow German item and note 5 words." }
    ];
    var prev = n > 1 ? dayObj(n - 1) : null;
    return [
      { t: "Warm-up", m: 10, d: prev && prev.v && prev.v.length ? "Review yesterday's words with the flashcards before starting." : "Say the alphabet and yesterday's phrases out loud.", flash: "prev" },
      { t: "New vocabulary", m: 20, d: "Learn today's words with article and plural. Say each one three times, then use the flashcards.", flash: "today" },
      { t: "Pronunciation", m: 10, d: d.s || "Read today's phrases out loud and record yourself." },
      { t: "Learn: " + d.t, m: 20, d: d.c },
      { t: "Listening", m: 15, d: d.l || "Listen to a short German clip and note what you understand." },
      { t: "Your output", m: 15, d: d.o || "Speak or write 5 sentences using today's words." }
    ];
  }

  function dayDone(n) {
    var bl = blocksFor(n);
    return bl.every(function (b, i) { return !!S.blocks[n + ":" + i]; });
  }
  function dayProgress(n) {
    var bl = blocksFor(n), c = 0;
    bl.forEach(function (b, i) { if (S.blocks[n + ":" + i]) c++; });
    return { done: c, total: bl.length };
  }
  function currentDay() {
    for (var n = 1; n <= C.total; n++) if (!dayDone(n)) return n;
    return C.total;
  }
  function daysDone() { var c = 0; for (var n = 1; n <= C.total; n++) if (dayDone(n)) c++; return c; }
  function dayType(n) { return dayObj(n).type; }
  function dayVocab(n, scope) {
    var d = dayObj(n), out = [];
    function add(x) { (x.v || []).forEach(function (p) { out.push(p); }); }
    if (scope === "prev") { if (n > 1) add(dayObj(n - 1)); return out; }
    if (scope === "level") { var lv = levelOf(n); for (var i = lv.s; i <= lv.e; i++) if (C.days[i]) add(C.days[i]); return shuffle(out).slice(0, 40); }
    if (scope === "module") { var m = modOf(n); for (var j = m.s; j <= m.e; j++) if (C.days[j]) add(C.days[j]); return out; }
    add(d);
    if (!out.length) return dayVocab(n, "level");
    return out;
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* ---------------- Minutes and timer ---------------- */
  function addMinutes(n, m) {
    if (!m) return;
    S.min[n] = Math.max(0, (S.min[n] || 0) + m);
    var t = today();
    S.log[t] = Math.max(0, (S.log[t] || 0) + m);
    save();
  }
  function timerMs() { var t = S.timer; if (!t) return 0; return t.acc + (t.since ? Date.now() - t.since : 0); }
  function fmt(ms) { var s = Math.floor(ms / 1000), m = Math.floor(s / 60); s = s % 60; return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s; }
  function timerStart(n) {
    if (S.timer && S.timer.day !== n) timerStop(true);
    if (!S.timer) S.timer = { day: n, acc: 0, since: null };
    if (!S.timer.since) S.timer.since = Date.now();
    save(); drawTimer(); refreshMinutes();
  }
  function timerPause() { if (S.timer && S.timer.since) { S.timer.acc += Date.now() - S.timer.since; S.timer.since = null; save(); drawTimer(); } }
  function timerStop(silent) {
    if (!S.timer) return;
    timerPause();
    var mins = Math.round(S.timer.acc / 60000), d = S.timer.day;
    S.timer = null; save();
    if (mins > 0) addMinutes(d, mins);
    drawTimer();
    if (!silent) toast(mins > 0 ? "Logged " + mins + " min for day " + d + "." : "Under one minute, nothing logged.");
    refreshMinutes();
  }
  var timerHost = document.getElementById("timerhost");
  function drawTimer() {
    if (!S.timer) { timerHost.innerHTML = ""; return; }
    var running = !!S.timer.since;
    timerHost.innerHTML = '<div class="timerbar" role="group" aria-label="Study timer"><div class="t" id="tclock">' + fmt(timerMs()) + '</div><div><small>Day ' + S.timer.day + (running ? " · studying" : " · paused") + '</small></div>' +
      '<button class="btn sm ghost" data-act="tpause">' + (running ? "Pause" : "Resume") + '</button><button class="btn sm" data-act="tstop">Stop and log</button></div>';
  }
  setInterval(function () { var el = document.getElementById("tclock"); if (el && S.timer) el.textContent = fmt(timerMs()); }, 1000);
  window.addEventListener("beforeunload", function () { if (S.timer && S.timer.since) { S.timer.acc += Date.now() - S.timer.since; S.timer.since = Date.now(); save(); } });
  function refreshMinutes() {
    var el = document.getElementById("minval");
    if (el && route.name === "day") { var n = route.n; el.textContent = (S.min[n] || 0); var m = document.getElementById("minbar"); if (m) m.style.width = Math.min(100, Math.round(((S.min[n] || 0) / TARGET) * 100)) + "%"; }
  }

  /* ---------------- Toast ---------------- */
  var toastTimer;
  function toast(msg) {
    var host = document.getElementById("toasthost");
    host.innerHTML = '<div class="toast">' + h(msg) + "</div>";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { host.innerHTML = ""; }, 3200);
  }

  /* ---------------- Speech and recording ---------------- */
  var deVoice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    var vs = speechSynthesis.getVoices();
    deVoice = vs.filter(function (v) { return /^de(-|_)?DE/i.test(v.lang); })[0] || vs.filter(function (v) { return /^de/i.test(v.lang); })[0] || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text) {
    if (!("speechSynthesis" in window)) { toast("Your browser can't read German aloud. Try Chrome, Edge or Safari, or use Forvo."); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text.replace(/…/g, "..."));
    u.lang = "de-DE"; u.rate = 0.85;
    if (deVoice) u.voice = deVoice;
    speechSynthesis.speak(u);
  }
  var rec = null;
  function recordToggle(btn) {
    if (rec && rec.state === "recording") { rec.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { toast("Recording isn't supported in this browser."); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var chunks = [];
      rec = new MediaRecorder(stream);
      rec.ondataavailable = function (e) { chunks.push(e.data); };
      rec.onstop = function () {
        stream.getTracks().forEach(function (t) { t.stop(); });
        btn.setAttribute("aria-pressed", "false"); btn.classList.remove("rec");
        var a = new Audio(URL.createObjectURL(new Blob(chunks)));
        a.play();
      };
      rec.start(); btn.setAttribute("aria-pressed", "true"); btn.classList.add("rec");
      toast("Recording. Say the phrase, then tap the mic again to hear yourself.");
    }).catch(function () { toast("Microphone permission was denied."); });
  }
  var ICON = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>'
  };

  /* ---------------- Router ---------------- */
  var route = { name: "today" };
  function parse() {
    var p = (location.hash || "#/today").replace(/^#\/?/, "").split("/");
    var name = p[0] || "today";
    if (name === "today") return { name: "day", n: currentDay(), today: true };
    if (name === "day") { var n = parseInt(p[1], 10); if (!(n >= 1 && n <= C.total)) n = currentDay(); return { name: "day", n: n }; }
    if (name === "assignment") return { name: "assignment", id: p[1] };
    return { name: name };
  }
  function render() {
    route = parse();
    var navKey = route.name === "day" ? (route.today || route.n === currentDay() ? "today" : "roadmap") : route.name === "assignment" ? "assignments" : route.name;
    Array.prototype.forEach.call(document.querySelectorAll("#nav a"), function (a) { if (a.getAttribute("data-r") === navKey) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    var fn = { day: vDay, roadmap: vRoadmap, assignments: vAssignments, assignment: vAssignment, progress: vProgress, resources: vResources, settings: vSettings }[route.name] || vDay;
    fn();
    drawLineProg(); drawTimer(); applyTheme();
    window.scrollTo(0, 0);
    document.title = (route.name === "day" ? "Day " + route.n + " · " : "") + "Deutsch in 100 Tagen";
  }
  window.addEventListener("hashchange", render);

  function drawLineProg() {
    var out = "";
    C.levels.forEach(function (l) {
      var tot = l.e - l.s + 1, dn = 0;
      for (var n = l.s; n <= l.e; n++) if (dayDone(n)) dn++;
      out += '<i style="flex:' + tot + ';--c:' + l.color + '"><b style="width:' + Math.round((dn / tot) * 100) + '%;background:' + l.color + '"></b></i>';
    });
    document.getElementById("lineprog").innerHTML = out;
  }
  function applyTheme() {
    var r = document.documentElement;
    if (S.theme === "light" || S.theme === "dark") r.setAttribute("data-theme", S.theme); else r.removeAttribute("data-theme");
  }

  /* ---------------- Views: day ---------------- */
  function badge(lv) { return '<span class="badge lv-' + lv + '">' + lv + "</span>"; }
  function typeLabel(t) { return { lesson: "Lesson", assignment: "Module assignment", review: "Review day", test: "Graded assignment", boot: "Exam bootcamp" }[t]; }

  function vDay() {
    var n = route.n, d = dayObj(n), m = modOf(n), lv = levelOf(n), cur = currentDay();
    var nextN = n < C.total ? n + 1 : null, nd = nextN ? dayObj(nextN) : null;
    var bl = blocksFor(n), prog = dayProgress(n);
    var sched = scheduledDay();
    var pace = "";
    if (cur < sched) pace = "You are " + (sched - cur) + " day" + (sched - cur > 1 ? "s" : "") + " behind the calendar plan. That is fine: keep the order, not the date.";
    else if (cur > sched) pace = "You are " + (cur - sched) + " day" + (cur - sched > 1 ? "s" : "") + " ahead of plan.";
    else pace = "You are on schedule.";

    var hero = '<div class="sign lv-' + lv.id + '"><div><div class="tag">' + badge(lv.id) + '<span>' + (n === cur ? "You are here" : n < cur ? "Completed stop" : "Coming up") + " · " + typeLabel(d.type) + '</span></div>' +
      '<div class="day">Tag ' + n + '<small>of 100</small></div><h1>' + h(d.t) + '</h1><p class="mod">Module ' + m.id + ": " + h(m.en) + " · " + h(m.de) + '</p></div>' +
      '<div class="next"><span>' + (nd ? "Next stop" : "Final stop") + '</span><b>' + (nd ? "Tag " + nextN + ": " + h(nd.t) : "B1 exam day is next. Well done.") + '</b>' +
      (nd ? '<a class="btn ghost sm" href="#/day/' + nextN + '">Preview</a>' : '<a class="btn ghost sm" href="#/progress">See progress</a>') + '</div></div>';

    var nav = '<div class="daynav"><a class="btn ghost sm" href="#/day/' + Math.max(1, n - 1) + '"' + (n === 1 ? ' aria-disabled="true"' : "") + '>← Day ' + Math.max(1, n - 1) + '</a>' +
      '<a class="btn ghost sm" href="#/day/' + Math.min(C.total, n + 1) + '">Day ' + Math.min(C.total, n + 1) + ' →</a>' +
      (n !== cur ? '<a class="btn sm" href="#/today">Go to current day (' + cur + ")</a>" : "") +
      '<span class="grow"></span><label class="small muted" for="jump">Jump to day</label><select id="jump" style="width:auto">' +
      range(1, C.total).map(function (i) { return '<option value="' + i + '"' + (i === n ? " selected" : "") + ">Day " + i + "</option>"; }).join("") + "</select></div>";

    var blocksHtml = bl.map(function (b, i) {
      var k = n + ":" + i, on = !!S.blocks[k];
      var acts = "";
      if (b.flash) acts += '<button class="btn sm ghost" data-act="flash" data-scope="' + b.flash + '">Flashcards</button>';
      if (b.aid) acts += '<a class="btn sm ghost" href="#/assignment/' + b.aid + '">Open assignment</a>';
      return '<div class="block' + (on ? " done" : "") + '"><input class="chk" type="checkbox" data-k="' + k + '" id="b' + i + '"' + (on ? " checked" : "") + ' aria-label="Mark done: ' + h(b.t) + '">' +
        '<h3><label for="b' + i + '">' + h(b.t) + '</label></h3><span class="mins">' + b.m + " min</span><p>" + h(b.d) + "</p>" + (acts ? '<div class="acts">' + acts + "</div>" : "") + "</div>";
    }).join("");
    var totalMin = bl.reduce(function (s, b) { return s + b.m; }, 0);
    var plan = '<div class="plan" style="--c:' + lv.color + ';--ci:' + lv.ink + '">' + blocksHtml +
      '<div class="plan-foot"><span><b>' + prog.done + " of " + prog.total + "</b> blocks done · " + totalMin + ' min planned</span><div class="grow meter" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(prog.done / prog.total * 100) + '"><b style="width:' + Math.round(prog.done / prog.total * 100) + '%;background:' + lv.color + '"></b></div>' +
      (prog.done === prog.total ? '<span class="chip">Day complete</span>' : '<button class="btn sm ghost" data-act="checkall" data-n="' + n + '">Mark all done</button>') + "</div></div>";

    var vocab = "";
    if (d.v && d.v.length) {
      vocab = '<section class="section"><h2>Words of the day</h2><ul class="vocab">' + d.v.map(function (p) {
        return '<li><button class="iconbtn" data-act="say" data-t="' + h(p[0]) + '" aria-label="Hear ' + h(p[0]) + '">' + ICON.play + '</button><span class="de" lang="de">' + h(p[0]) + '</span><span class="en">' + h(p[1]) + "</span></li>";
      }).join("") + '</ul><p class="small muted" style="margin-top:10px">Learn every noun with its article and plural. Tap play, repeat out loud, then test yourself with flashcards.</p></section>';
    }
    var phr = "";
    if (d.p && d.p.length) {
      phr = '<section class="section"><h2>Phrases to say out loud</h2><ul class="phrase">' + d.p.map(function (p) {
        return '<li><button class="iconbtn" data-act="say" data-t="' + h(p[0]) + '" aria-label="Hear this phrase">' + ICON.play + '</button><button class="iconbtn" data-act="rec" aria-pressed="false" aria-label="Record yourself saying this phrase">' + ICON.mic + '</button><div><span class="de" lang="de">' + h(p[0]) + '</span><span class="en">' + h(p[1]) + "</span></div></li>";
      }).join("") + '</ul><p class="small muted" style="margin-top:10px">Mic button: record yourself, tap again to hear the recording. Compare it with the model voice.</p></section>';
    }
    var pron = d.s ? '<section class="section"><h2>Pronunciation focus</h2><p class="sound" style="--c:' + lv.color + '">' + h(d.s) + "</p></section>" : "";

    var side = '<aside class="side" style="--c:' + lv.color + '">' +
      '<section><h3>Time today</h3><div class="stat"><span>Minutes logged (target ' + TARGET + ')</span><b id="minval">' + (S.min[n] || 0) + '</b></div><div class="meter"><b id="minbar" style="width:' + Math.min(100, Math.round((S.min[n] || 0) / TARGET * 100)) + '%"></b></div>' +
      '<div class="adj"><button class="btn sm" data-act="tstart" data-n="' + n + '">' + (S.timer && S.timer.day === n && S.timer.since ? "Timer running" : "Start timer") + '</button><button class="btn sm ghost" data-act="madj" data-n="' + n + '" data-v="-15" aria-label="Remove 15 minutes">−15</button><button class="btn sm ghost" data-act="madj" data-n="' + n + '" data-v="15" aria-label="Add 15 minutes">+15</button></div></section>' +
      '<section><h3>Now and next</h3><div class="stat"><span>Course progress</span><b>' + daysDone() + '/100</b></div><p class="small muted" style="margin:6px 0 0">' + h(pace) + "</p>" +
      '<p class="small" style="margin:10px 0 0"><b>Module goal.</b> ' + h(m.goal) + '</p><p class="small muted" style="margin:6px 0 0"><b>Grammar.</b> ' + h(m.gram) + "</p></section>" +
      '<section><h3>Free resources for ' + lv.id + '</h3><ul class="reslist">' + (C.dayRes[lv.id] || []).map(function (id) {
        var r = C.resources.filter(function (x) { return x.id === id; })[0]; if (!r) return "";
        return '<li><a href="' + h(r.url) + '" target="_blank" rel="noopener">' + h(r.title) + "</a><small>" + h(r.desc) + "</small></li>";
      }).join("") + '</ul><p class="small" style="margin:8px 0 0"><a href="#/resources">All resources</a></p></section></aside>';

    $app.innerHTML = hero + nav + '<div class="cols"><div>' + plan + vocab + phr + pron + '</div>' + side + "</div>";
    document.getElementById("jump").addEventListener("change", function (e) { location.hash = "#/day/" + e.target.value; });
  }
  function range(a, b) { var o = []; for (var i = a; i <= b; i++) o.push(i); return o; }
  function scheduledDay() {
    var s = new Date(S.start + "T00:00:00"), t = new Date(today() + "T00:00:00");
    var diff = Math.round((t - s) / 86400000) + 1;
    return Math.max(1, Math.min(C.total, diff));
  }

  /* ---------------- Views: roadmap ---------------- */
  function vRoadmap() {
    var cur = currentDay(), out = '<h1>Roadmap</h1><p class="muted">Three lines, 100 stops. Circles are lessons, squares are graded assignments and review days. Tap a stop to open that day.</p>' +
      '<p class="legend"><span><i></i>Lesson</span><span><i class="sq"></i>Assignment, review or test</span><span><i class="fill"></i>Completed</span></p>';
    C.levels.forEach(function (l) {
      out += '<div class="levelhead lv-' + l.id + '"><span class="badge">' + l.id + "</span><h2>" + h(l.name) + " · " + h(l.en) + " (days " + l.s + "–" + l.e + ")</h2><p>" + h(l.goal) + "</p></div>";
      var mods = C.modules.filter(function (m) { return m.lv === l.id; });
      mods.forEach(function (m, mi) {
        var s = m.s, e = m.e;
        if (mi === mods.length - 1) e = l.e;
        var stops = "";
        for (var n = s; n <= e; n++) {
          if (!C.days[n]) continue;
          var t = dayType(n), cls = "stop";
          if (t === "assignment") cls += " assign"; else if (t === "test" || (t === "boot" && C.days[n].aid)) cls += " test"; else if (t === "review") cls += " review";
          if (dayDone(n)) cls += " done";
          if (n === cur) cls += " current";
          stops += '<button class="' + cls + '" data-go="' + n + '" title="Day ' + n + ": " + h(C.days[n].t) + '" aria-label="Day ' + n + ": " + h(C.days[n].t) + (dayDone(n) ? ", completed" : "") + '">' + n + "</button>";
        }
        out += '<div class="mrow lv-' + l.id + '"><div><h3>Module ' + m.id + ": " + h(m.en) + "</h3><p>" + h(m.goal) + '</p><p class="g">Grammar: ' + h(m.gram) + '</p></div><div class="stops">' + stops + "</div></div>";
      });
    });
    $app.innerHTML = out;
  }

  /* ---------------- Views: assignments ---------------- */
  function bestScore(id) { var s = S.scores[id]; return s ? s : null; }
  function vAssignments() {
    var out = '<h1>Assignments</h1><p class="muted">Each module ends with a practice quiz plus a speaking and a writing task. Each level ends with a graded assignment. The B1 mock exams come on days 98 and 99.</p>';
    var groups = { practice: "Module practice assignments", test: "Graded level assignments" };
    ["test", "practice"].forEach(function (kind) {
      out += "<h2 class=\"section\" style=\"margin-top:32px\">" + groups[kind] + '</h2><div class="alist">';
      A.list.filter(function (a) { return a.kind === kind; }).forEach(function (a) {
        var sc = bestScore(a.id), cls = sc ? (sc.passed ? "pass" : "fail") : "";
        out += '<div class="arow lv-' + a.level + '">' + badge(a.level) + '<div><h3>' + h(a.title) + '</h3><span class="sub">Day ' + a.day + " · pass mark " + a.pass + "%" + (sc ? " · " + sc.attempts + " attempt" + (sc.attempts > 1 ? "s" : "") : "") + '</span></div>' +
          '<span class="score ' + cls + '">' + (sc ? sc.total + "%" : "–") + '</span><a class="btn sm' + (sc ? " ghost" : "") + '" href="#/assignment/' + a.id + '">' + (sc ? "Open" : "Start") + "</a></div>";
      });
      out += "</div>";
    });
    $app.innerHTML = out;
  }

  var quizState = null, order = [];
  function vAssignment() {
    var a = A.byId[route.id];
    if (!a) { $app.innerHTML = '<h1>Assignment not found</h1><p><a href="#/assignments">Back to assignments</a></p>'; return; }
    var sc = bestScore(a.id), chk = S.tasks[a.id] || {};
    var out = '<p><a href="#/day/' + a.day + '">← Day ' + a.day + '</a> · <a href="#/assignments">All assignments</a></p><div class="levelhead lv-' + a.level + '" style="margin-top:8px">' + badge(a.level) + "<h1 style=\"margin:0\">" + h(a.title) + '</h1><p>' +
      (a.kind === "test" ? "Graded assignment. Work without notes. Pass mark " + a.pass + "% overall." : "Practice assignment. Pass mark " + a.pass + "% on the quiz. Retake as often as you like.") + "</p></div>";
    if (a.quiz && a.quiz.length) {
      out += '<h2 class="section">Quiz</h2><form id="quiz" novalidate>';
      order = a.quiz.map(function (q) { return shuffle(range(0, q.o.length - 1)); });
      a.quiz.forEach(function (q, i) {
        out += '<fieldset class="q" style="border:1px solid var(--line)" data-i="' + i + '"><legend class="sr">Question ' + (i + 1) + "</legend><h4><span class=\"n\">" + (i + 1) + "</span>" + h(q.q) + "</h4>" +
          (q.say ? '<div class="say"><button type="button" class="btn sm ghost" data-act="say" data-t="' + h(q.say) + '">' + ICON.play.replace("<svg", '<svg width="14" height="14"') + ' Play audio</button><span class="small muted">Listen as often as you need.</span></div>' : "") +
          order[i].map(function (j) { return '<label class="opt"><input type="radio" name="q' + i + '" value="' + j + '" data-j="' + j + '"><span>' + h(q.o[j]) + "</span></label>"; }).join("") + '<div class="why" hidden></div></fieldset>';
      });
      out += '<div class="daynav"><button class="btn" type="submit">Check answers</button><span class="small muted" id="qmsg"></span></div></form><div id="qresult"></div>';
    }
    out += '<div id="tasks"></div>';
    $app.innerHTML = out;
    quizState = { a: a, submitted: false };
    if (sc && a.quiz && a.quiz.length) {
      document.getElementById("qresult").innerHTML = '<div class="callout"><p>Best quiz score so far: <b>' + sc.quiz + "%</b>. You can retake the quiz to improve it.</p></div>";
    }
    renderTasks(a);
    var f = document.getElementById("quiz");
    if (f) f.addEventListener("submit", function (e) { e.preventDefault(); gradeQuiz(a); });
  }
  function gradeQuiz(a) {
    var right = 0, missing = 0;
    a.quiz.forEach(function (q, i) { if (!document.querySelector('input[name="q' + i + '"]:checked')) missing++; });
    if (missing) { document.getElementById("qmsg").textContent = "Answer all " + a.quiz.length + " questions first (" + missing + " left)."; return; }
    a.quiz.forEach(function (q, i) {
      var pick = parseInt(document.querySelector('input[name="q' + i + '"]:checked').value, 10);
      var box = document.querySelector('fieldset[data-i="' + i + '"]');
      Array.prototype.forEach.call(box.querySelectorAll(".opt"), function (lab) {
        var j = parseInt(lab.querySelector("input").getAttribute("data-j"), 10);
        if (j === q.a) lab.classList.add("right"); else if (j === pick) lab.classList.add("wrong");
        lab.querySelector("input").disabled = true;
      });
      var w = box.querySelector(".why"); w.hidden = false;
      w.innerHTML = (pick === q.a ? "<b>Correct.</b> " : "<b>Not quite.</b> The answer is " + h(q.o[q.a]) + ". ") + h(q.w) + (q.say ? ' <span lang="de">"' + h(q.say) + '"</span>' : "");
      if (pick === q.a) right++;
    });
    var pct = Math.round((right / a.quiz.length) * 100);
    var prev = S.scores[a.id] || { attempts: 0 };
    var best = Math.max(pct, prev.quiz || 0);
    S.scores[a.id] = { quiz: best, last: pct, attempts: (prev.attempts || 0) + 1, date: today() };
    computeTotal(a);
    save();
    var sc = S.scores[a.id];
    document.getElementById("qresult").innerHTML = '<div class="result"><div class="big">' + pct + '%</div><div><h2 style="color:#fff;margin:0 0 4px">' + right + " of " + a.quiz.length + " correct</h2><p>" +
      (pct >= a.pass ? "Pass on the quiz. " : "Below the " + a.pass + "% pass mark. Read the explanations, then retake. ") + "Best score: " + best + "%.</p></div>" +
      '<button class="btn ghost" style="margin-left:auto;border-color:#fff;color:#fff" data-act="retake">Retake quiz</button></div>';
    document.getElementById("qmsg").textContent = "";
    var f = document.getElementById("quiz"); if (f) { var b = f.querySelector('button[type="submit"]'); b.disabled = true; }
    renderTasks(a);
    document.getElementById("qresult").scrollIntoView({ behavior: "smooth", block: "center" });
  }
  function taskPct(a, k) {
    var chk = (S.tasks[a.id] || {})[k] || [];
    var list = a.rubric ? a.rubric[k] || [] : [];
    if (!list.length) return null;
    var c = 0; list.forEach(function (_, i) { if (chk[i]) c++; });
    return Math.round((c / list.length) * 100);
  }
  function computeTotal(a) {
    var sc = S.scores[a.id] || (S.scores[a.id] = { attempts: 0 });
    var w = a.weights, parts = 0, sum = 0;
    if (a.kind === "test" && w) {
      ["quiz", "write", "speak"].forEach(function (k) {
        if (!w[k]) return;
        var v = k === "quiz" ? (a.quiz && a.quiz.length ? sc.quiz : null) : taskPct(a, k);
        sc[k] = v == null ? sc[k] : v;
        sum += (v == null ? 0 : v) * w[k]; parts += w[k];
      });
      sc.total = Math.round(sum);
    } else { sc.total = sc.quiz == null ? 0 : sc.quiz; }
    sc.passed = sc.total >= a.pass;
    if (sc.attempts == null) sc.attempts = 0;
  }
  function renderTasks(a) {
    var host = document.getElementById("tasks");
    if (!host) return;
    var st = S.tasks[a.id] || {}, out = "";
    (a.tasks || []).forEach(function (t) {
      out += '<h2 class="section">' + h(t.label) + '</h2><div class="task"><p>' + h(t.text) + "</p>";
      if (a.rubric && a.rubric[t.k]) {
        out += '<p class="small muted"><b>Self-assessment.</b> Tick what you honestly achieved. Ask a teacher, tandem partner or Claude to check your text if you can.</p>';
        a.rubric[t.k].forEach(function (line, i) {
          out += '<label class="line"><input type="checkbox" data-rub="' + a.id + "|" + t.k + "|" + i + '"' + (((st[t.k] || [])[i]) ? " checked" : "") + "><span>" + h(line) + "</span></label>";
        });
        var p = taskPct(a, t.k);
        out += '<p class="small" style="margin-top:8px"><b>Score: ' + (p == null ? 0 : p) + "%</b></p>";
      } else {
        out += '<label class="line"><input type="checkbox" data-done="' + a.id + "|" + t.k + '"' + (st["done_" + t.k] ? " checked" : "") + "><span>I completed this task</span></label>";
      }
      out += "</div>";
    });
    var sc = S.scores[a.id];
    if (a.kind === "test" && sc && sc.total != null) {
      out += '<div class="result"><div class="big">' + sc.total + "%</div><div><h2 style=\"color:#fff;margin:0 0 4px\">" + (sc.passed ? "Level passed" : "Not passed yet") + "</h2><p>Overall score " + sc.total + "% (pass mark " + a.pass + "%)." +
        (a.weights && a.weights.quiz && a.weights.quiz < 1 ? " Weighting: quiz " + Math.round(a.weights.quiz * 100) + "%, writing " + Math.round((a.weights.write || 0) * 100) + "%, speaking " + Math.round((a.weights.speak || 0) * 100) + "%." : "") + "</p></div></div>";
    }
    host.innerHTML = out;
  }

  /* ---------------- Views: progress ---------------- */
  function streak() {
    var c = 0, d = new Date();
    if (!(S.log[isoDate(d)] > 0)) d.setDate(d.getDate() - 1);
    while (S.log[isoDate(d)] > 0) { c++; d.setDate(d.getDate() - 1); }
    return c;
  }
  function vProgress() {
    var totalMin = 0, active = 0, k;
    for (k in S.min) { totalMin += S.min[k]; if (S.min[k] > 0) active++; }
    var passed = A.list.filter(function (a) { return S.scores[a.id] && S.scores[a.id].passed; }).length;
    var done = daysDone(), cur = currentDay();
    var stats = '<div class="stats"><div><b>' + done + '</b><span>days completed of 100</span></div><div><b>' + Math.round(totalMin / 60 * 10) / 10 + '</b><span>hours studied</span></div><div><b>' + (active ? Math.round(totalMin / active) : 0) + '</b><span>average minutes per study day (target ' + TARGET + ')</span></div><div><b>' + streak() + '</b><span>day streak</span></div><div><b>' + passed + "/" + A.list.length + '</b><span>assignments passed</span></div></div>';
    var max = Math.max(TARGET * 1.3, Math.max.apply(null, range(1, C.total).map(function (n) { return S.min[n] || 0; })));
    var bars = range(1, C.total).map(function (n) {
      var v = S.min[n] || 0, lv = levelOf(n);
      return '<button class="bar' + (v ? "" : " empty") + '" data-go="' + n + '" style="height:' + Math.round(v / max * 100) + "%;--c:" + lv.color + '" title="Day ' + n + ": " + v + ' min" aria-label="Day ' + n + ", " + v + ' minutes"></button>';
    }).join("");
    var chart = '<h2 class="section">Minutes per course day</h2><div class="chart"><div class="bars">' + bars + '<div class="target" style="bottom:' + Math.round(TARGET / max * 100) + '%"><span>' + TARGET + ' min target</span></div></div><div class="axis"><span>Day 1</span><span>Day 34</span><span>Day 64</span><span>Day 100</span></div></div>';

    function sc(id) { return S.scores[id] && S.scores[id].passed; }
    var gates = [
      ["Completed at least 80 of 100 days", done >= 80],
      ["Passed the A1 graded assignment (day 34)", sc("test-a1")],
      ["Passed the A2 graded assignment (day 64)", sc("test-a2")],
      ["Passed B1 mock exam 1 (day 98)", sc("mock-1")],
      ["Passed B1 mock exam 2, writing and speaking (day 99)", sc("mock-2")]
    ];
    var gate = '<h2 class="section">B1 exam readiness checklist</h2><ul class="gate">' + gates.map(function (g) { return '<li class="' + (g[1] ? "ok" : "") + '"><i></i><span>' + h(g[0]) + "</span></li>"; }).join("") + '</ul><p class="small muted" style="margin-top:10px">This is a rough guide. Do at least one full timed sample paper (Modellsatz) from the official exam provider before booking your exam.</p>';
    var scores = '<h2 class="section">Scores</h2><div class="alist">' + A.list.filter(function (a) { return S.scores[a.id]; }).map(function (a) {
      var s = S.scores[a.id];
      return '<div class="arow lv-' + a.level + '">' + badge(a.level) + "<div><h3>" + h(a.title) + '</h3><span class="sub">Last attempt ' + h(s.date || "") + '</span></div><span class="score ' + (s.passed ? "pass" : "fail") + '">' + s.total + '%</span><a class="btn sm ghost" href="#/assignment/' + a.id + '">Open</a></div>';
    }).join("") + "</div>";
    if (!A.list.some(function (a) { return S.scores[a.id]; })) scores = '<h2 class="section">Scores</h2><p class="empty">No assignments taken yet.</p>';
    $app.innerHTML = '<h1>Progress</h1><p class="muted">You are on day ' + cur + " of 100. " + (done === 100 ? "You finished the course." : "Finish today's blocks to move on.") + "</p>" + stats + chart + gate + scores;
  }

  /* ---------------- Views: resources ---------------- */
  var resFilter = { lv: "All", cat: "All" };
  function vResources() {
    var cats = ["All"]; C.resources.forEach(function (r) { if (cats.indexOf(r.cat) < 0) cats.push(r.cat); });
    var list = C.resources.filter(function (r) { return (resFilter.lv === "All" || r.lv.indexOf(resFilter.lv) >= 0) && (resFilter.cat === "All" || r.cat === resFilter.cat); });
    var chips = function (arr, key) { return '<div class="chips" role="group" aria-label="Filter by ' + (key === "lv" ? "level" : "type") + '">' + arr.map(function (x) { return '<button data-f="' + key + '" data-v="' + h(x) + '" aria-pressed="' + (resFilter[key] === x) + '">' + h(x) + "</button>"; }).join("") + "</div>"; };
    $app.innerHTML = '<h1>Free resources</h1><div class="reality"><h3>How to use these</h3><p>No single website is a complete course. This plan uses the resources below as the raw material and tells you each day what to do with them. Free content and links can change, so if a link is broken, search the site name plus the topic.</p><p>Exam formats and prices change: always check the official exam provider (Goethe-Institut, telc) for the current B1 format before you book.</p></div>' +
      "<h3>Level</h3>" + chips(["All", "A1", "A2", "B1"], "lv") + "<h3>Type</h3>" + chips(cats, "cat") +
      '<div class="rgrid">' + list.map(function (r) {
        return '<article class="rcard"><h3><a href="' + h(r.url) + '" target="_blank" rel="noopener">' + h(r.title) + "</a></h3><p>" + h(r.desc) + '</p><div class="meta">' + r.lv.map(function (l) { return '<span class="chip">' + l + "</span>"; }).join("") + "<span>" + h(r.cat) + " · " + h(r.src) + "</span></div></article>";
      }).join("") + "</div>" + (list.length ? "" : '<p class="empty">No resources match those filters.</p>');
  }

  /* ---------------- Views: settings ---------------- */
  function vSettings() {
    $app.innerHTML = '<h1>Settings</h1><div class="settings">' +
      '<div><h3>Start date</h3><p class="small muted">Used to tell you whether you are ahead of or behind the calendar plan.</p><label class="sr" for="start">Start date</label><input type="date" id="start" value="' + h(S.start) + '"></div>' +
      '<div><h3>Theme</h3><label class="sr" for="theme">Theme</label><select id="theme"><option value="auto">Follow my device</option><option value="light">Light</option><option value="dark">Dark</option></select></div>' +
      '<div><h3>Back up your progress</h3><p class="small muted">Progress is stored in this browser only. Export a file to move to another device.</p><button class="btn sm" data-act="export">Export JSON</button> <label class="btn sm ghost" style="cursor:pointer">Import JSON<input type="file" id="imp" accept="application/json" class="sr"></label></div>' +
      '<div><h3>Reset</h3><p class="small muted">Deletes all progress, minutes and scores from this browser.</p><button class="btn sm ghost" data-act="reset">Reset everything</button></div></div>' +
      '<p class="small muted" style="margin-top:24px">Voice playback uses your browser\'s German text-to-speech voice. For native-speaker audio use Forvo or the DW videos linked in Resources.</p>';
    document.getElementById("theme").value = S.theme;
    document.getElementById("theme").addEventListener("change", function (e) { S.theme = e.target.value; save(); applyTheme(); });
    document.getElementById("start").addEventListener("change", function (e) { if (e.target.value) { S.start = e.target.value; save(); toast("Start date saved."); } });
    document.getElementById("imp").addEventListener("change", function (e) {
      var f = e.target.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () { try { var o = JSON.parse(r.result); if (!o || typeof o !== "object" || !o.blocks) throw 0; S = o; var fr = fresh(); for (var k in fr) if (!(k in S)) S[k] = fr[k]; save(); toast("Progress imported."); render(); } catch (x) { toast("That file isn't a valid backup."); } };
      r.readAsText(f);
    });
  }

  /* ---------------- Flashcards ---------------- */
  function openFlash(cards) {
    if (!cards.length) { toast("No words to practise for this block."); return; }
    var q = shuffle(cards), flipped = false, total = q.length, known = 0, host = document.getElementById("overlayhost");
    function draw() {
      if (!q.length) {
        host.innerHTML = '<div class="overlay"><div class="fc" role="dialog" aria-modal="true" aria-label="Flashcards finished"><h2>Deck finished</h2><p>You knew all ' + total + ' cards. Say five of them in a sentence.</p><div class="fc-actions"><button class="btn" data-act="fclose">Close</button></div></div></div>'; return;
      }
      var c = q[0];
      host.innerHTML = '<div class="overlay"><div class="fc" role="dialog" aria-modal="true" aria-label="Flashcards"><div class="fc-head"><b>' + known + " of " + total + ' known</b><span class="grow"></span><button class="iconbtn" data-act="fsay" aria-label="Hear the German word">' + ICON.play + '</button><button class="btn sm ghost" data-act="fclose">Close</button></div>' +
        '<button class="fc-card" data-act="fflip" aria-live="polite"><span>' + (flipped ? h(c[1]) : '<span lang="de">' + h(c[0]) + "</span>") + "<small>" + (flipped ? "English" : "Deutsch · tap to reveal") + "</small></span></button>" +
        '<div class="fc-actions"><button class="btn ghost" data-act="fagain">Again</button><button class="btn" data-act="fgot">I knew it</button></div><p class="fc-tip">Space flips · 1 = again · 2 = knew it · Esc closes</p></div></div>';
      var card = host.querySelector(".fc-card"); if (card) card.focus();
    }
    fc = {
      flip: function () { flipped = !flipped; draw(); },
      again: function () { var c = q.shift(); q.push(c); flipped = false; draw(); },
      got: function () { q.shift(); known++; flipped = false; draw(); },
      say: function () { if (q[0]) speak(q[0][0]); },
      close: function () { host.innerHTML = ""; fc = null; }
    };
    draw(); speak(q[0][0]);
  }
  var fc = null;
  document.addEventListener("keydown", function (e) {
    if (!fc) return;
    if (e.key === "Escape") fc.close();
    else if (e.key === " ") { e.preventDefault(); fc.flip(); }
    else if (e.key === "1") fc.again();
    else if (e.key === "2") fc.got();
  });

  /* ---------------- Global events ---------------- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-act],[data-go],[data-f]");
    if (!t) return;
    if (t.hasAttribute("data-go")) { location.hash = "#/day/" + t.getAttribute("data-go"); return; }
    if (t.hasAttribute("data-f")) { resFilter[t.getAttribute("data-f")] = t.getAttribute("data-v"); vResources(); return; }
    var a = t.getAttribute("data-act"), n = parseInt(t.getAttribute("data-n"), 10);
    switch (a) {
      case "say": speak(t.getAttribute("data-t")); break;
      case "rec": recordToggle(t); break;
      case "flash": openFlash(dayVocab(route.n, t.getAttribute("data-scope"))); break;
      case "fflip": fc && fc.flip(); break;
      case "fagain": fc && fc.again(); break;
      case "fgot": fc && fc.got(); break;
      case "fsay": fc && fc.say(); break;
      case "fclose": fc && fc.close(); break;
      case "tstart": timerStart(n); vDay(); break;
      case "tpause": if (S.timer && S.timer.since) timerPause(); else { S.timer.since = Date.now(); save(); drawTimer(); } break;
      case "tstop": timerStop(); if (route.name === "day") vDay(); break;
      case "madj": addMinutes(n, parseInt(t.getAttribute("data-v"), 10)); refreshMinutes(); break;
      case "checkall": blocksFor(n).forEach(function (b, i) { S.blocks[n + ":" + i] = true; }); save(); afterDayChange(n); break;
      case "retake": render(); break;
      case "export": exportData(); break;
      case "reset": if (confirm("Delete all progress in this browser? This cannot be undone.")) { S = fresh(); save(); location.hash = "#/today"; render(); toast("Progress reset."); } break;
    }
  });
  document.addEventListener("change", function (e) {
    var t = e.target;
    if (t.classList && t.classList.contains("chk")) {
      var k = t.getAttribute("data-k"), n = parseInt(k.split(":")[0], 10);
      S.blocks[k] = t.checked; if (!t.checked) delete S.blocks[k];
      save(); afterDayChange(n, true);
    } else if (t.hasAttribute && t.hasAttribute("data-rub")) {
      var p = t.getAttribute("data-rub").split("|"), a = A.byId[p[0]];
      var st = S.tasks[p[0]] || (S.tasks[p[0]] = {}); var arr = st[p[1]] || (st[p[1]] = []);
      arr[parseInt(p[2], 10)] = t.checked;
      computeTotal(a); save(); renderTasks(a);
      var again = document.querySelector('[data-rub="' + t.getAttribute("data-rub") + '"]'); if (again) again.focus();
    } else if (t.hasAttribute && t.hasAttribute("data-done")) {
      var q = t.getAttribute("data-done").split("|"), st2 = S.tasks[q[0]] || (S.tasks[q[0]] = {});
      st2["done_" + q[1]] = t.checked; save();
    }
  });
  function afterDayChange(n, keepScroll) {
    var y = window.scrollY, wasDone = dayDone(n);
    vDay(); drawLineProg();
    if (keepScroll) window.scrollTo(0, y);
    if (wasDone) {
      var nxt = n < C.total ? "Tag " + (n + 1) + " is next." : "You completed the course!";
      toast("Day " + n + " complete. " + nxt);
    }
  }
  function exportData() {
    var blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "deutsch-100-progress-" + today() + ".json";
    document.body.appendChild(a); a.click(); a.remove();
  }

  render();
})();
