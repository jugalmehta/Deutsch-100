/* Deutsch in 100 Tagen: assignments (practice quizzes, graded tests, rubrics)
   Q(question, [options], correctIndex, explanation, optionalGermanTextToPlayAsAudio) */
(function () {
  "use strict";
  var C = window.COURSE;

  function Q(q, o, a, w, say) { return { q: q, o: o, a: a, w: w || "", say: say || "" }; }

  var PRACTICE = {
    1: [
      Q("Which greeting fits the evening?", ["Guten Morgen", "Guten Abend", "Gute Reise", "Guten Appetit"], 1, "Guten Abend is used from the late afternoon on."),
      Q("Complete: Ich ___ Anna.", ["heiße", "heißt", "heißen", "heiß"], 0, "With ich the verb ends in -e: ich heiße."),
      Q("Woher ___ du?", ["komme", "kommst", "kommt", "kommen"], 1, "With du the verb ends in -st: du kommst."),
      Q("Which word gets someone's attention politely (excuse me)?", ["Tschüss", "Entschuldigung", "Auf Wiedersehen", "Danke"], 1, "Entschuldigung means excuse me / sorry."),
      Q("Listen. What is the speaker's name?", ["Lena", "Lara", "Mia", "Nina"], 0, "The speaker says: Ich heiße Lena.", "Hallo! Ich heiße Lena und ich komme aus Polen.")
    ],
    2: [
      Q("Which number is 16?", ["sechzig", "sechzehn", "sechs", "sieben"], 1, "sechzehn = 16, sechzig = 60."),
      Q("Ich ___ 25 Jahre alt.", ["habe", "heiße", "bin", "komme"], 2, "Age uses sein: Ich bin 25 Jahre alt."),
      Q("How do you say 21?", ["zwanzigeins", "zweiundzehn", "einundzwanzig", "zweiundzwanzig"], 2, "From 21 the small number comes first: einundzwanzig."),
      Q("When do you use Sie?", ["With close friends", "With adults you don't know, formally", "Only in writing", "For plural 'they' only"], 1, "Sie (capital S) is the formal you."),
      Q("Listen. What is the phone number?", ["0151 234 567", "0151 243 567", "0115 234 567", "0151 234 576"], 0, "null eins fünf eins, zwei drei vier, fünf sechs sieben.", "Meine Telefonnummer ist null eins fünf eins, zwei drei vier, fünf sechs sieben.")
    ],
    3: [
      Q("Choose the correct article: ___ Schwester.", ["der", "die", "das", "den"], 1, "die Schwester (feminine)."),
      Q("Ich habe ___ Kinder. (I have no children.)", ["kein", "keine", "keinen", "nicht"], 1, "Plural nouns take keine."),
      Q("Meine Eltern ___ nett.", ["ist", "bin", "sind", "seid"], 2, "Plural: sie sind."),
      Q("Plural of 'mein Bruder':", ["Meine Brüder", "Mein Brüder", "Meine Bruders", "Meinen Brüder"], 0, "Bruder → Brüder, and the plural possessive is meine."),
      Q("Which means 'friendly'?", ["müde", "klein", "freundlich", "lustig"], 2, "freundlich = friendly.")
    ],
    4: [
      Q("Ich möchte ___ Kaffee. (der Kaffee)", ["ein", "einen", "einem", "eine"], 1, "Masculine Akkusativ: einen."),
      Q("How do you ask for the price?", ["Was kostet das?", "Was macht das gern?", "Wie kostet das?", "Wo kostet das?"], 0, "Was kostet das? = How much is that?"),
      Q("Ich kaufe ___ Brot. (das Brot)", ["den", "dem", "das", "die"], 2, "Neuter Akkusativ stays das."),
      Q("'Zahlen, bitte!' means:", ["Where is the exit?", "The bill, please!", "Please sit down.", "What's on the menu?"], 1, "You say it to ask for the bill."),
      Q("Listen. How much does it cost?", ["4,05 €", "4,50 €", "5,40 €", "14,50 €"], 1, "vier Euro fünfzig = 4,50 €.", "Das macht vier Euro fünfzig.")
    ],
    5: [
      Q("How do you say 14:30 informally?", ["halb drei", "halb vier", "Viertel drei", "drei vor halb"], 0, "14:30 = 2:30 = halb drei (half to three)."),
      Q("Ich ___ um 7 Uhr ___. (aufstehen)", ["stehe … auf", "aufstehe … –", "stehen … auf", "steht … auf"], 0, "The prefix goes to the end: Ich stehe um 7 Uhr auf."),
      Q("Which word order is correct?", ["Am Montag ich arbeite.", "Am Montag arbeite ich.", "Ich am Montag arbeite.", "Arbeite am Montag ich."], 1, "The verb is in position 2."),
      Q("'nie' means:", ["always", "sometimes", "never", "often"], 2, "nie = never."),
      Q("Der Film ___ um 20 Uhr ___. (anfangen)", ["fängt … an", "fangt … an", "anfängt", "fängt … auf"], 0, "er fängt an: stem change a → ä and separable prefix at the end.")
    ],
    6: [
      Q("How do you say 'Turn left'?", ["Biegen Sie links ab.", "Gehen Sie links auf.", "Fahren Sie links an.", "Kommen Sie links aus."], 0, "abbiegen = to turn."),
      Q("'geradeaus' means:", ["opposite", "far", "straight ahead", "corner"], 2, "geradeaus = straight ahead."),
      Q("Ich fahre ___ dem Bus.", ["nach", "bei", "mit", "für"], 2, "Means of transport uses mit + Dativ: mit dem Bus."),
      Q("Where do you buy medicine?", ["in der Bäckerei", "in der Apotheke", "in der Post", "im Park"], 1, "die Apotheke = pharmacy."),
      Q("Listen. Where is the bank?", ["Next to the post office", "Opposite the station", "Behind the park", "Next to the bakery"], 0, "Die Bank ist neben der Post.", "Gehen Sie geradeaus, dann die zweite Straße rechts. Die Bank ist neben der Post.")
    ],
    7: [
      Q("Ich ___ gut Deutsch sprechen.", ["können", "kann", "kannst", "kanne"], 1, "ich kann."),
      Q("Man ___ hier nicht rauchen. (not allowed)", ["muss", "darf", "will", "mag"], 1, "darf nicht = is not allowed to."),
      Q("Ich muss heute Wäsche ___.", ["waschen", "wasche", "wäscht", "gewaschen"], 0, "After a modal verb the infinitive goes to the end."),
      Q("'die Miete' means:", ["kitchen", "key", "rent", "window"], 2, "die Miete = rent."),
      Q("Plural of 'das Zimmer':", ["die Zimmer", "die Zimmern", "die Zimmers", "die Zimmere"], 0, "The plural of Zimmer is die Zimmer.")
    ],
    8: [
      Q("Er ___ gern Bücher.", ["lesen", "liest", "lese", "lest"], 1, "lesen is stem-changing: er liest."),
      Q("'Mir tut der Kopf weh.' means:", ["I'm hungry", "I have a headache", "I'm cold", "I'm late"], 1, "weh tun = to hurt."),
      Q("How do you say 'on May 3rd'?", ["am dritte Mai", "am dritten Mai", "am dreiten Mai", "am drei Mai"], 1, "Ordinals take -en after am: am dritten Mai."),
      Q("'Leider habe ich keine Zeit.' is:", ["an invitation", "a polite refusal", "a greeting", "a question"], 1, "It politely says no."),
      Q("Listen. When is the appointment?", ["Wednesday 2:30 pm", "Wednesday 4:30 pm", "Thursday 2:30 pm", "Tuesday 12:30 pm"], 0, "am Mittwoch um vierzehn Uhr dreißig.", "Guten Tag, hier ist die Praxis Doktor Weber. Ihr Termin ist am Mittwoch um vierzehn Uhr dreißig.")
    ],
    9: [
      Q("Gestern habe ich Pizza ___.", ["essen", "gegessen", "gegesst", "geesst"], 1, "essen → gegessen (irregular)."),
      Q("Wir ___ nach Hamburg gefahren.", ["haben", "sind", "werden", "waren"], 1, "Verbs of movement use sein."),
      Q("Partizip II of 'anrufen':", ["geanrufen", "angerufen", "anrufen", "angerufet"], 1, "Separable verbs put ge between prefix and stem: angerufen."),
      Q("Ich habe gestern Deutsch ___.", ["gelernet", "lernt", "gelernt", "gelern"], 2, "lernen → gelernt."),
      Q("Which order is correct?", ["Ich habe gestern einen Film gesehen.", "Ich habe gesehen gestern einen Film.", "Ich gesehen habe gestern einen Film.", "Gestern ich habe einen Film gesehen."], 0, "Participle at the end.")
    ],
    10: [
      Q("Das Buch gehört ___. (ich)", ["mich", "mir", "mein", "ich"], 1, "gehören takes Dativ: mir."),
      Q("Ich fahre mit ___ Bus. (der Bus)", ["den", "dem", "der", "das"], 1, "mit + Dativ: dem Bus."),
      Q("Das Bild hängt an ___ Wand. (die Wand, wo?)", ["die", "der", "dem", "den"], 1, "Position (wo?) = Dativ: an der Wand."),
      Q("Ich hänge das Bild an ___ Wand. (wohin?)", ["die", "der", "dem", "den"], 0, "Movement (wohin?) = Akkusativ: an die Wand."),
      Q("Kannst du ___ helfen? (wir)", ["wir", "uns", "unser", "unsere"], 1, "helfen + Dativ: uns.")
    ],
    11: [
      Q("Which greeting suits a formal email to Frau Müller?", ["Hi Frau Müller,", "Sehr geehrte Frau Müller,", "Sehr geehrter Frau Müller,", "Liebes Frau Müller,"], 1, "Sehr geehrte Frau … for women."),
      Q("Präteritum of 'ich habe':", ["habte", "hatte", "hatt", "gehabt"], 1, "ich hatte."),
      Q("Ich ___ gestern lange arbeiten. (müssen)", ["muss", "musste", "müsste", "gemusst"], 1, "Präteritum of müssen: musste."),
      Q("Ich arbeite ___ Softwareentwickler.", ["wie", "bei", "als", "für"], 2, "als = as (profession)."),
      Q("'Mit freundlichen Grüßen' is used:", ["at the end of formal emails", "at the start of emails", "only for friends", "when leaving a room"], 0, "It is the standard formal closing.")
    ],
    12: [
      Q("Which sentence is correct?", ["Ich bleibe zu Hause, weil ich bin krank.", "Ich bleibe zu Hause, weil ich krank bin.", "Ich bleibe zu Hause, weil bin ich krank.", "Ich bleibe zu Hause weil krank ich bin."], 1, "After weil the verb goes to the end."),
      Q("Ich glaube, ___ er kommt.", ["das", "weil", "dass", "denn"], 2, "dass introduces a that-clause."),
      Q("Wenn es regnet, ___ ich zu Hause.", ["ich bleibe", "bleibe ich", "bleiben", "bleibt"], 1, "After the wenn-clause the main-clause verb comes first."),
      Q("Ich weiß nicht, ___ er kommt.", ["ob", "dass", "weil", "wenn"], 0, "ob = whether."),
      Q("'Ich hätte gern ein Doppelzimmer.' means:", ["I have a double room", "Is a double room available?", "I would like a double room", "I'm cancelling a double room"], 2, "hätte gern = would like.")
    ],
    13: [
      Q("Ich freue ___ auf das Wochenende.", ["sich", "mich", "dich", "mir"], 1, "ich → mich."),
      Q("Imperativ (du) of 'kommen':", ["Kommst!", "Komm!", "Kommen Sie!", "Kommt!"], 1, "du-Imperativ drops -st: Komm!"),
      Q("'Nehmen Sie die Tabletten dreimal täglich.' is:", ["an instruction", "a question", "a wish", "a complaint"], 0, "It is an Imperativ (Sie)."),
      Q("Wir treffen ___ um 6 Uhr.", ["euch", "sich", "uns", "mir"], 2, "wir → uns."),
      Q("Du ___ mehr schlafen. (polite advice)", ["sollten", "solltest", "sollte", "solltet"], 1, "du solltest.")
    ],
    14: [
      Q("Comparative of 'groß':", ["großer", "größer", "gröser", "mehr groß"], 1, "groß → größer (umlaut)."),
      Q("Superlative of 'gut':", ["am besten", "am gutesten", "besser", "am besser"], 0, "gut – besser – am besten."),
      Q("Ich nehme den ___ Pullover. (blau)", ["blaue", "blauen", "blauer", "blaues"], 1, "den + masc. Akkusativ: -en."),
      Q("Sie trägt eine ___ Jacke. (rot)", ["roten", "rote", "rotes", "roter"], 1, "eine + feminine Akkusativ: -e."),
      Q("Tee ist billiger ___ Kaffee.", ["wie", "dass", "als", "denn"], 2, "Comparative + als.")
    ],
    15: [
      Q("Which request is the most polite?", ["Geben Sie mir einen Termin.", "Ich will einen Termin.", "Könnten Sie mir bitte einen Termin geben?", "Termin jetzt!"], 2, "Könnten Sie …? is Konjunktiv II politeness."),
      Q("Ich ___ gern einen Termin.", ["hätte", "habe", "hatte", "haben"], 0, "Ich hätte gern … = I would like …"),
      Q("'Das Formular' means:", ["fee", "deadline", "form", "stamp"], 2, "das Formular = form."),
      Q("'Die Öffnungszeiten' are:", ["prices", "opening hours", "addresses", "exits"], 1, "Opening hours."),
      Q("Ich ___ mich gern anmelden.", ["möchtest", "möchten", "möchte", "möchtet"], 2, "ich möchte.")
    ],
    16: [
      Q("Which sentence expresses an opinion?", ["Meiner Meinung nach ist das sinnvoll.", "Ich habe das gestern gesehen.", "Das Wetter ist schön.", "Wie spät ist es?"], 0, "Meiner Meinung nach = in my opinion."),
      Q("'Einerseits … andererseits' shows:", ["two sides or contrasts", "two places", "two times", "two people"], 0, "On the one hand … on the other hand."),
      Q("Obwohl es regnet, ___ wir spazieren.", ["wir gehen", "gehen wir", "gehen", "gegangen"], 1, "After the obwohl-clause the main-clause verb comes first."),
      Q("Ich lerne Deutsch, ___ einen Job zu finden.", ["damit", "weil", "um", "dass"], 2, "um … zu + Infinitiv (same subject)."),
      Q("Ich spare Geld, ___ ich im Sommer reisen kann.", ["um", "obwohl", "damit", "dass"], 2, "damit introduces a purpose clause with its own subject and finite verb.")
    ],
    17: [
      Q("Das ist der Kollege, ___ neben mir sitzt.", ["der", "den", "dem", "das"], 0, "Nominativ masculine relative pronoun: der."),
      Q("Das ist die Frau, ___ ich gestern getroffen habe.", ["der", "die", "den", "das"], 1, "Feminine Akkusativ: die."),
      Q("Das Projekt, ___ wir planen, ist wichtig.", ["den", "dem", "das", "der"], 2, "Neuter Akkusativ: das."),
      Q("'Ich bin teamfähig' means:", ["I work well in a team", "I am late", "I am the boss", "I am tired"], 0, "teamfähig = team-oriented."),
      Q("'Kann ich etwas ausrichten?' is said:", ["at the doctor's", "on the phone", "in a supermarket", "at the station"], 1, "It offers to pass on a message.")
    ],
    18: [
      Q("Das Paket ___ morgen geliefert.", ["ist", "hat", "wird", "wirdt"], 2, "Passiv Präsens: wird + Partizip II."),
      Q("Die Firma ___ 1990 gegründet.", ["wird", "ist", "wurde", "hat"], 2, "Passiv Präteritum: wurde + Partizip II."),
      Q("Passive of 'Man repariert das Auto.':", ["Das Auto wird repariert.", "Das Auto hat repariert.", "Das Auto repariert wird.", "Das Auto wurde repariert werden."], 0, "werden + Partizip II."),
      Q("Die Rechnungen ___ per E-Mail geschickt.", ["wird", "werden", "sind", "hat"], 1, "Plural subject: werden."),
      Q("Das muss noch erledigt ___.", ["wird", "worden", "werden", "sein"], 2, "Modal + Partizip II + werden.")
    ],
    19: [
      Q("Wenn ich reich ___, würde ich reisen.", ["bin", "wäre", "war", "werde"], 1, "Konjunktiv II of sein: wäre."),
      Q("An deiner Stelle ___ ich mehr schlafen.", ["werde", "wurde", "würde", "würden"], 2, "würde + Infinitiv."),
      Q("Ich wünschte, ich ___ mehr Zeit.", ["habe", "hätte", "hatte", "hab"], 1, "Konjunktiv II of haben: hätte."),
      Q("'der Klimawandel' means:", ["climate change", "weather forecast", "environmental protection", "energy"], 0, "der Klimawandel = climate change."),
      Q("'Die Zahl ist von 20 auf 35 Prozent gestiegen.' means the number:", ["fell from 35 to 20", "rose from 20 to 35 percent", "stayed at 20", "doubled to 40"], 1, "steigen = to rise.")
    ],
    20: [
      Q("Präteritum of 'gehen' (er):", ["gehte", "ging", "gegangen", "gang"], 1, "er ging."),
      Q("Nachdem ich gegessen ___, ging ich spazieren.", ["war", "habe", "hatte", "hätte"], 2, "Plusquamperfekt: hatte + Partizip II."),
      Q("___ ich klein war, wohnte ich auf dem Land.", ["Wenn", "Ob", "Als", "Weil"], 2, "als for a single past period or event."),
      Q("___ ich Zeit hatte, ging ich schwimmen. (repeatedly)", ["Als", "Wenn", "Ob", "Dass"], 1, "wenn for repeated past events."),
      Q("'enttäuscht' means:", ["excited", "relieved", "disappointed", "tired"], 2, "enttäuscht = disappointed.")
    ],
    21: [
      Q("Ich habe vergessen, dich ___.", ["zu anrufen", "anzurufen", "anrufen zu", "gerufen an"], 1, "Separable verbs: zu goes between prefix and stem."),
      Q("Es ist wichtig, pünktlich ___ sein.", ["um", "dass", "zu", "für"], 2, "Infinitiv mit zu after es ist wichtig."),
      Q("Which closing is formal?", ["LG", "Tschüss", "Bis bald", "Mit freundlichen Grüßen"], 3, "It is the standard formal closing."),
      Q("Ich ___ Ihnen dankbar, wenn Sie mir antworten könnten.", ["bin", "war", "wäre", "werde"], 2, "Ich wäre Ihnen dankbar, wenn … is a fixed polite phrase."),
      Q("'defekt' means:", ["delivered", "refund", "broken", "cheap"], 2, "defekt = broken.")
    ],
    22: [
      Q("Wegen ___ Wetters bleiben wir zu Hause.", ["dem", "des", "der", "das"], 1, "wegen + Genitiv: des Wetters."),
      Q("Das ist das Buch ___ Schwester.", ["meine", "meiner", "meinem", "mein"], 1, "Feminine Genitiv: meiner Schwester."),
      Q("Ich ___ nächstes Jahr die Prüfung machen.", ["wurde", "würde", "werde", "bin"], 2, "Futur I: werde + Infinitiv."),
      Q("'bestehen' (an exam) means:", ["to fail", "to pass", "to repeat", "to book"], 1, "eine Prüfung bestehen = to pass an exam."),
      Q("Trotz ___ Regens gehen wir spazieren.", ["der", "dem", "des", "den"], 2, "trotz + Genitiv: des Regens.")
    ]
  };

  var TEST_A1 = [
    Q("Listen. How old is Karim?", ["13", "30", "33", "23"], 1, "dreißig = 30.", "Guten Tag! Ich heiße Karim, ich bin dreißig Jahre alt und komme aus Ägypten."),
    Q("Wie ___ Sie?", ["heißt", "heißen", "heiße", "heiß"], 1, "Sie takes the plural form: heißen."),
    Q("Wir ___ Studenten.", ["bin", "ist", "sind", "seid"], 2, "wir sind."),
    Q("Listen. When does work start?", ["6:30", "7:30", "8:00", "8:30"], 2, "Um acht Uhr fängt die Arbeit an.", "Ich stehe um halb sieben auf. Um acht Uhr fängt die Arbeit an."),
    Q("Ich habe ___ Auto. (I don't have a car.)", ["keine", "nicht", "kein", "keinen"], 2, "das Auto → kein Auto."),
    Q("Ich kaufe ___ Apfel. (der Apfel)", ["ein", "einen", "eine", "einem"], 1, "Masculine Akkusativ: einen."),
    Q("Which sentence has the correct word order?", ["Morgen ich gehe ins Kino.", "Morgen gehe ich ins Kino.", "Ich morgen gehe ins Kino.", "Gehe morgen ich ins Kino."], 1, "The verb is in position 2."),
    Q("Listen. Which platform?", ["Gleis 5", "Gleis 6", "Gleis 7", "Gleis 17"], 2, "Gleis sieben = platform 7.", "Achtung! Der Zug nach Hamburg fährt von Gleis sieben ab."),
    Q("Man ___ hier nicht parken.", ["muss", "darf", "will", "mag"], 1, "darf nicht = is not allowed."),
    Q("Where would you say 'Ich möchte einen Termin vereinbaren'?", ["at a bus stop", "at the doctor's reception", "in a bakery", "at a party"], 1, "It's used to make an appointment."),
    Q("Er ___ gern Fußball. (spielen)", ["spiele", "spielen", "spielt", "spielst"], 2, "er spielt."),
    Q("Die Bank ist ___ dem Bahnhof. (next to)", ["über", "neben", "gegen", "für"], 1, "neben = next to.")
  ];

  var TEST_A2 = [
    Q("Listen. What did the speaker do?", ["Visited friends in Munich", "Stayed at home", "Worked in Munich", "Went to a concert"], 0, "Sie fuhr nach München und besuchte Freunde.", "Am Wochenende bin ich nach München gefahren und habe meine Freunde besucht. Wir haben viel gelacht."),
    Q("Gestern ___ ich lange geschlafen.", ["bin", "habe", "wurde", "war"], 1, "schlafen forms Perfekt with haben."),
    Q("Er ist um 8 Uhr ___. (aufstehen)", ["aufgestehen", "aufgestanden", "aufstand", "gestanden"], 1, "aufstehen → ist aufgestanden."),
    Q("Ich lege das Buch ___ Tisch. (der Tisch)", ["auf dem", "auf den", "auf der", "auf das"], 1, "Movement (wohin?) takes Akkusativ."),
    Q("Ich helfe ___ Kollegin. (die Kollegin)", ["die", "den", "der", "das"], 2, "helfen + Dativ: der Kollegin."),
    Q("Ich bleibe zu Hause, weil ich ___.", ["bin krank", "krank bin", "ich krank bin", "krank ich bin"], 1, "After weil ich the verb goes to the end: krank bin."),
    Q("Listen. What does the caller want?", ["An appointment on Tuesday at ten", "A table for ten", "A ticket for Tuesday", "To cancel Tuesday"], 0, "Termin für nächsten Dienstag um zehn Uhr.", "Guten Tag, ich möchte gern einen Termin für nächsten Dienstag. Hätten Sie um zehn Uhr Zeit?"),
    Q("Berlin ist ___ als Frankfurt.", ["groß", "am größten", "größer", "größte"], 2, "Comparative + als."),
    Q("Ich nehme den ___ Mantel. (schwarz)", ["schwarze", "schwarzen", "schwarzer", "schwarz"], 1, "den + masculine Akkusativ: -en."),
    Q("'Könnten Sie mir bitte helfen?' is:", ["a command", "a very polite request", "a weather remark", "an apology"], 1, "Konjunktiv II makes requests polite."),
    Q("Wir sind letztes Jahr nach Spanien ___.", ["fliegen", "geflogt", "geflogen", "flogen"], 2, "fliegen → ist geflogen."),
    Q("Listen. What must you bring?", ["A photo", "A key", "An ID (Ausweis)", "A contract"], 2, "Bringen Sie Ihren Ausweis mit.", "Sie müssen Ihr Formular bis Freitag im Bürgeramt abgeben und Ihren Ausweis mitbringen.")
  ];

  var MOCK_1 = [
    Q("Text 1: 'Hallo Tim, leider kann ich am Samstag nicht zu deiner Party kommen, weil ich arbeiten muss. Können wir uns stattdessen am Sonntag zum Frühstück treffen? Ich lade dich ein. Liebe Grüße, Jana'. Why can't Jana come on Saturday?", ["She has to work", "She is ill", "She is travelling", "She has no time to cook"], 0, "weil ich arbeiten muss."),
    Q("Text 1: What does Jana suggest?", ["Dinner on Saturday", "Breakfast on Sunday", "A phone call", "Lunch on Monday"], 1, "am Sonntag zum Frühstück."),
    Q("Text 2: 'Achtung, liebe Mieter! Am Dienstag von 8 bis 12 Uhr wird das Wasser abgestellt, weil die Rohre repariert werden. Bitte füllen Sie rechtzeitig Wasser in Flaschen ab. Die Hausverwaltung'. What will happen on Tuesday?", ["The lift will be replaced", "Rent will increase", "The water will be turned off in the morning", "The heating will break"], 2, "Das Wasser wird abgestellt."),
    Q("Text 2: What should residents do?", ["Call the caretaker", "Move their cars", "Stay at home all day", "Store some water beforehand"], 3, "Bitte füllen Sie rechtzeitig Wasser ab."),
    Q("Text 3: 'Ich finde, dass man in der Stadt kein Auto braucht. Der öffentliche Verkehr ist gut, und Parkplätze sind teuer. Außerdem ist das Fahrrad schneller, wenn viel Verkehr ist. Nur für lange Reisen würde ich ein Auto mieten.' What is the writer's main opinion?", ["Cars are unnecessary in cities", "Cars are cheap", "Bikes are dangerous", "Buses are too slow"], 0, "kein Auto braucht in der Stadt."),
    Q("Text 3: When would the writer rent a car?", ["Every weekend", "For shopping", "For long trips", "Never"], 2, "Nur für lange Reisen."),
    Q("Listen. Why is the caller calling?", ["To confirm a prescription", "To move an appointment", "To sell insurance", "To book a room"], 1, "Der Termin muss verschoben werden.", "Guten Tag, hier ist die Praxis von Doktor Klein. Ihr Termin am Montag muss leider verschoben werden. Bitte rufen Sie uns zurück."),
    Q("Listen. What is the situation?", ["Train delayed 20 minutes, platform 12", "Train cancelled", "Train early, platform 2", "Train delayed 12 minutes, platform 20"], 0, "zwanzig Minuten Verspätung, Gleis zwölf.", "Der Zug nach Köln hat zwanzig Minuten Verspätung und fährt von Gleis zwölf ab."),
    Q("Listen. Why did the speaker apply?", ["Higher salary", "Famous company", "A friend recommended it", "It fits the training and is closer to family"], 3, "passt zur Ausbildung und näher an der Familie.", "Ich habe mich beworben, weil die Stelle gut zu meiner Ausbildung passt und weil ich näher an meiner Familie wohnen möchte."),
    Q("Listen. What happens if it rains?", ["They have a picnic", "They stay at home", "They go to the cinema", "They go shopping"], 2, "Sonst gehen wir ins Kino.", "Wenn das Wetter am Samstag schön ist, machen wir ein Picknick im Park. Sonst gehen wir ins Kino."),
    Q("Listen. What happened first?", ["He passed the exam", "He celebrated", "He met new friends", "He started studying"], 0, "Nachdem … bestanden hatte: passing came first.", "Nachdem er die Prüfung bestanden hatte, feierte er mit seinen Freunden."),
    Q("Obwohl es kalt ___, gehen wir schwimmen.", ["sein", "ist", "hat", "wird"], 1, "obwohl-clause: verb at the end, es ist kalt."),
    Q("Das ist der Mann, ___ ich gestern geholfen habe.", ["den", "dem", "der", "das"], 1, "helfen + Dativ: dem."),
    Q("Wenn ich mehr Zeit ___, würde ich öfter Sport machen.", ["habe", "hatte", "hätte", "hab"], 2, "Konjunktiv II: hätte."),
    Q("Die Rechnung ___ gestern bezahlt.", ["wird", "hat", "wurde", "werden"], 2, "Passiv Präteritum: wurde."),
    Q("Ich freue mich ___ das Wochenende.", ["über", "für", "auf", "an"], 2, "sich freuen auf = to look forward to.")
  ];

  var RUBRIC = {
    A1: {
      write: ["I wrote at least 40 words.", "Every sentence has the verb in position 2.", "I used greetings and a closing (Hallo … Tschüss).", "I capitalised all nouns and used ä, ö, ü, ß correctly.", "I used vocabulary from at least 4 modules."],
      speak: ["I spoke for about a minute without long pauses.", "I pronounced ch, sch, ü and w clearly.", "I answered every prompt.", "I used polite words (bitte, danke).", "I recorded myself and listened back."]
    },
    A2: {
      write: ["I wrote at least 80 words.", "I used Perfekt correctly (haben/sein + Partizip II at the end).", "I used at least two weil/dass/wenn clauses with the verb at the end.", "I used a polite form (Könnten Sie …).", "I checked cases, endings and spelling."],
      speak: ["I spoke for about 2 minutes.", "I used Perfekt and Präteritum of sein/haben.", "I asked and answered questions.", "I used connectors (weil, dann, danach).", "I recorded myself and listened back."]
    },
    B1: {
      write: ["I addressed every bullet point in the task.", "Length: the required number of words (about 80/80/40).", "I used the right register (du vs Sie) and a correct opening and closing.", "I used at least 3 different subordinate clauses correctly.", "I used connectors and varied tenses (Perfekt, Präteritum, Konjunktiv II)."],
      speak: ["I spoke clearly with few long pauses.", "I structured the presentation (intro, main part, conclusion).", "I gave reasons and examples for my opinion.", "I reacted to questions and asked back.", "My grammar (verb position, cases) was mostly correct."]
    }
  };

  var LIST = [];
  C.modules.forEach(function (m) {
    if (m.id === 23) return;
    LIST.push({
      id: "practice-" + m.id, level: m.lv, kind: "practice", module: m.id, day: m.e, pass: 70,
      title: "Module " + m.id + ": " + m.en, quiz: PRACTICE[m.id],
      tasks: [{ k: "speak", label: "Speaking task", text: m.speak }, { k: "write", label: "Writing task", text: m.write }]
    });
    if (m.id === 8) {
      LIST.push({ id: "test-a1", level: "A1", kind: "test", module: 8, day: 34, pass: 60, title: "A1 graded assignment", quiz: TEST_A1,
        weights: { quiz: 0.6, write: 0.2, speak: 0.2 }, rubric: RUBRIC.A1,
        tasks: [{ k: "write", label: "Writing test", text: "Write an email of 40 to 60 words to a new friend. Introduce yourself (name, origin, home, work), say what you like doing and invite them for a coffee." },
                { k: "speak", label: "Speaking test", text: "Introduce yourself for one minute, then answer aloud: Wo wohnst du? Was isst du gern? Wie sieht dein Tag aus? Finally ask three questions of your own." }] });
    }
    if (m.id === 15) {
      LIST.push({ id: "test-a2", level: "A2", kind: "test", module: 15, day: 64, pass: 60, title: "A2 graded assignment", quiz: TEST_A2,
        weights: { quiz: 0.6, write: 0.2, speak: 0.2 }, rubric: RUBRIC.A2,
        tasks: [{ k: "write", label: "Writing test", text: "Write an email of 80 to 100 words to your landlord: the heating does not work. Describe the problem, say since when, and ask for an appointment." },
                { k: "speak", label: "Speaking test", text: "Talk for two minutes about your last holiday or weekend in Perfekt. Then role-play booking a doctor's appointment (2 minutes)." }] });
    }
  });
  LIST.push({ id: "mock-1", level: "B1", kind: "test", module: 23, day: 98, pass: 60, title: "B1 mock exam 1: Lesen, Hören, Sprachbausteine", quiz: MOCK_1,
    weights: { quiz: 1 }, tasks: [] });
  LIST.push({ id: "mock-2", level: "B1", kind: "test", module: 23, day: 99, pass: 60, title: "B1 mock exam 2: Schreiben and Sprechen", quiz: [],
    weights: { write: 0.5, speak: 0.5 }, rubric: RUBRIC.B1,
    tasks: [{ k: "write", label: "Schreiben (3 tasks)", text: "Task 1: informal email to a friend (about 80 words) about a plan you cannot keep. Task 2: forum post (about 80 words): 'Should cities ban cars from the centre?' Task 3: formal email (about 40 words) to a company about a defective product." },
            { k: "speak", label: "Sprechen (3 parts)", text: "Part 1: plan a farewell party with a partner (or record both roles). Part 2: give a 3-minute presentation about a topic of your choice. Part 3: answer three follow-up questions." }] });

  var BY = {};
  LIST.forEach(function (a) { BY[a.id] = a; });
  window.ASSIGN = { list: LIST, byId: BY };
})();
