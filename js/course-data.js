/* Deutsch in 100 Tagen: course content (levels, modules, days, resources)
   Edit this file to change the plan. Format for vocab/phrases: "German=English;German=English" */
(function () {
  "use strict";

  var LEVELS = [
    { id: "A1", name: "Anfänger", en: "Beginner", s: 1, e: 34, color: "#0B7A5B", ink: "#FFFFFF",
      goal: "Introduce yourself, handle simple everyday situations (shopping, cafés, directions, appointments) and understand slow, clear speech." },
    { id: "A2", name: "Grundlagen", en: "Elementary", s: 35, e: 64, color: "#E0A100", ink: "#1B2430",
      goal: "Talk about the past, your home and work, and get things done at offices, in shops and while travelling." },
    { id: "B1", name: "Selbstständig", en: "Independent user", s: 65, e: 100, color: "#B4232A", ink: "#FFFFFF",
      goal: "Give opinions, tell stories, write formal emails and handle all four parts of a B1 exam with confidence." }
  ];

  var MODULES = [];
  function mod(id, lv, en, de, s, e, goal, gram, speak, write) {
    MODULES.push({ id: id, lv: lv, en: en, de: de, s: s, e: e, goal: goal, gram: gram, speak: speak, write: write });
  }

  /* ---------- A1 ---------- */
  mod(1, "A1", "Hello! Sounds and greetings", "Hallo! Laute und Begrüßung", 1, 4,
    "Pronounce the alphabet and core sounds, greet people and say your name.",
    "Alphabet, vowel length, W-questions, sein and regular verbs",
    "Introduce yourself in 30 seconds: greet, say your name, spell it, say where you come from. Record it and listen back.",
    "Write 5 lines of a self-introduction: Hallo, Ich heiße …, Ich komme aus …, Ich wohne in …, Tschüss.");
  mod(2, "A1", "About me: numbers and personal data", "Das bin ich: Zahlen und Daten", 5, 8,
    "Count to 100, give your age, phone number and address, and use du and Sie correctly.",
    "Numbers, personal data, du vs Sie",
    "Say your age, phone number and the languages you speak: Ich bin … Jahre alt. Meine Telefonnummer ist …",
    "Fill in a registration form and write 5 sentences about yourself (name, age, address, languages).");
  mod(3, "A1", "Family and friends", "Familie und Freunde", 9, 12,
    "Describe your family and friends and say what you have and don't have.",
    "Noun genders, possessives (mein/meine), haben, negation with kein and nicht, adjectives with sein",
    "Present a person you know (family or friend) in 5 sentences.",
    "Write a short text of 6 to 8 sentences called Meine Familie.");
  mod(4, "A1", "Food and shopping", "Essen und Einkaufen", 13, 16,
    "Order food and drinks, ask prices and shop for everyday items.",
    "möchten, Akkusativ (der → den), prices, quantities",
    "Role-play ordering in a café and paying: Ich möchte … Zahlen, bitte!",
    "Write a shopping list and a short supermarket dialogue (6 lines).");
  mod(5, "A1", "My day: time and routine", "Mein Tag: Uhrzeit und Alltag", 17, 20,
    "Tell the time, name the days and describe your daily routine.",
    "Clock times, separable verbs, verb in position 2, frequency words",
    "Describe your daily routine with times (8 sentences).",
    "Write a short email to a friend about your week (40 to 50 words) using at least 3 separable verbs.");
  mod(6, "A1", "In the city: places and directions", "In der Stadt: Orte und Wege", 21, 24,
    "Name places, ask for directions and buy tickets for public transport.",
    "es gibt, location chunks (im, in der, am), Imperativ Sie, transport vocabulary",
    "Ask for and give directions to the station (role-play, 2 minutes).",
    "Write directions from your home to the nearest supermarket (6 sentences).");
  mod(7, "A1", "Living: flats and modal verbs", "Wohnen und Modalverben", 25, 28,
    "Talk about your flat, understand a flat ad and use modal verbs for rules and abilities.",
    "Plural forms, können/müssen/wollen/dürfen, polite phone calls",
    "Phone call: ask about a flat viewing. Write a short script first, then record it.",
    "Write an ad for your dream flat or a flat-share room (6 to 8 sentences).");
  mod(8, "A1", "Free time, health and appointments", "Freizeit, Gesundheit und Termine", 29, 32,
    "Talk about hobbies, make appointments, describe symptoms and the weather.",
    "Stem-changing verbs, gern, dates and months, body vocabulary",
    "Make a doctor's appointment by phone, then invite a friend to a hobby activity.",
    "Write a message inviting a friend out this weekend. Mention the weather and the time.");

  /* ---------- A2 ---------- */
  mod(9, "A2", "The past: Perfekt", "Vergangenes erzählen: Perfekt", 35, 38,
    "Report what you did yesterday, last weekend and on holiday.",
    "Perfekt with haben and sein, Partizip II, time expressions",
    "Tell a story about your last weekend in Perfekt (1 minute).",
    "Write a diary entry about last weekend (8 to 10 sentences in Perfekt).");
  mod(10, "A2", "Home and moving: Dativ", "Wohnung und Umzug: Dativ", 39, 42,
    "Say where things are and where you put them; handle a move and contracts.",
    "Dativ, personal pronouns in Dativ, Wechselpräpositionen (wo? wohin?)",
    "Describe where things are in your room (Dativ) and what you put where (Akkusativ).",
    "Write a moving to-do list and a message to a new neighbour (8 sentences).");
  mod(11, "A2", "Work and career", "Arbeit und Beruf", 43, 46,
    "Describe your job, use Präteritum of sein/haben/modals and write formal work emails.",
    "Präteritum of sein, haben and modal verbs, formal email structure",
    "Introduce your job and workplace in 1 minute.",
    "Write a short formal email (60 words) asking to move a meeting.");
  mod(12, "A2", "Travel and subordinate clauses", "Reisen und Nebensätze", 47, 50,
    "Give reasons and conditions and book hotels and trips.",
    "weil, dass, wenn, ob (verb at the end), Konjunktiv II chunks for booking",
    "Explain why you are learning German using weil and dass (1 minute).",
    "Write a booking email to a hotel (50 to 60 words).");
  mod(13, "A2", "Health and advice", "Gesundheit und Ratschläge", 51, 54,
    "Visit the doctor, understand advice and describe how you feel.",
    "Reflexive verbs, Imperativ, sollen and sollte for advice",
    "Role-play: tell a doctor your symptoms and receive advice.",
    "Write 8 tips for a healthy life using Imperativ and sollte.");
  mod(14, "A2", "Clothes and comparisons", "Kleidung und Vergleiche", 55, 58,
    "Shop for clothes and compare things, places and people.",
    "Adjective endings, Komparativ, Superlativ",
    "Role-play shopping for clothes: ask for size and colour, try things on.",
    "Compare two products or cities in 8 sentences.");
  mod(15, "A2", "Offices and everyday life in Germany", "Behörden und Alltag", 59, 62,
    "Handle the Bürgeramt, forms, letters and polite requests.",
    "Konjunktiv II for politeness, reading official notices",
    "Role-play at the Bürgeramt: ask what documents you need.",
    "Write a formal letter (60 to 80 words) asking for an appointment.");

  /* ---------- B1 ---------- */
  mod(16, "B1", "Opinions and discussion", "Meinung und Diskussion", 65, 68,
    "Give and defend an opinion, agree and disagree, structure a short discussion.",
    "obwohl, damit, um … zu, während, ob; argument connectors",
    "Give a 2-minute opinion on a topic (for example working from home) with pros and cons.",
    "Write a forum post of about 80 words giving your opinion (B1 Schreiben task 2 style).");
  mod(17, "B1", "Working life and relative clauses", "Arbeitsleben und Relativsätze", 69, 72,
    "Explain your experience, take part in interviews and meetings, describe people and things with relative clauses.",
    "Relativsätze (Nominativ, Akkusativ, Dativ), interview and meeting language",
    "Mock job interview, 3 minutes: introduce yourself, strengths, motivation.",
    "Write the opening paragraph of a cover letter and a 5-line CV summary.");
  mod(18, "B1", "Media, technology and the passive", "Medien und Technik: Passiv", 73, 76,
    "Describe processes and events without naming the doer; talk about media and technology.",
    "Passiv Präsens, Präteritum and Perfekt, Modalverben + Passiv",
    "Describe how something is made or organised (Passiv), 1 minute.",
    "Write an email of about 80 words to a company about the status of an order.");
  mod(19, "B1", "Society, environment and Konjunktiv II", "Gesellschaft, Umwelt und Konjunktiv II", 77, 80,
    "Express wishes, give advice and talk about unreal situations; describe charts.",
    "Konjunktiv II (wäre, hätte, würde), describing graphs",
    "Talk about wishes and advice for 1 minute: Wenn ich … hätte, würde ich …",
    "Write a short essay (about 100 words) on an environmental problem and your proposal.");
  mod(20, "B1", "Telling experiences", "Erlebnisse erzählen", 81, 84,
    "Narrate past events in order using Präteritum, Perfekt and Plusquamperfekt.",
    "Präteritum, Plusquamperfekt, nachdem, als vs wenn",
    "Tell a memorable experience (1.5 minutes).",
    "Write a story of a surprising day (about 100 words).");
  mod(21, "B1", "Formal writing and complaints", "Formelle Korrespondenz", 85, 88,
    "Write clear formal emails: complaints, requests, invitations, replies.",
    "Infinitiv mit zu, formal register, complaint structure",
    "Phone a customer service line to complain and request a solution.",
    "Write a formal complaint email (80 to 100 words).");
  mod(22, "B1", "Education, future and Genitiv", "Bildung, Zukunft und Genitiv", 89, 92,
    "Talk about plans, education and possibilities; use Genitiv and Futur.",
    "Futur I, Genitiv and prepositions with Genitiv, connector review",
    "Present your plans for the next five years (2 minutes).",
    "Write about the advantages and disadvantages of lifelong learning (about 100 words).");
  MODULES.push({ id: 23, lv: "B1", en: "B1 exam bootcamp", de: "B1-Prüfungstraining", s: 93, e: 100,
    goal: "Practise all four exam skills under time, sit two mock exams and close your gaps.",
    gram: "Exam strategies for Lesen, Hören, Schreiben, Sprechen", speak: "", write: "" });

  /* ---------- Days ---------- */
  var DAYS = {};
  function pairs(str) {
    if (!str) return [];
    return str.split(";").map(function (x) {
      var i = x.indexOf("=");
      return [x.slice(0, i).trim(), x.slice(i + 1).trim()];
    });
  }
  function L(n, m, t, c, v, p, s, l, o) {
    DAYS[n] = { n: n, m: m, type: "lesson", t: t, c: c, v: pairs(v), p: pairs(p), s: s, l: l, o: o };
  }

  /* Module 1 */
  L(1, 1, "The alphabet and first greetings",
    "Learn the German alphabet (das Alphabet) and the letter names, plus ä, ö, ü and ß. Spell your own name aloud. Learn greetings for morning, day, evening and goodbye.",
    "Hallo=hello;Guten Morgen=good morning;Guten Tag=good day / hello;Guten Abend=good evening;Tschüss=bye (informal);Auf Wiedersehen=goodbye (formal);Danke=thank you;Bitte=please / you're welcome;Ja=yes;Nein=no",
    "Wie heißt du?=What is your name?;Ich heiße …=My name is …;Wie geht's?=How are you?",
    "Long and short vowels: Name (long a) vs Mann (short a). German w sounds like English v: Wasser.",
    "Watch a beginner alphabet or Lektion 1 video (DW Nicos Weg A1 or Easy German). Repeat each letter name.",
    "Spell your first and last name in German letter names. Write greetings for morning, day and evening.");
  L(2, 1, "Sounds that trip learners up",
    "Learn ch (ich vs Buch), sch, sp/st at the start of a word, ei/ie/eu/äu and the umlauts ü and ö. Learn how to ask for help: Wie bitte? Noch einmal, bitte.",
    "ich=I;du=you (informal);Sie=you (formal);sprechen=to speak;verstehen=to understand;Deutsch=German;Englisch=English;Entschuldigung=excuse me / sorry;Wie bitte?=Pardon?;Noch einmal, bitte.=Once more, please.",
    "Sprechen Sie Englisch?=Do you speak English?;Ich verstehe nicht.=I don't understand.;Sprechen Sie bitte langsamer.=Please speak more slowly.",
    "ch after i/e is soft (ich), after a/o/u it is throaty (Buch). ei sounds like English 'eye', ie like 'ee'.",
    "Use the Goethe-Institut Aussprachetrainer for 10 minutes and repeat the minimal pairs.",
    "Record yourself reading the 10 words twice. Compare with the audio and re-record the two hardest words.");
  L(3, 1, "sein, kommen, wohnen and W-questions",
    "Present tense of regular verbs: ich -e, du -st, er/sie -t, wir -en, ihr -t, sie/Sie -en. Learn sein: bin, bist, ist, sind, seid, sind. W-questions: Wie? Wo? Woher? Wer? Was?",
    "kommen=to come;wohnen=to live;heißen=to be called;sein=to be;woher=where from;wo=where;wer=who;was=what;wie=how;aus=from",
    "Woher kommst du?=Where are you from?;Ich komme aus [Land].=I come from [country].;Ich wohne in [Stadt].=I live in [city].",
    "Question melody: W-questions fall in pitch; yes/no questions rise. Practise Woher kommst du?",
    "Listen to three short self-introductions (DW Nicos Weg A1 or Goethe Fotogeschichten). Note name, country and city.",
    "Write 6 sentences about yourself with heißen, kommen, wohnen and sein. Then ask 3 W-questions out loud.");

  /* Module 2 */
  L(5, 2, "Numbers 0 to 12 and age",
    "Learn the numbers 0 to 12 and how to say your age and your phone number digit by digit. Note the two ways to say 0: null.",
    "null=0;eins=1;zwei=2;drei=3;vier=4;fünf=5;sechs=6;sieben=7;acht=8;neun=9;zehn=10;elf=11;zwölf=12",
    "Wie alt bist du?=How old are you?;Ich bin … Jahre alt.=I am … years old.;Meine Telefonnummer ist …=My phone number is …",
    "z sounds like ts (zwei, zehn). v in vier sounds like f. ö in zwölf: round your lips and say 'eh'.",
    "Listen to phone-number dictations on Deutschtrainer or DW and write the digits you hear.",
    "Say your phone number, house number and age aloud. Write them as words.");
  L(6, 2, "Numbers 13 to 100, countries and languages",
    "Learn the teens and tens. From 21 the small number comes first: einundzwanzig (one-and-twenty). Name countries and languages and say what you speak.",
    "dreizehn=13;zwanzig=20;dreißig=30;vierzig=40;fünfzig=50;hundert=100;das Land=country;die Sprache=language;Deutschland=Germany;Frankreich=France;Spanien=Spain;Polen=Poland",
    "Ich spreche Englisch und ein bisschen Deutsch.=I speak English and a little German.;Woher kommen Sie?=Where are you from? (formal);Ich komme aus …=I come from …",
    "ß sounds like ss (dreißig). The ending -ig is pronounced like ich: zwanzig, dreißig.",
    "Practise 21 to 99 with a number-dictation exercise; write ten numbers you hear.",
    "Write 5 sentences about which languages you speak and where you and two other people come from.");
  L(7, 2, "Personal data and forms",
    "Learn form vocabulary: Vorname, Nachname, Adresse, Straße, Hausnummer, Postleitzahl. Use Sie with adults you don't know, and du with friends.",
    "der Vorname=first name;der Nachname=surname;die Adresse=address;die Straße=street;die Hausnummer=house number;die Postleitzahl=postcode;der Wohnort=place of residence;das Geburtsdatum=date of birth;verheiratet=married;ledig=single",
    "Wie ist Ihr Name?=What is your name? (formal);Wie buchstabiert man das?=How do you spell that?;Ich wohne in der … Straße.=I live in … Street.",
    "In compounds the stress is on the first part: VORname, HAUSnummer, POSTleitzahl.",
    "Look at a sample registration form (search for Anmeldeformular Muster) and name each field in German.",
    "Fill out a form with your own details in German. Read your entries aloud.");

  /* Module 3 */
  L(9, 3, "Family words and possessives",
    "Every noun has a gender: der (masculine), die (feminine), das (neuter). Learn family words with their articles. Possessives: mein Bruder, meine Schwester, meine Eltern.",
    "die Familie=family;die Mutter=mother;der Vater=father;die Eltern=parents;der Bruder=brother;die Schwester=sister;das Kind=child;die Frau=woman / wife;der Mann=man / husband;die Freundin=girlfriend / female friend;der Freund=boyfriend / male friend",
    "Das ist meine Schwester.=This is my sister.;Ich habe zwei Brüder.=I have two brothers.;Hast du Kinder?=Do you have children?",
    "Umlaut plurals: Bruder → Brüder, Mutter → Mütter. For ü: say 'ee' with rounded lips.",
    "Watch a beginner video about family or friends (DW Nicos Weg A1) and list the family words you hear.",
    "Describe your family (or an imaginary one) in 5 sentences with mein and meine.");
  L(10, 3, "haben and negation",
    "Conjugate haben: habe, hast, hat, haben, habt, haben. Use kein/keine with nouns (Ich habe keine Kinder) and nicht with verbs and adjectives.",
    "haben=to have;das Auto=car;das Haus=house;der Hund=dog;die Katze=cat;das Handy=mobile phone;der Computer=computer;kein / keine=no / not a;nicht=not;aber=but;und=and;oder=or",
    "Ich habe keine Zeit.=I don't have time.;Er hat einen Hund.=He has a dog.;Das ist nicht mein Handy.=That is not my phone.",
    "h at the start of a word is a light breath (haben); after a vowel it is silent (sehen).",
    "Listen to short A1 introductions; note what each person has and does not have.",
    "Write 6 sentences with haben (3 of them negative) about yourself.");
  L(11, 3, "Describing people",
    "Use sein + adjective: Er ist groß. Learn adjectives for looks and character and intensifiers: sehr, ziemlich, nicht so.",
    "groß=tall / big;klein=small;jung=young;alt=old;nett=nice;freundlich=friendly;lustig=funny;müde=tired;glücklich=happy;schön=beautiful;sympathisch=likeable",
    "Meine Mutter ist sehr nett.=My mother is very nice.;Er ist nicht alt, er ist jung.=He is not old, he is young.;Wie sieht sie aus?=What does she look like?",
    "ü in müde: lips round, tongue forward. sch in schön. The ending -ig is pronounced -ich.",
    "Listen to a Goethe Fotogeschichte and note how people are described.",
    "Describe your best friend in 5 sentences. Then say them aloud without reading.");

  /* Module 4 */
  L(13, 4, "Food and drinks with möchten",
    "Order politely with möchten: ich möchte, du möchtest, er möchte, wir möchten. Learn food words with their articles.",
    "das Brot=bread;der Käse=cheese;die Milch=milk;das Wasser=water;der Kaffee=coffee;der Tee=tea;das Obst=fruit;das Gemüse=vegetables;der Apfel=apple;das Fleisch=meat;die Suppe=soup;essen=to eat;trinken=to drink",
    "Ich möchte einen Kaffee, bitte.=I'd like a coffee, please.;Was möchten Sie trinken?=What would you like to drink?;Ich esse gern Käse.=I like eating cheese.",
    "The ending -er is a soft 'uh' (Wasser). Long o in Brot, short u in Suppe.",
    "Listen to a café-ordering dialogue (Goethe Fotogeschichte on shopping or DW Nicos Weg).",
    "Write and say a café order for two people, including a polite question to the waiter.");
  L(14, 4, "Akkusativ and shopping",
    "The direct object takes Akkusativ. Only masculine changes: der → den, ein → einen. Die, das and plural stay the same. Ich brauche einen Apfel. Ich kaufe den Käse.",
    "kaufen=to buy;brauchen=to need;suchen=to look for;der Supermarkt=supermarket;die Tüte=bag;der Preis=price;kosten=to cost;teuer=expensive;billig=cheap;der Euro=euro;der Cent=cent",
    "Was kostet das?=How much is that?;Das macht 4,50 Euro.=That comes to 4.50 euros.;Ich brauche einen Kaffee und ein Brötchen.=I need a coffee and a bread roll.",
    "Say prices out loud: 4,50 € = vier Euro fünfzig. eu sounds like 'oy' (Euro).",
    "Listen to supermarket price announcements or price dialogues and write the prices in digits.",
    "Make a shopping list of 8 items and say 'Ich kaufe …' for each. Practise the price question with a friend or a mirror.");
  L(15, 4, "Quantities and restaurant phrases",
    "After quantities the noun stays singular: ein Kilo Äpfel, eine Flasche Wasser, ein Stück Kuchen. Learn gern, lieber, am liebsten. Learn how to ask for the bill.",
    "das Kilo=kilo;die Flasche=bottle;das Stück=piece;die Packung=pack;die Speisekarte=menu;bezahlen=to pay;die Rechnung=bill;zusammen oder getrennt?=together or separately?;lecker=tasty;gern=gladly / like to;lieber=rather;das Trinkgeld=tip",
    "Zahlen, bitte!=The bill, please!;Getrennt, bitte.=Separately, please.;Ich esse am liebsten Pasta.=I like eating pasta best.",
    "st and sp at the start of a word sound like scht and schp: Stück, Speisekarte.",
    "Listen to a restaurant scene at A1 level and note what is ordered and how much it costs.",
    "Act out ordering food, asking for the bill and adding a tip. Record 60 seconds.");

  /* Module 5 */
  L(17, 5, "Telling time and weekdays",
    "Formal time: 14:30 = vierzehn Uhr dreißig. Informal time: halb drei (half to three). Weekdays and parts of the day. Use am + day and um + time.",
    "die Uhr=clock / o'clock;die Stunde=hour;die Minute=minute;halb=half;das Viertel=quarter;Montag=Monday;Dienstag=Tuesday;Mittwoch=Wednesday;Donnerstag=Thursday;Freitag=Friday;Samstag=Saturday;Sonntag=Sunday;das Wochenende=weekend",
    "Wie spät ist es?=What time is it?;Es ist halb drei.=It is half past two.;Am Montag um neun Uhr.=On Monday at nine o'clock.",
    "Mittwoch has a throaty ch. The ending -tag is pronounced 'tahk'.",
    "Listen to train or bus announcements and write down the times you hear.",
    "Draw six clocks and say the time formally and informally. Say your weekly schedule.");
  L(18, 5, "Daily routine and separable verbs",
    "Separable verbs split in main clauses: aufstehen → Ich stehe um sieben Uhr auf. The prefix goes to the end. Learn 8 common separable verbs.",
    "aufstehen=to get up;frühstücken=to have breakfast;anfangen=to begin;einkaufen=to shop;fernsehen=to watch TV;anrufen=to call;aufräumen=to tidy up;schlafen=to sleep;arbeiten=to work;duschen=to shower;der Morgen=morning;der Abend=evening",
    "Ich stehe um sieben Uhr auf.=I get up at seven.;Der Kurs fängt um neun Uhr an.=The course starts at nine.;Abends sehe ich fern.=In the evening I watch TV.",
    "Stress falls on the prefix: AUFstehen, EINkaufen, ANrufen.",
    "Listen to someone describing their day (DW Nicos Weg A1) and note the times and verbs.",
    "Write your typical workday in 8 sentences with at least 4 separable verbs.");
  L(19, 5, "Word order and frequency words",
    "In a main clause the verb is always in position 2: Am Montag arbeite ich. Learn connectors and frequency words: zuerst, dann, danach, immer, oft, manchmal, nie.",
    "dann=then;danach=afterwards;zuerst=first;später=later;immer=always;oft=often;manchmal=sometimes;selten=rarely;nie=never;jeden Tag=every day;normalerweise=usually",
    "Zuerst frühstücke ich, dann gehe ich zur Arbeit.=First I have breakfast, then I go to work.;Manchmal koche ich abends.=Sometimes I cook in the evening.;Ich fahre nie mit dem Auto.=I never go by car.",
    "Statements fall in pitch at the end; yes/no questions rise. Read your sentences with clear melody.",
    "Listen to a slow daily-routine podcast episode (Slow German, A1 to A2).",
    "Rewrite yesterday's routine using zuerst, dann, danach and frequency words. Read it aloud with falling intonation.");

  /* Module 6 */
  L(21, 6, "City places",
    "Learn places with their articles. Location chunks: in der Bank, im Supermarkt (in dem), am Bahnhof (an dem). Use es gibt to say what exists: In meiner Straße gibt es einen Supermarkt.",
    "die Stadt=city;der Bahnhof=train station;die Bank=bank;die Apotheke=pharmacy;der Park=park;die Post=post office;das Krankenhaus=hospital;die Schule=school;das Restaurant=restaurant;die Haltestelle=stop;das Kino=cinema;die Bäckerei=bakery",
    "Wo ist die Apotheke?=Where is the pharmacy?;Die Bank ist neben dem Bahnhof.=The bank is next to the station.;Ich bin im Supermarkt.=I'm in the supermarket.",
    "ä sounds like 'eh' (Bäckerei). th in Apotheke is just t. ei sounds like 'eye'.",
    "Watch a DW Nicos Weg city scene and list the places you hear.",
    "Describe your neighbourhood: 6 sentences beginning 'In meiner Straße gibt es …'.");
  L(22, 6, "Asking for and giving directions",
    "Directions use the Sie-Imperativ: Gehen Sie geradeaus. Biegen Sie links ab. Learn left, right, straight, next to, opposite.",
    "geradeaus=straight ahead;links=left;rechts=right;abbiegen=to turn;die Kreuzung=intersection;die Ampel=traffic light;die Ecke=corner;neben=next to;gegenüber=opposite;weit=far;nah=near;bis zu=as far as",
    "Entschuldigung, wo ist der Bahnhof?=Excuse me, where is the station?;Gehen Sie geradeaus und dann links.=Go straight and then left.;Ist es weit von hier?=Is it far from here?",
    "eu sounds like 'oy' (Kreuzung); z sounds like ts. Speak slowly and clearly when asking for directions.",
    "Listen to a route dialogue and trace the route on a map.",
    "Write directions from your home to the nearest station (5 sentences) and read them aloud as a role-play.");
  L(23, 6, "Public transport and tickets",
    "Use chunks: mit dem Bus, mit der U-Bahn, mit dem Zug. Buy tickets with Ich möchte ein Ticket nach … and ask about platforms and changes.",
    "die U-Bahn=underground;die S-Bahn=city train;der Bus=bus;die Straßenbahn=tram;der Zug=train;das Ticket=ticket;die Fahrkarte=ticket;das Gleis=platform;die Abfahrt=departure;die Ankunft=arrival;umsteigen=to change trains;fahren=to travel / drive",
    "Ich möchte ein Ticket nach …=I'd like a ticket to …;Von welchem Gleis fährt der Zug?=Which platform does the train leave from?;Wo muss ich umsteigen?=Where do I have to change?",
    "Long a in fahren and Bahn. The ending -en is a short 'uhn': FAH-ruhn.",
    "Listen to Deutsche Bahn or BVG announcements at slow speed and note platform numbers and times.",
    "Plan a trip: write 6 sentences with departure and arrival times and a change.");

  /* Module 7 */
  L(25, 7, "Rooms, furniture and plurals",
    "Learn rooms and furniture with article and plural together. Common plural endings: -e, -er, -n/-en, -s and umlaut changes.",
    "die Wohnung=flat;das Zimmer=room;die Küche=kitchen;das Bad=bathroom;das Schlafzimmer=bedroom;das Wohnzimmer=living room;der Tisch=table;der Stuhl=chair;das Bett=bed;der Schrank=wardrobe;das Fenster=window;die Miete=rent",
    "Die Wohnung hat drei Zimmer.=The flat has three rooms.;Wie hoch ist die Miete?=How much is the rent?;Das Zimmer ist hell und groß.=The room is bright and big.",
    "Short vs long vowels: Bett (short e), Stuhl (long u). sch and z in Schlafzimmer.",
    "Read a real flat ad (Wohnungsanzeige) and decode abbreviations: 2-Zi-Whg, EBK, NK, KM, WM.",
    "Describe your ideal flat in 6 sentences using haben, sein and es gibt.");
  L(26, 7, "Modal verbs",
    "Modal verb in position 2, infinitive at the end: Ich kann gut schwimmen. Learn können, müssen, wollen, dürfen and sollen: ich kann, du kannst, er kann.",
    "können=can;müssen=must;wollen=want;dürfen=be allowed to;sollen=should / be supposed to;mögen=to like;die Regel=rule;erlaubt=allowed;verboten=forbidden;die Hausordnung=house rules;laut=loud;leise=quiet",
    "Man darf hier nicht rauchen.=You may not smoke here.;Ich muss um acht Uhr arbeiten.=I have to work at eight.;Kannst du mir helfen?=Can you help me?",
    "Short a in kann and kannst; ü and ss in müssen.",
    "Listen to a landlord dialogue about house rules and note what is allowed and forbidden.",
    "Write 8 rules for a shared flat using müssen, dürfen and können.");
  L(27, 7, "Phoning about a flat",
    "Phone script: Guten Tag, hier spricht … Ich rufe wegen der Anzeige an. Polite chunks: Ich hätte gern …, Könnten Sie …? Spell names with the Buchstabiertafel (A wie Anton).",
    "die Anzeige=advertisement;besichtigen=to view;der Termin=appointment;frei=available;möbliert=furnished;die Kaution=deposit;die Nebenkosten=extra costs;der Vermieter=landlord;der Mieter=tenant;einziehen=to move in;warm=including heating;kalt=excluding heating",
    "Ich rufe wegen der Anzeige an.=I'm calling about the ad.;Kann ich die Wohnung besichtigen?=Can I view the flat?;Wann kann ich einziehen?=When can I move in?",
    "Speak slowly on the phone. Say numbers and dates clearly and repeat them to check.",
    "Listen to a flat-viewing call and write down the date, time and address.",
    "Write a phone script for calling a landlord, then record a role-play.");

  /* Module 8 */
  L(29, 8, "Hobbies and invitations",
    "Talk about hobbies with gern. Stem-changing verbs: lesen → du liest, sprechen → du sprichst, fahren → du fährst. Invite, accept and politely decline.",
    "das Hobby=hobby;spielen=to play;lesen=to read;schwimmen=to swim;kochen=to cook;tanzen=to dance;Musik hören=to listen to music;spazieren gehen=to go for a walk;die Lust=desire;treffen=to meet;Zeit haben=to have time;leider=unfortunately",
    "Hast du Lust auf Kino?=Do you feel like going to the cinema?;Ja, gern!=Yes, gladly!;Leider habe ich keine Zeit.=Unfortunately I don't have time.",
    "ie sounds like long 'ee': spielen, lieben. Notice the soft ch in Lust auf.",
    "Listen to a short invitation dialogue and note whether the answer is yes or no.",
    "Write three invitations and three replies (2 yes, 1 polite no).");
  L(30, 8, "Body and doctor's visit",
    "Learn body parts and how to describe pain: Ich habe Kopfschmerzen. Mir tut der Rücken weh. Make an appointment: Ich möchte einen Termin vereinbaren.",
    "der Kopf=head;der Bauch=stomach;der Rücken=back;die Hand=hand;das Bein=leg;der Arzt / die Ärztin=doctor;krank=ill;gesund=healthy;die Schmerzen=pain;das Fieber=fever;das Medikament=medicine;die Erkältung=cold",
    "Ich habe Kopfschmerzen.=I have a headache.;Ich möchte einen Termin vereinbaren.=I'd like to make an appointment.;Mir tut der Rücken weh.=My back hurts.",
    "ch in Rücken and Kopfschmerzen (soft after ü/i, hard after o). sch in Schmerzen. ä in Ärztin.",
    "Listen to a doctor's-office phone call and note day and time.",
    "Role-play: call the Arztpraxis, describe symptoms, note the appointment date and time.");
  L(31, 8, "Weather, seasons and dates",
    "Dates use ordinals: der erste, zweite, dritte, siebte … am 3. Mai. Learn months, seasons and weather: Es regnet. Es ist kalt.",
    "das Wetter=weather;die Sonne=sun;der Regen=rain;der Schnee=snow;der Wind=wind;warm=warm;kalt=cold;der Frühling=spring;der Sommer=summer;der Herbst=autumn;der Winter=winter;der Monat=month",
    "Wie ist das Wetter heute?=What's the weather like today?;Heute ist es sonnig und warm.=Today it's sunny and warm.;Mein Geburtstag ist am 12. Mai.=My birthday is on 12 May.",
    "German w is like English v (Wetter). Short o in Sonne.",
    "Watch a weather report (for example tagesschau Wetter) and list the words you understand.",
    "Write about today's weather and your weekend plan in 6 sentences. Say the dates of 3 birthdays.");

  /* Module 9 */
  L(35, 9, "Perfekt with haben",
    "Perfekt = haben + Partizip II at the end. Regular verbs: ge-…-t (gemacht). Irregular: ge-…-en (gegessen). Separable verbs: angerufen. Verbs in -ieren have no ge-: telefoniert.",
    "machen → gemacht=to make → made;kaufen → gekauft=to buy → bought;lernen → gelernt=to learn → learned;spielen → gespielt=to play → played;essen → gegessen=to eat → eaten;trinken → getrunken=to drink → drunk;sehen → gesehen=to see → seen;lesen → gelesen=to read → read;schreiben → geschrieben=to write → written;nehmen → genommen=to take → taken",
    "Am Wochenende habe ich Freunde getroffen.=At the weekend I met friends.;Gestern habe ich Deutsch gelernt.=Yesterday I studied German.;Was hast du gemacht?=What did you do?",
    "ge- is unstressed: guh-MACHT. Notice -t vs -en in the participles.",
    "Listen to people telling what they did last weekend (Slow German or DW A2).",
    "Write 8 sentences about last weekend in Perfekt.");
  L(36, 9, "Perfekt with sein",
    "Verbs of movement and change of state use sein: Ich bin nach Hamburg gefahren. Also bleiben and sein: ist geblieben, ist gewesen. Learn 10 sein-verbs.",
    "gehen → ist gegangen=to go → went;fahren → ist gefahren=to travel → travelled;fliegen → ist geflogen=to fly → flew;kommen → ist gekommen=to come → came;bleiben → ist geblieben=to stay → stayed;aufstehen → ist aufgestanden=to get up → got up;einschlafen → ist eingeschlafen=to fall asleep → fell asleep;laufen → ist gelaufen=to run → ran;sein → ist gewesen=to be → was;passieren → ist passiert=to happen → happened",
    "Ich bin gestern spät nach Hause gekommen.=I came home late yesterday.;Wir sind nach Hamburg gefahren.=We travelled to Hamburg.;Was ist passiert?=What happened?",
    "st at the start of a syllable sounds like scht: aufgestanden = AUF-ge-SHTAN-den.",
    "Listen to a short travel story and note which verbs use sein.",
    "Write 8 sentences about a trip in Perfekt, mixing haben and sein.");
  L(37, 9, "Time expressions and telling a story",
    "Use time words to order events: gestern, letzte Woche, vor drei Tagen, früher, damals, plötzlich, schließlich, am Ende. Tell a simple story: Zuerst … dann … am Ende …",
    "gestern=yesterday;vorgestern=the day before yesterday;letzte Woche=last week;letzten Monat=last month;vor drei Tagen=three days ago;früher=in the past;damals=back then;schließlich=finally;plötzlich=suddenly;am Ende=in the end;der Urlaub=holiday;die Reise=trip",
    "Letzten Sommer waren wir im Urlaub.=Last summer we were on holiday.;Vor zwei Jahren habe ich in Spanien gewohnt.=Two years ago I lived in Spain.;Am Ende war alles gut.=In the end everything was fine.",
    "The ending -lich is soft: plötzlich, schließlich. ö in plötzlich.",
    "Read a short A2 story (for example on Nachrichtenleicht or DW A2) and underline the time words.",
    "Tell a story of a day out in 8 sentences. Record it and check your Perfekt endings.");

  /* Module 10 */
  L(39, 10, "Dativ: articles and pronouns",
    "Dativ is used for indirect objects and after mit, bei, nach, von, zu, aus, seit. Articles: dem (m/n), der (f), den + n (plural). Pronouns: mir, dir, ihm, ihr, uns, euch, ihnen. Verbs: helfen, gehören, gefallen.",
    "helfen=to help;gehören=to belong to;gefallen=to please;schenken=to give as a gift;geben=to give;zeigen=to show;schmecken=to taste;passen=to fit;antworten=to answer;danken=to thank;leihen=to lend;erklären=to explain",
    "Das Buch gehört mir.=The book belongs to me.;Kannst du mir helfen?=Can you help me?;Der Pullover gefällt mir.=I like the sweater.",
    "mir and wir differ only at the start: m vs v. Long i in ihm and ihr.",
    "Listen to a dialogue about gifts and note who gives what to whom.",
    "Write 8 sentences using Dativ verbs and pronouns (mir, dir, ihm, ihr).");
  L(40, 10, "Wechselpräpositionen: wo? and wohin?",
    "an, auf, hinter, in, neben, über, unter, vor, zwischen take Dativ for position (wo?) and Akkusativ for movement (wohin?). Pairs: stehen/stellen, liegen/legen, sitzen/setzen, hängen.",
    "stellen=to put upright;stehen=to stand;legen=to lay;liegen=to lie;hängen=to hang;setzen=to seat;sitzen=to sit;über=above;unter=under;vor=in front of;hinter=behind;zwischen=between",
    "Das Buch liegt auf dem Tisch.=The book lies on the table.;Ich lege das Buch auf den Tisch.=I put the book on the table.;Die Lampe hängt über dem Sofa.=The lamp hangs above the sofa.",
    "ü in über and unter: lips round. Short u in unter.",
    "Look at a picture of a room and describe where five things are. Then say where you would move them.",
    "Write 10 sentences: 5 with wo? (Dativ) and 5 with wohin? (Akkusativ).");
  L(41, 10, "Moving house",
    "Vocabulary for moving and paperwork. Use müssen, sollen and Perfekt to talk about tasks: Ich muss meine Adresse ändern. Haben Sie den Schlüssel schon abgeholt?",
    "der Umzug=move;der Karton=box;der Mietvertrag=rental contract;der Strom=electricity;das Internet=internet;die Kündigung=notice;die Nachbarn=neighbours;der Schlüssel=key;die Übergabe=handover;renovieren=to renovate;abholen=to pick up;mieten=to rent",
    "Wir ziehen am 1. Mai um.=We are moving on 1 May.;Ich muss meine Adresse ändern.=I have to change my address.;Haben Sie den Schlüssel schon abgeholt?=Have you already picked up the key?",
    "Stress the first syllable: UMzug, MIETvertrag. tr in Strom: the s becomes sch (Schtrom).",
    "Read a short Mietvertrag summary or moving checklist and find deadlines.",
    "Write a moving to-do list with 8 items and a short introduction message to a new neighbour.");

  /* Module 11 */
  L(43, 11, "Jobs and workplace",
    "Say what you do: Ich arbeite als … bei … Female forms end in -in. Describe tasks with zuständig für. Learn CV vocabulary.",
    "der Beruf=profession;die Arbeit=work;der Kollege=colleague;der Chef=boss;das Team=team;das Büro=office;die Firma=company;die Erfahrung=experience;der Lebenslauf=CV;die Bewerbung=application;zuständig für=responsible for;das Gehalt=salary",
    "Ich arbeite als … bei …=I work as … at …;Ich arbeite seit drei Jahren bei einer Firma.=I have worked at a company for three years.;Was sind Ihre Aufgaben?=What are your tasks?",
    "ff/ll/ss make the vowel before short. Stress LEbenslauf on the first syllable.",
    "Listen to someone describing their job (A2) and note profession, employer and tasks.",
    "Describe your job and daily tasks in 8 sentences.");
  L(44, 11, "Präteritum of sein, haben and modals",
    "In spoken German, sein, haben and modal verbs use Präteritum: ich war, hatte, konnte, musste, wollte, durfte, sollte. Other verbs stay in Perfekt when speaking.",
    "war=was;hatte=had;konnte=could;musste=had to;wollte=wanted;durfte=was allowed to;sollte=was supposed to;früher=in the past;damals=back then;die Ausbildung=training;das Studium=studies;der Abschluss=degree",
    "Ich war letztes Jahr in Spanien.=I was in Spain last year.;Früher konnte ich nicht gut Deutsch sprechen.=In the past I couldn't speak German well.;Ich musste viel arbeiten.=I had to work a lot.",
    "Short vs long: war (long a) vs wollte (short o).",
    "Listen to a story that uses war and hatte and mark the sentences in Präteritum.",
    "Tell about a difficult time at work or school using war, hatte, musste and konnte (8 sentences).");
  L(45, 11, "Formal emails and calls at work",
    "Formal email: Sehr geehrte Frau …, / Sehr geehrter Herr …, body, Mit freundlichen Grüßen. Useful requests: Ich möchte den Termin verschieben. Anbei finden Sie …",
    "sehr geehrte=dear (formal);die Anfrage=inquiry;der Anhang=attachment;die Besprechung=meeting;verschieben=to postpone;bestätigen=to confirm;absagen=to cancel;die Rückmeldung=reply;Mit freundlichen Grüßen=kind regards;erreichbar=reachable;die Bitte=request;der Betreff=subject line",
    "Ich möchte den Termin verschieben.=I'd like to postpone the appointment.;Anbei finden Sie meinen Lebenslauf.=Attached you'll find my CV.;Vielen Dank für Ihre Rückmeldung.=Thank you for your reply.",
    "Stress the first syllable of most nouns: ANfrage, BEsprechung.",
    "Read two sample business emails and mark greeting, request and closing.",
    "Write a formal email of about 60 words asking to move a meeting.");

  /* Module 12 */
  L(47, 12, "weil and dass: verb at the end",
    "In subordinate clauses with weil and dass the conjugated verb goes to the end. Put a comma before the clause: Ich lerne Deutsch, weil ich in Deutschland lebe.",
    "weil=because;dass=that;denn=for (main clause);deshalb=therefore;darum=that's why;der Grund=reason;wichtig=important;möglich=possible;hoffen=to hope;glauben=to believe;meinen=to think;wissen=to know;sicher=sure",
    "Ich lerne Deutsch, weil es wichtig ist.=I'm learning German because it is important.;Ich glaube, dass das gut ist.=I think that is good.;Ich weiß, dass du Zeit hast.=I know that you have time.",
    "Notice the pause at the comma before weil and dass. The ss in dass sounds like the ss in Wasser.",
    "Listen to people explaining why they learn German and note the reasons.",
    "Write 8 sentences with weil and dass explaining your reasons for learning German and living in Germany.");
  L(48, 12, "wenn, ob, bevor, während",
    "wenn = if / whenever: Wenn es regnet, bleibe ich zu Hause. When the subordinate clause comes first, the verb of the main clause follows immediately (position 1). ob = whether. Also bevor, während, sobald, seit.",
    "wenn=if / when;ob=whether;falls=in case;bevor=before;während=while;sobald=as soon as;seit=since;bis=until;die Bedingung=condition;vielleicht=maybe;eventuell=possibly;jedes Mal=every time",
    "Wenn ich Zeit habe, gehe ich schwimmen.=If I have time, I go swimming.;Ich weiß nicht, ob er kommt.=I don't know whether he is coming.;Bevor ich schlafe, lese ich.=Before I sleep, I read.",
    "Read long sentences with a pause after the first clause and rising then falling intonation.",
    "Listen to a short dialogue with wenn-clauses and write down two conditions you hear.",
    "Write 8 sentences with wenn, ob and bevor about your habits and plans.");
  L(49, 12, "Travel and hotel bookings",
    "Booking language uses Konjunktiv II chunks: Ich hätte gern …, Könnten Sie …? Learn travel vocabulary and complaints about delays.",
    "das Hotel=hotel;die Buchung=booking;die Reservierung=reservation;das Doppelzimmer=double room;das Einzelzimmer=single room;die Übernachtung=overnight stay;das Frühstück=breakfast;der Koffer=suitcase;der Flug=flight;der Reisepass=passport;die Verspätung=delay;stornieren=to cancel",
    "Ich hätte gern ein Doppelzimmer für zwei Nächte.=I'd like a double room for two nights.;Ist das Frühstück inklusive?=Is breakfast included?;Der Zug hat Verspätung.=The train is delayed.",
    "ä in hätte: say 'eh'. The ending -ung is a nasal ng: Buchung, Verspätung.",
    "Listen to a hotel booking call and note dates, room type and price.",
    "Write and say a hotel booking dialogue (8 lines).");

  /* Module 13 */
  L(51, 13, "Reflexive verbs",
    "Reflexive verbs use a reflexive pronoun: ich freue mich, du freust dich, er freut sich, wir freuen uns, ihr freut euch, sie freuen sich. Common verbs: sich freuen, sich ärgern, sich fühlen, sich treffen.",
    "sich freuen=to be glad;sich ärgern=to be annoyed;sich fühlen=to feel;sich erholen=to recover;sich treffen=to meet;sich entspannen=to relax;sich beeilen=to hurry;sich waschen=to wash;sich anziehen=to get dressed;sich interessieren für=to be interested in;sich bewerben=to apply;sich erinnern=to remember",
    "Ich fühle mich heute nicht gut.=I don't feel well today.;Wir treffen uns um sechs Uhr.=We're meeting at six.;Ich interessiere mich für Musik.=I'm interested in music.",
    "ich vs ach: ich is soft; sich uses the same soft ch.",
    "Listen to a dialogue where people talk about feelings and note the reflexive verbs.",
    "Write 8 sentences about your feelings and interests with reflexive verbs.");
  L(52, 13, "Imperativ and advice",
    "Imperativ: du – Geh! (drop -st), ihr – Geht!, Sie – Gehen Sie! Advice: Du solltest …, Sie sollten … Doctors often say: Nehmen Sie die Tabletten dreimal täglich.",
    "der Rat=advice;der Tipp=tip;empfehlen=to recommend;sollen=should;vorsichtig=careful;ruhig=calm;nehmen Sie=take;bleiben Sie=stay;trinken Sie viel=drink a lot;die Tablette=tablet;die Salbe=ointment;das Rezept=prescription",
    "Nehmen Sie die Tabletten dreimal täglich.=Take the tablets three times a day.;Trink viel Wasser!=Drink lots of water!;Du solltest mehr schlafen.=You should sleep more.",
    "Imperatives are short and firm; falling intonation on the last word.",
    "Listen to a doctor's advice dialogue and note each instruction.",
    "Write 8 pieces of advice for a friend with a cold using Imperativ and sollte.");
  L(53, 13, "Sport, health and insurance",
    "Talk about sport and healthy habits: zweimal pro Woche, regelmäßig. Learn key words for health insurance and sick notes in Germany. Use man to say what people should do.",
    "der Sport=sport;das Training=training;das Fitnessstudio=gym;die Krankenkasse=health insurance;die Versicherung=insurance;die Krankmeldung=sick note;die Ernährung=nutrition;der Stress=stress;der Schlaf=sleep;regelmäßig=regularly;zweimal pro Woche=twice a week;gesund essen=to eat healthily",
    "Ich mache zweimal pro Woche Sport.=I do sport twice a week.;Ich bin bei einer gesetzlichen Krankenkasse versichert.=I'm insured with a statutory health insurer.;Man sollte viel Wasser trinken.=You should drink a lot of water.",
    "Stress in Krankenkasse: KRANkenkasse. sp in Sport: schport.",
    "Read a short text about health insurance in Germany (A2) and find three key facts.",
    "Describe your health habits in 8 sentences and record yourself.");

  /* Module 14 */
  L(55, 14, "Clothes and adjective endings after ein-",
    "Adjectives before nouns take endings. After ein-: ein neuer Mantel, eine rote Jacke, ein schönes Hemd. Learn clothing words and sizes.",
    "die Kleidung=clothes;die Hose=trousers;das Hemd=shirt;die Jacke=jacket;der Mantel=coat;das Kleid=dress;die Schuhe=shoes;die Größe=size;anprobieren=to try on;passen=to fit;die Farbe=colour;der Pullover=sweater",
    "Haben Sie das in Größe M?=Do you have this in size M?;Kann ich das anprobieren?=Can I try this on?;Die Jacke passt mir gut.=The jacket fits me well.",
    "ö in Größe: lips round. sch in Schuhe. Long u in Schuhe.",
    "Watch a shopping dialogue and note sizes and colours.",
    "Describe 5 outfits with adjective + noun (ein warmer Mantel, eine blaue Hose).");
  L(56, 14, "Comparative and superlative",
    "Komparativ adds -er: schneller als. Superlativ: am schnellsten. Irregular: gut, besser, am besten; viel, mehr, am meisten; gern, lieber, am liebsten. Umlaut: alt → älter.",
    "schnell=fast;langsam=slow;billig=cheap;günstig=good value;teuer=expensive;besser=better;größer=bigger;älter=older;der Unterschied=difference;gleich=the same;als=than;so … wie=as … as",
    "Berlin ist größer als Bonn.=Berlin is bigger than Bonn.;Das ist am billigsten.=That is the cheapest.;Ich finde Tee besser als Kaffee.=I find tea better than coffee.",
    "ä and ö in älter, größer: keep lips relaxed for ä, rounded for ö.",
    "Listen to a comparison dialogue about two flats or phones.",
    "Compare two cities, two products and two people in 8 sentences.");
  L(57, 14, "Adjective endings after der, die, das",
    "After the definite article the article carries the case; the adjective takes -e or -en: der neue Mantel, den neuen Mantel, mit dem neuen Mantel. Practise the pattern with clothes and objects.",
    "neu=new;modern=modern;bequem=comfortable;elegant=elegant;praktisch=practical;dunkel=dark;hell=light;bunt=colourful;leicht=light;schwer=heavy;kurz=short;lang=long",
    "Ich nehme den blauen Pullover.=I'll take the blue sweater.;Sie trägt eine schöne Jacke.=She is wearing a beautiful jacket.;Ich suche ein bequemes Sofa.=I'm looking for a comfortable sofa.",
    "Do not swallow the endings: neuen, blauen, schönen.",
    "Read an online shop description and underline every adjective with its ending.",
    "Write a product review of 8 sentences with at least 8 adjective endings.");

  /* Module 15 */
  L(59, 15, "Bureaucracy in Germany",
    "Vocabulary for offices: Bürgeramt, Anmeldung, Aufenthaltstitel, Steuer-ID, Krankenversicherung. Make polite requests and ask for required documents.",
    "das Amt=authority;das Bürgeramt=citizens' office;die Anmeldung=registration;der Ausweis=ID;die Bescheinigung=certificate;das Formular=form;die Unterschrift=signature;der Antrag=application;die Frist=deadline;die Steuer=tax;der Vertrag=contract;die Gebühr=fee",
    "Ich möchte mich anmelden.=I'd like to register.;Welche Unterlagen brauche ich?=Which documents do I need?;Bis wann muss ich den Antrag abgeben?=By when do I have to submit the application?",
    "The letters ei and ie are different: Bescheinigung has ei = 'eye'.",
    "Read a Bürgeramt appointment page and note the required documents.",
    "Write a list of 8 documents you may need and say what each is for.");
  L(60, 15, "Polite requests with Konjunktiv II",
    "Polite requests and wishes: Könnten Sie mir helfen? Ich hätte gern … Würden Sie …? Ich wäre gern … Form: würde + infinitive works for most verbs.",
    "könnte=could;würde=would;hätte=would have;wäre=would be;die Bitte=request;der Wunsch=wish;höflich=polite;freundlich=friendly;dringend=urgent;möglichst=if possible;bald=soon;sofort=immediately",
    "Könnten Sie das bitte wiederholen?=Could you repeat that, please?;Ich hätte gern einen Termin.=I'd like an appointment.;Würden Sie mir bitte helfen?=Would you please help me?",
    "Soft, rising tone makes a request polite: Könnten Sie mir helfen?",
    "Listen to polite requests at an office and note the phrases used.",
    "Rewrite 8 blunt sentences as polite ones (Gib mir … → Könnten Sie mir … geben?).");
  L(61, 15, "Reading notices, letters and messages",
    "Skim for who, what, when, where. Read a Mahnung, Kündigung, parcel note. Abbreviations: z. B., ca., usw., Str., Tel.",
    "die Mitteilung=notice;das Schreiben=letter;die Erinnerung=reminder;die Mahnung=payment reminder;die Nachricht=message;die Einladung=invitation;die Benachrichtigung=notification;das Paket=parcel;die Filiale=branch;die Öffnungszeiten=opening hours;geschlossen=closed;geöffnet=open",
    "Das Paket liegt in der Filiale.=The parcel is in the branch.;Die Öffnungszeiten sind von 9 bis 18 Uhr.=Opening hours are from 9 to 18.;Bitte bringen Sie Ihren Ausweis mit.=Please bring your ID.",
    "Long compounds: Öffnungszeiten = ÖFF-nungs-zei-ten. Say it slowly, then faster.",
    "Read three real notices (parcel slip, opening hours, invitation) and note the key facts.",
    "Reply to an invitation in writing (accept or decline politely) in 5 sentences.");

  /* Module 16 */
  L(65, 16, "Expressing and defending opinions",
    "Ich finde / denke / meine, dass … Meiner Meinung nach … Ich bin der Meinung, dass … Agree or disagree: Da stimme ich zu. Da bin ich anderer Meinung.",
    "die Meinung=opinion;zustimmen=to agree;widersprechen=to contradict;der Vorteil=advantage;der Nachteil=disadvantage;einerseits=on the one hand;andererseits=on the other hand;außerdem=besides;trotzdem=nevertheless;allerdings=however;das Argument=argument;überzeugen=to convince",
    "Meiner Meinung nach ist das eine gute Idee.=In my opinion this is a good idea.;Einerseits ist es praktisch, andererseits teuer.=On the one hand it's practical, on the other hand expensive.;Da bin ich anderer Meinung.=I have a different opinion.",
    "Stress the contrast words: EINerseits, ANdererseits. Falling tone at the end of each argument.",
    "Listen to a short discussion (DW B1 or Easy German) and note two opinions and reasons.",
    "Give your opinion on a topic in 8 sentences with pro and contra arguments.");
  L(66, 16, "obwohl, damit, um … zu, während",
    "obwohl (although), damit (so that, different subjects), um … zu (in order to, same subject), während (while), ob (whether). Verb goes to the end. Also statt … zu and ohne … zu.",
    "obwohl=although;damit=so that;um … zu=in order to;während=while;ob=whether;statt … zu=instead of;ohne … zu=without;der Zweck=purpose;der Zusammenhang=connection;das Ergebnis=result;trotz=despite;deswegen=that's why",
    "Obwohl es regnet, gehe ich spazieren.=Although it's raining, I'm going for a walk.;Ich lerne Deutsch, um eine Arbeit zu finden.=I learn German to find a job.;Ich frage, ob er kommt.=I'm asking whether he is coming.",
    "Keep the rhythm: short pause at the comma, then continue with rising energy.",
    "Listen to a B1 dialogue and count how many subordinate clauses you hear.",
    "Write 10 sentences using obwohl, damit, um … zu, während.");
  L(67, 16, "Structuring a discussion",
    "Structure: introduction, argument 1, argument 2, example, conclusion. Connect with erstens, zweitens, zum Beispiel, deshalb, zusammenfassend. Practice for Sprechen part 3.",
    "erstens=firstly;zweitens=secondly;zum Beispiel=for example;deshalb=therefore;zusammenfassend=in summary;das Thema=topic;der Punkt=point;die Frage=question;die Lösung=solution;das Problem=problem;der Grund=reason;die Folge=consequence",
    "Ich möchte über das Thema … sprechen.=I'd like to talk about the topic …;Zum Beispiel …=For example …;Zusammenfassend kann man sagen, dass …=In summary you can say that …",
    "Slow down on connectors so listeners hear the structure.",
    "Listen to a two-minute talk and identify introduction, arguments and conclusion.",
    "Give a 2-minute talk on a topic of your choice with intro, 2 arguments, example and conclusion. Record and review.");

  /* Module 17 */
  L(69, 17, "Relative clauses (Nominativ and Akkusativ)",
    "Relative pronouns look like articles: der/die/das/die (Nominativ) and den/die/das/die (Akkusativ). Der Kollege, der neben mir sitzt, ist nett. The verb goes to the end; commas on both sides.",
    "der Kollege, der …=the colleague who …;die Frau, die …=the woman who …;das Projekt, das …=the project that …;die Leute, die …=the people who …;die Aufgabe=task;der Kunde=customer;die Besprechung=meeting;das Ziel=goal;die Kenntnisse=skills;die Verantwortung=responsibility;die Herausforderung=challenge",
    "Das ist der Kollege, den ich gestern getroffen habe.=That is the colleague I met yesterday.;Ich suche eine Stelle, die zu mir passt.=I'm looking for a job that suits me.;Das Projekt, das wir planen, ist wichtig.=The project we are planning is important.",
    "Pause at the commas: 'Das Projekt, / das wir planen, / ist wichtig.'",
    "Read a short B1 text and underline every relative clause.",
    "Write 8 sentences with relative clauses about people at work or in your life.");
  L(70, 17, "Job interview language",
    "Talk about strengths, experience and motivation: Ich bin teamfähig. Ich habe Erfahrung in … Learn how to answer: Warum möchten Sie bei uns arbeiten?",
    "das Vorstellungsgespräch=job interview;die Stärke=strength;die Schwäche=weakness;die Motivation=motivation;teamfähig=team-oriented;zuverlässig=reliable;flexibel=flexible;die Berufserfahrung=work experience;die Stelle=position;sich bewerben=to apply;einstellen=to hire;die Kündigungsfrist=notice period",
    "Ich bewerbe mich, weil mich die Aufgabe interessiert.=I'm applying because the task interests me.;Meine Stärken sind Zuverlässigkeit und Teamarbeit.=My strengths are reliability and teamwork.;Ich kann ab dem 1. Oktober anfangen.=I can start from 1 October.",
    "Speak with calm, steady rhythm; stress key words: ZUverlässig, TEAMarbeit.",
    "Watch a German job interview example (search Vorstellungsgespräch B1) and note the questions.",
    "Prepare answers to 5 typical questions and record a 3-minute interview.");
  L(71, 17, "Meetings, phone calls and small talk at work",
    "Phone: Ich verbinde Sie. Kann ich etwas ausrichten? Meetings: Ich schlage vor, dass … Darf ich kurz etwas ergänzen? Small talk: Wie war Ihr Wochenende?",
    "verbinden=to connect;ausrichten=to pass on a message;zurückrufen=to call back;vorschlagen=to suggest;ergänzen=to add;protokollieren=to take minutes;die Tagesordnung=agenda;die Abteilung=department;die Vertretung=cover;der Anrufbeantworter=answering machine;der Rückruf=call back;die Absprache=agreement",
    "Kann ich etwas ausrichten?=Can I pass on a message?;Ich schlage vor, dass wir uns morgen treffen.=I suggest we meet tomorrow.;Darf ich kurz etwas ergänzen?=May I add something briefly?",
    "On the phone, spell names and read numbers digit by digit.",
    "Listen to a business phone call and note name, request and next step.",
    "Role-play a 2-minute work phone call and a 2-minute meeting contribution.");

  /* Module 18 */
  L(73, 18, "Passiv Präsens",
    "Passiv = werden + Partizip II: Das Auto wird repariert. Use it when the doer is unimportant. Agent with von + Dativ: von dem Mechaniker.",
    "werden=to become / passive auxiliary;reparieren=to repair;herstellen=to produce;liefern=to deliver;bauen=to build;öffnen=to open;schicken=to send;bestellen=to order;drucken=to print;kontrollieren=to check;organisieren=to organise;der Hersteller=manufacturer",
    "Das Paket wird morgen geliefert.=The parcel will be delivered tomorrow.;Hier wird Deutsch gesprochen.=German is spoken here.;Die Rechnung wird per E-Mail geschickt.=The invoice is sent by email.",
    "Stress the participle: GEliefert. Clear -t at the end of wird.",
    "Listen to a factory tour or process explanation and note passive verbs.",
    "Describe a process (for example how a parcel is delivered) in 8 passive sentences.");
  L(74, 18, "Media and technology",
    "Discuss news, social media and apps and their pros and cons. Noun-verb combinations: eine Entscheidung treffen, Kontakt aufnehmen, in Verbindung stehen.",
    "die Nachrichten=news;die Zeitung=newspaper;das soziale Netzwerk=social network;die App=app;der Datenschutz=data protection;das Passwort=password;herunterladen=to download;der Bildschirm=screen;die Werbung=advertising;die Quelle=source;online=online;die Verbindung=connection",
    "Ich informiere mich online über die Nachrichten.=I get news online.;Datenschutz ist mir wichtig.=Data protection is important to me.;Das Internet hat Vor- und Nachteile.=The internet has advantages and disadvantages.",
    "Pronounce loanwords the German way: Internet, App, online.",
    "Read a B1 article about media use (DW or Nachrichtenleicht) and note two statistics.",
    "Write a short pros-and-cons text (8 sentences) about social media.");
  L(75, 18, "Passive in other tenses and with modals",
    "Präteritum passive: wurde + Partizip II. Perfekt: ist … worden. Modal + passive: Das muss gemacht werden. Recognise these in reading texts.",
    "wurde=was (passive);worden=been (passive);gebaut=built;erfunden=invented;gegründet=founded;veröffentlicht=published;entwickelt=developed;verbessert=improved;eröffnet=opened;geplant=planned;verkauft=sold;entdeckt=discovered",
    "Die Firma wurde 1990 gegründet.=The company was founded in 1990.;Das Haus ist letztes Jahr renoviert worden.=The house was renovated last year.;Das muss noch erledigt werden.=That still has to be done.",
    "Practise the long participle sounds: veröffentlicht, entwickelt.",
    "Read a company history text and underline all passive forms.",
    "Write a short history of a company or city in 8 passive sentences.");

  /* Module 19 */
  L(77, 19, "Konjunktiv II: wishes, advice and unreal situations",
    "Wenn ich mehr Zeit hätte, würde ich reisen. Forms: hätte, wäre, könnte, müsste, würde + Infinitiv. Advice: An deiner Stelle würde ich …",
    "hätte=would have;wäre=would be;könnte=could;müsste=would have to;dürfte=might / would be allowed;an deiner Stelle=in your place;der Wunsch=wish;die Möglichkeit=possibility;träumen=to dream;reich=rich;der Traum=dream;ideal=ideal",
    "Wenn ich reich wäre, würde ich reisen.=If I were rich, I would travel.;An deiner Stelle würde ich mehr schlafen.=In your place I would sleep more.;Ich wünschte, ich hätte mehr Zeit.=I wish I had more time.",
    "Practise ä in hätte, wäre, könnte with clear 'eh' sounds.",
    "Listen to a discussion about dreams and wishes and note Konjunktiv II forms.",
    "Write 8 sentences about what you would do if you had a million euros or more time.");
  L(78, 19, "Environment and society",
    "Discuss problems and solutions: recycling, climate, traffic, integration. Use: Man sollte …, Es ist wichtig, dass …, Wir könnten …",
    "die Umwelt=environment;der Klimawandel=climate change;der Müll=waste;trennen=to separate;das Recycling=recycling;das Klima=climate;sparen=to save;der Verkehr=traffic;die Gesellschaft=society;die Integration=integration;ehrenamtlich=voluntary;der Verein=club",
    "In Deutschland wird Müll getrennt.=In Germany waste is separated.;Wir sollten weniger Auto fahren.=We should drive less.;Ich engagiere mich in einem Verein.=I'm involved in a club.",
    "Long words: Klimawandel = KLI-ma-wan-del. Practise splitting them into syllables.",
    "Read a short article on recycling or climate in Germany and note three facts.",
    "Write 8 sentences about a problem in your city and possible solutions.");
  L(79, 19, "Describing graphs and statistics",
    "Describe charts: Die Grafik zeigt … 30 Prozent … die Mehrheit / Minderheit, steigt / sinkt, im Vergleich zu, insgesamt. Useful for Sprechen part 2.",
    "die Grafik=chart;die Umfrage=survey;der Prozentsatz=percentage;die Mehrheit=majority;die Minderheit=minority;steigen=to rise;sinken=to fall;gleich bleiben=to stay the same;im Vergleich zu=compared to;insgesamt=overall;die Zahl=number;die Entwicklung=development",
    "Die Grafik zeigt die Ergebnisse einer Umfrage.=The chart shows the results of a survey.;Die Zahl ist von 20 auf 35 Prozent gestiegen.=The number rose from 20 to 35 percent.;Insgesamt kann man sagen, dass …=Overall you can say that …",
    "Read numbers clearly: dreißig, fünfunddreißig, Prozent.",
    "Find a graph in a German news site and describe it aloud in 1 minute.",
    "Describe a graph in writing (8 sentences).");

  /* Module 20 */
  L(81, 20, "Präteritum of regular and irregular verbs",
    "Präteritum is common in written narration: er ging, sie kam, wir sahen. Regular: machte, lernte. Learn 12 irregular verbs (gehen–ging–gegangen).",
    "ging=went;kam=came;sah=saw;aß=ate;trank=drank;fuhr=drove;schrieb=wrote;nahm=took;gab=gave;fand=found;blieb=stayed;dachte=thought",
    "Er ging nach Hause und aß etwas.=He went home and ate something.;Sie kam spät an.=She arrived late.;Wir fanden ein schönes Café.=We found a nice café.",
    "Practise the long vowels in kam, nahm, gab, sah.",
    "Read a short story in Präteritum and underline all verb forms.",
    "Write 8 sentences in Präteritum continuing a short story.");
  L(82, 20, "Plusquamperfekt and nachdem",
    "Plusquamperfekt = hatte/war + Partizip II for an earlier past event: Nachdem ich gegessen hatte, ging ich spazieren. als for a single past event, wenn for repeated events.",
    "nachdem=after;bevor=before;als=when (once);wenn=whenever;seitdem=since then;inzwischen=meanwhile;zuvor=beforehand;vorher=before;nachher=afterwards;schon=already;noch nicht=not yet;endlich=finally",
    "Nachdem ich angekommen war, rief ich an.=After I had arrived, I called.;Als ich klein war, wohnte ich auf dem Land.=When I was little, I lived in the countryside.;Wenn ich Zeit hatte, ging ich schwimmen.=Whenever I had time, I went swimming.",
    "Say the two clauses with a clear pause and different rhythm.",
    "Listen to a story and mark which event happened first.",
    "Write 8 sentences with nachdem, als and wenn about your past.");
  L(83, 20, "Telling a story: feelings and structure",
    "Structure: setting, complication, resolution. Use feelings vocabulary: überrascht, enttäuscht, erleichtert. Mix Präteritum and Perfekt naturally.",
    "das Erlebnis=experience;überrascht=surprised;enttäuscht=disappointed;erleichtert=relieved;begeistert=thrilled;nervös=nervous;peinlich=embarrassing;unglaublich=unbelievable;zum Glück=luckily;leider=unfortunately;mitten in=in the middle of;auf einmal=suddenly",
    "Zum Glück war der Zug noch da.=Luckily the train was still there.;Ich war total überrascht.=I was completely surprised.;Das war ein unglaubliches Erlebnis.=That was an incredible experience.",
    "Use expressive intonation for feelings; stress überRASCHT and entTÄUSCHT.",
    "Listen to a personal story on a podcast (Slow German B1) and note feelings words.",
    "Tell a story of about 1.5 minutes with setting, complication and resolution. Record it.");

  /* Module 21 */
  L(85, 21, "Complaint emails",
    "Structure: Betreff, Anrede, reason, problem with facts, request, deadline, Grußformel. Language: Leider muss ich mich beschweren … Ich bitte Sie, … Ich erwarte Ihre Antwort bis zum …",
    "die Beschwerde=complaint;der Mangel=defect;die Erstattung=refund;der Ersatz=replacement;die Lieferung=delivery;defekt=broken;die Entschuldigung=apology;die Reklamation=complaint / claim;die Garantie=warranty;fordern=to demand;die Frist=deadline;beschädigt=damaged",
    "Leider muss ich mich über … beschweren.=Unfortunately I have to complain about …;Ich bitte Sie, mir das Geld zu erstatten.=I ask you to refund the money.;Ich erwarte Ihre Antwort bis zum …=I expect your reply by …",
    "Keep a calm, polite tone even when complaining: stress facts, not emotions.",
    "Read two sample complaint emails and mark structure and key phrases.",
    "Write a complaint email of about 80 words about a late delivery.");
  L(86, 21, "Infinitiv mit zu",
    "Infinitive with zu after many verbs and expressions: Ich habe vergessen, dich anzurufen. Es ist wichtig, pünktlich zu sein. With separable verbs zu goes inside: anzurufen, aufzuräumen.",
    "versuchen=to try;vergessen=to forget;anfangen=to begin;aufhören=to stop;vorhaben=to plan;beschließen=to decide;planen=to plan;es lohnt sich=it is worth it;Lust haben=to feel like;Zeit haben=to have time;die Absicht=intention;empfehlen=to recommend",
    "Ich habe vergessen, dich anzurufen.=I forgot to call you.;Es ist wichtig, pünktlich zu sein.=It's important to be on time.;Ich habe vor, im Sommer zu reisen.=I plan to travel in the summer.",
    "Pronounce anzurufen with stress on AN: AN-zu-ru-fen.",
    "Read a text with many zu-infinitives and underline them.",
    "Write 10 sentences with zu + Infinitiv about plans and obligations.");
  L(87, 21, "Formal register: invitations, replies and requests",
    "Formal requests: Ich wäre Ihnen dankbar, wenn … Bezüglich Ihrer Anfrage … Anbei … Learn to accept, decline and apologise in writing.",
    "dankbar=grateful;teilnehmen=to take part;absagen=to decline;zusagen=to accept;bedauern=to regret;um Verständnis bitten=to ask for understanding;anbei=enclosed;bezüglich=regarding;gegebenenfalls=if applicable;freundlicherweise=kindly;umgehend=promptly;die Unterlagen=documents",
    "Ich wäre Ihnen dankbar, wenn Sie mir antworten könnten.=I would be grateful if you could reply.;Leider kann ich nicht teilnehmen.=Unfortunately I can't attend.;Bezüglich Ihrer Anfrage …=Regarding your inquiry …",
    "Long formal words: gegebenenfalls, freundlicherweise. Practise slowly and then at speed.",
    "Read a formal invitation and its reply and list the polite phrases.",
    "Write a formal reply (60 words) declining an invitation and suggesting an alternative.");

  /* Module 22 */
  L(89, 22, "Futur I and plans",
    "Futur I = werden + Infinitiv: Ich werde Deutsch lernen. Often the present tense with a time word is enough. Use Futur for promises, predictions and assumptions.",
    "die Zukunft=future;das Ziel=goal;der Plan=plan;hoffentlich=hopefully;wahrscheinlich=probably;bestimmt=certainly;irgendwann=someday;in Zukunft=in future;der Wunschberuf=dream job;die Weiterbildung=further training;der Abschluss=qualification;die Prüfung=exam",
    "Ich werde nächstes Jahr die Prüfung machen.=I will take the exam next year.;Wahrscheinlich werde ich umziehen.=I will probably move.;Hoffentlich bestehe ich die Prüfung.=Hopefully I'll pass the exam.",
    "werde: short e, soft final e. Practise ich werde, du wirst, er wird.",
    "Listen to people discussing plans for the future and note their goals.",
    "Write 8 sentences about your plans for the next five years.");
  L(90, 22, "Genitiv and prepositions with Genitiv",
    "Genitiv shows possession: das Auto meines Vaters, das Buch meiner Schwester. wegen, trotz, während, statt + Genitiv. Masculine and neuter nouns add -(e)s.",
    "wegen=because of;trotz=despite;während=during;statt=instead of;innerhalb=within;außerhalb=outside;die Mitte=middle;das Ende=end;der Anfang=beginning;der Rand=edge;die Hälfte=half;der Besitzer=owner",
    "Wegen des Wetters bleiben wir zu Hause.=Because of the weather we stay at home.;Trotz des Regens gehen wir spazieren.=Despite the rain we go for a walk.;Das ist das Buch meiner Schwester.=That is my sister's book.",
    "Notice the s at the end of masculine and neuter genitive nouns: des Wetters, des Regens.",
    "Read a news paragraph and underline all genitive forms.",
    "Write 8 sentences with Genitiv and the prepositions wegen, trotz, während.");
  L(91, 22, "Education and connectors",
    "Education vocabulary (Schule, Ausbildung, Studium, Volkshochschule) and connector review: außerdem, deshalb, trotzdem, dennoch, indem, sodass. Prepare to write a short essay about learning.",
    "die Ausbildung=vocational training;das Studium=studies;die Universität=university;die Volkshochschule=adult education centre;der Kurs=course;das Zeugnis=certificate;die Note=grade;bestehen=to pass;durchfallen=to fail;das Stipendium=scholarship;dennoch=nevertheless;sodass=so that",
    "Ich habe einen Sprachkurs an der Volkshochschule gemacht.=I took a language course at the Volkshochschule.;Ich habe die Prüfung bestanden.=I passed the exam.;Das Zeugnis wird per Post geschickt.=The certificate is sent by post.",
    "Practise stressing Volkshochschule on VOLKS and -SCHU-.",
    "Read a short text about adult education in Germany and note three facts.",
    "Write about the advantages of lifelong learning (about 100 words) using at least 5 connectors.");

  /* ---------- Generated: assignment days ---------- */
  MODULES.forEach(function (m) {
    if (m.id === 23) return;
    DAYS[m.e] = { n: m.e, m: m.id, type: "assignment", aid: "practice-" + m.id, t: "Practice assignment: " + m.en, v: [], p: [] };
  });

  /* ---------- Review & test days ---------- */
  DAYS[33] = { n: 33, m: 8, type: "review", t: "A1 review day",
    c: "Consolidate everything from Level A1: greetings, numbers, family, food, time, directions, housing, hobbies, health. Fix your most common mistakes before the graded test.",
    v: [], p: [] };
  DAYS[34] = { n: 34, m: 8, type: "test", aid: "test-a1", t: "A1 graded assignment", v: [], p: [] };
  DAYS[63] = { n: 63, m: 15, type: "review", t: "A2 review day",
    c: "Consolidate everything from Level A2: Perfekt, Dativ, Wechselpräpositionen, Präteritum of sein/haben/modals, weil/dass/wenn, reflexive verbs, adjective endings and Konjunktiv II politeness.",
    v: [], p: [] };
  DAYS[64] = { n: 64, m: 15, type: "test", aid: "test-a2", t: "A2 graded assignment", v: [], p: [] };

  /* ---------- Module 23: bootcamp ---------- */
  function B(n, t, c, v, p, blocks, extra) {
    var d = { n: n, m: 23, type: "boot", t: t, c: c, v: pairs(v), p: pairs(p), blocks: blocks };
    for (var k in extra) d[k] = extra[k];
    DAYS[n] = d;
  }
  B(93, "Lesen: reading strategies for B1",
    "Learn to skim, scan and decode. Read the questions first, underline keywords and find synonyms in the text. Practise the five reading parts: a blog post (true/false), a newspaper article (multiple choice), matching ads, opinions on a topic (yes/no) and rules or notices (multiple choice). Check the current official sample papers for the exact format.",
    "überfliegen=to skim;das Stichwort=keyword;das Synonym=synonym;die Überschrift=headline;der Absatz=paragraph;richtig=true;falsch=false;die Aussage=statement;zuordnen=to match;der Leser=reader;die Anzeige=advertisement;der Bericht=report",
    "Im Text steht, dass …=The text says that …;Das bedeutet, dass …=That means that …;Das steht nicht im Text.=That isn't in the text.",
    [{ t: "Strategy warm-up", m: 15, d: "Watch a B1 Lesen strategy video and review the five reading parts and their task types." },
     { t: "Timed reading: parts 1 and 2", m: 25, d: "Do a free sample paper (Modellsatz) under time. Underline keywords before answering." },
     { t: "Timed reading: parts 3 to 5", m: 25, d: "Matching ads, opinions, rules and notices. Note every synonym pair you find." },
     { t: "Vocabulary from the texts", m: 15, d: "Add 15 new words to your flashcards with article and plural." },
     { t: "Mistake log", m: 10, d: "For every wrong answer, mark the sentence in the text that proves the right answer." }]);
  B(94, "Hören: listening strategies for B1",
    "Hören has four parts: short announcements or messages, a talk or report, a conversation between two people and a discussion or interview. Read the questions before the audio, listen for the gist first, then note numbers and names. Some parts are played once and some twice; check the current sample paper.",
    "die Durchsage=announcement;der Anrufbeantworter=answering machine;die Ansage=recorded message;der Vortrag=talk;das Gespräch=conversation;die Diskussion=discussion;der Moderator=host;mitschreiben=to take notes;das Hauptthema=main topic;die Einzelheit=detail;wiederholen=to repeat;der Sprecher=speaker",
    "Worum geht es?=What is it about?;Der Sprecher meint, dass …=The speaker thinks that …;Ich habe das nicht verstanden.=I didn't understand that.",
    [{ t: "Strategy warm-up", m: 10, d: "Review the four Hören parts and how to read questions in advance." },
     { t: "Practice: parts 1 and 2", m: 25, d: "Do announcements and a talk from a free sample paper. Take notes with keywords." },
     { t: "Practice: parts 3 and 4", m: 25, d: "A conversation and a discussion. Note who says what." },
     { t: "Dictation and shadowing", m: 15, d: "Pick 2 minutes of audio (DW or Slow German). Write what you hear, then shadow it." },
     { t: "Mistake log", m: 15, d: "Replay each mistake with the transcript; write down what you misheard." }]);
  B(95, "Schreiben: templates and practice",
    "Three tasks: an informal email (about 80 words), a forum post giving your opinion (about 80 words) and a formal email (about 40 words). Address every bullet point of the task. Build templates for opening, reasons, closing and connectors.",
    "der Betreff=subject line;die Anrede=salutation;die Grußformel=closing;der Absender=sender;der Empfänger=recipient;der Beitrag=post;das Forum=forum;die Stellungnahme=statement;beschreiben=to describe;begründen=to justify;der Vorschlag=suggestion;die Bitte=request",
    "Ich schreibe dir, weil …=I'm writing to you because …;Meiner Meinung nach …=In my opinion …;Ich würde mich freuen, wenn …=I would be happy if …",
    [{ t: "Templates", m: 10, d: "Write your own templates for informal email, forum post and formal email (openings, closings, connectors)." },
     { t: "Tasks 1 and 2", m: 25, d: "Write an informal email and a forum post under time. Cover every bullet point." },
     { t: "Task 3", m: 20, d: "Write a formal email of about 40 words (complaint, request or apology)." },
     { t: "Self-edit with checklist", m: 20, d: "Check verb position, cases, endings, spelling, register and word count." },
     { t: "Useful phrases", m: 15, d: "Add 15 phrases from your texts to your flashcards." }]);
  B(96, "Sprechen: planning, presenting, answering",
    "Three parts: plan something together in a dialogue, give a 3 to 4 minute presentation (introduction, main part, conclusion) and answer questions with feedback. Learn phrases for suggesting, agreeing and asking back.",
    "die Präsentation=presentation;vorstellen=to present;einleiten=to introduce;zusammenfassen=to summarise;der Vorschlag=suggestion;einverstanden=agreed;abstimmen=to agree on;planen=to plan;die Erfahrung=experience;der Vorteil=advantage;Was hältst du davon?=What do you think about that?;Das finde ich gut.=I like that.",
    "Ich möchte über … sprechen.=I would like to talk about …;Zum Schluss möchte ich sagen, …=In conclusion I'd like to say …;Vielen Dank für Ihre Aufmerksamkeit.=Thank you for your attention.",
    [{ t: "Templates", m: 10, d: "Write phrase templates for each of the three Sprechen parts." },
     { t: "Part 1: plan together", m: 20, d: "Role-play planning an event with a partner or a recording. Suggest, agree, ask back." },
     { t: "Part 2: presentation", m: 25, d: "Prepare and record a 3 to 4 minute presentation with a clear structure." },
     { t: "Part 3: questions", m: 15, d: "Answer follow-up questions on your presentation; add examples and reasons." },
     { t: "Record and review", m: 20, d: "Listen to your recordings and note pronunciation errors and long pauses." }]);
  B(97, "Grammar and vocabulary consolidation",
    "Review the highest-yield B1 grammar: verb position in main and subordinate clauses, cases, adjective endings, tenses, Konjunktiv II, Passiv, Relativsätze and Infinitiv mit zu. Drill with mixed exercises and connectors.",
    "dagegen=on the other hand;stattdessen=instead;dennoch=nevertheless;zwar … aber=admittedly … but;entweder … oder=either … or;weder … noch=neither … nor;sowohl … als auch=both … and;je … desto=the more … the more;im Gegensatz zu=in contrast to;auf jeden Fall=in any case;es kommt darauf an=it depends;ich nehme an, dass …=I assume that …",
    "Es kommt darauf an, ob …=It depends on whether …;Zwar ist das teuer, aber es lohnt sich.=It is expensive, but it's worth it.;Je mehr ich übe, desto besser werde ich.=The more I practise, the better I get.",
    [{ t: "Grammar map", m: 20, d: "Make a one-page map of the B1 grammar points and one example sentence for each." },
     { t: "Mixed exercises", m: 30, d: "Do mixed grammar exercises (Lingolia, mein-deutschbuch, Schubert-Verlag)." },
     { t: "Vocabulary sprint", m: 20, d: "Flashcard review of all module words you got wrong." },
     { t: "Error-log review", m: 10, d: "Reread your error log and fix your 10 most repeated mistakes." },
     { t: "Listening and shadowing", m: 10, d: "Shadow 2 minutes of slow news audio." }]);
  B(98, "Mock exam 1: Lesen, Hören and Sprachbausteine",
    "Take the graded mock: reading, listening and grammar/vocabulary. Work in one sitting, no dictionary, and finish before reading the explanations.",
    "", "",
    [{ t: "Take the graded quiz", m: 45, d: "Reading, listening (audio plays in your browser) and grammar. Aim for 60% or higher." },
     { t: "Review your errors", m: 30, d: "Read every explanation and add mistakes to your error log." },
     { t: "Plan your gaps", m: 15, d: "List your 3 weakest areas and choose exercises for tomorrow." }],
    { aid: "mock-1", type: "test" });
  B(99, "Mock exam 2: Schreiben and Sprechen",
    "Complete the writing tasks and speaking parts under exam conditions, then grade yourself with the rubric. If you can, ask a tutor or language partner for feedback.",
    "", "",
    [{ t: "Writing tasks", m: 35, d: "Informal email, forum opinion, formal email. Write under time without a dictionary." },
     { t: "Speaking recording", m: 25, d: "Record all three parts: plan together, presentation, answering questions." },
     { t: "Self-grade with the rubric", m: 20, d: "Score your writing and speaking with the checklist in the assignment." },
     { t: "Feedback", m: 10, d: "Send your texts or recordings to a tutor, teacher or exchange partner for feedback." }],
    { aid: "mock-2", type: "test" });
  B(100, "Final review and next steps",
    "Review your error log, revisit your lowest-scoring modules, register for a B1 exam, set a maintenance routine and plan B2.",
    "die Anmeldung=registration;die Prüfungsgebühr=exam fee;der Prüfungstermin=exam date;der Prüfungsort=exam venue;das Ergebnis=result;das Zertifikat=certificate;die Bescheinigung=confirmation;der Notfall=emergency;mitbringen=to bring;der Ausweis=ID;pünktlich=on time;die Ruhe=calm",
    "Ich melde mich zur Prüfung an.=I'm registering for the exam.;Ich habe die Prüfung bestanden!=I passed the exam!;Ich bin bereit für B2.=I'm ready for B2.",
    [{ t: "Gap-fill review", m: 30, d: "Work on the weakest areas from Mock exam 1 and 2." },
     { t: "Full speaking run-through", m: 20, d: "Record all three Sprechen parts again and compare with Day 99." },
     { t: "Exam logistics", m: 15, d: "Choose an exam (Goethe, telc, ÖSD or DTZ), find a date and check fees and registration." },
     { t: "Plan B2", m: 15, d: "Set a weekly routine: 45 min daily plus one conversation and one news article." },
     { t: "Letter to yourself", m: 10, d: "Write a short letter in German about what you achieved in 100 days." }]);

  /* ---------- Resources ---------- */
  var RES = [
    { id: "dw-overview", cat: "Video courses", title: "DW Learn German: course overview", url: "https://learngerman.dw.com/en/overview", src: "Deutsche Welle",
      desc: "Free courses from A1 to C1. Change the interface language at the top of the page.", lv: ["A1", "A2", "B1"] },
    { id: "dw-nicos", cat: "Video courses", title: "Nicos Weg: full video course A1 to B1", url: "https://learngerman.dw.com/de/nicos-weg/c-36519687", src: "Deutsche Welle",
      desc: "A story-based video course with hundreds of lessons and interactive exercises for A1 to B1.", lv: ["A1", "A2", "B1"] },
    { id: "dw-trainer", cat: "Vocabulary", title: "Deutschtrainer A1: vocabulary and short sentences", url: "https://learngerman.dw.com/en/deutschtrainer/c-56705009", src: "Deutsche Welle",
      desc: "Short vocabulary and sentence drills for beginners.", lv: ["A1"] },
    { id: "schubert", cat: "Exercises", title: "Schubert-Verlag: free online exercises", url: "http://www.schubert-verlag.de/aufgaben/index.htm", src: "Schubert-Verlag",
      desc: "Free German exercises for grammar, vocabulary and listening from A1 upwards.", lv: ["A1", "A2", "B1"] },
    { id: "schubert-app", cat: "Vocabulary", title: "Schubert Wort+Satz app", url: "https://apps.apple.com/app/id1477460321", src: "Schubert-Verlag (iPhone)",
      desc: "Free flashcards that teach words in sentences. Check your store for other platforms.", lv: ["A1", "A2"] },
    { id: "goethe-ele", cat: "Exercises", title: "Goethe-Institut: free exercises A1 to A2", url: "https://www.goethe.de/de/spr/ueb/ele.html", src: "Goethe-Institut",
      desc: "Photo stories, the online pronunciation trainer and more, all free.", lv: ["A1", "A2"] },
    { id: "goethe-hub", cat: "Exam prep", title: "Goethe-Institut language hub", url: "https://www.goethe.de/de/spr.html", src: "Goethe-Institut",
      desc: "Find Goethe-Zertifikat B1 information, sample papers and free practice material.", lv: ["B1"] },
    { id: "vhs", cat: "Video courses", title: "vhs-Lernportal", url: "https://www.vhs-lernportal.de/", src: "Deutscher Volkshochschul-Verband",
      desc: "Free online German courses from the German adult-education centres.", lv: ["A1", "A2", "B1"] },
    { id: "nachrichtenleicht", cat: "Reading and news", title: "Nachrichtenleicht", url: "https://www.nachrichtenleicht.de/", src: "Deutschlandfunk",
      desc: "News in simple German with audio. Great for A2.", lv: ["A2", "B1"] },
    { id: "tagesschau", cat: "Reading and news", title: "Tagesschau in 100 Sekunden", url: "https://www.tagesschau.de/multimedia/sendung/tagesschau_in_100_sekunden/", src: "ARD",
      desc: "Short German news video with clear speech. Good listening practice for B1.", lv: ["B1"] },
    { id: "slowgerman", cat: "Listening", title: "Slow German podcast", url: "https://slowgerman.com/", src: "Annik Rubens",
      desc: "Slowly spoken podcast episodes on everyday topics with transcripts.", lv: ["A2", "B1"] },
    { id: "easygerman", cat: "Listening", title: "Easy German on YouTube", url: "https://www.youtube.com/@EasyGerman", src: "Easy German",
      desc: "Street interviews with German and English subtitles.", lv: ["A1", "A2", "B1"] },
    { id: "24h", cat: "Video courses", title: "24h Deutsch (Goethe-Institut YouTube)", url: "https://www.youtube.com/results?search_query=24h+Deutsch+Goethe-Institut", src: "Goethe-Institut",
      desc: "A day in Germany in short episodes with a teacher. Search results link.", lv: ["A1", "A2"] },
    { id: "forvo", cat: "Pronunciation", title: "Forvo: pronunciation by native speakers", url: "https://forvo.com/languages/de/", src: "Forvo",
      desc: "Hear any German word or name spoken by native speakers.", lv: ["A1", "A2", "B1"] },
    { id: "lunes", cat: "Vocabulary", title: "Lunes: vocabulary trainer", url: "https://lunes.app/", src: "Open source",
      desc: "Free vocabulary practice with articles and audio, privacy friendly.", lv: ["A1", "A2", "B1"] },
    { id: "anki", cat: "Vocabulary", title: "Anki: spaced-repetition flashcards", url: "https://apps.ankiweb.net/", src: "Anki",
      desc: "Free on desktop. Import your own word lists from this course.", lv: ["A1", "A2", "B1"] },
    { id: "lingolia", cat: "Grammar", title: "Lingolia German grammar", url: "https://deutsch.lingolia.com/en/", src: "Lingolia",
      desc: "Clear grammar explanations with exercises (free content).", lv: ["A2", "B1"] },
    { id: "mein-deutschbuch", cat: "Grammar", title: "mein-deutschbuch.de", url: "https://www.mein-deutschbuch.de/", src: "mein-deutschbuch.de",
      desc: "Free grammar and vocabulary exercises with answer keys.", lv: ["A1", "A2", "B1"] },
    { id: "deutsch-perfekt", cat: "Reading and news", title: "Deutsch perfekt", url: "https://www.deutsch-perfekt.com/", src: "Deutsch perfekt",
      desc: "Magazine for learners with texts at different levels (some free samples).", lv: ["A2", "B1"] },
    { id: "pons", cat: "Dictionaries", title: "PONS online dictionary", url: "https://de.pons.com/", src: "PONS",
      desc: "Bilingual learner's dictionary with example sentences and audio.", lv: ["A1", "A2", "B1"] },
    { id: "dwds", cat: "Dictionaries", title: "Duden online", url: "https://www.duden.de/", src: "Duden",
      desc: "The standard German dictionary: gender, plural, spelling, usage.", lv: ["A2", "B1"] },
    { id: "leo", cat: "Dictionaries", title: "LEO and dict.cc", url: "https://dict.cc/", src: "dict.cc",
      desc: "Fast translations with audio and example phrases.", lv: ["A1", "A2", "B1"] },
    { id: "tandem", cat: "Speaking partners", title: "Tandem: language exchange", url: "https://www.tandem.net/", src: "Tandem",
      desc: "Find native speakers who want to practise your language while you practise German.", lv: ["A2", "B1"] },
    { id: "vhs-berlin", cat: "Local courses", title: "BAMF: integration courses in Germany", url: "https://www.bamf.de/EN", src: "BAMF",
      desc: "Official information about state-subsidised integration courses and exams.", lv: ["A1", "A2", "B1"] },
    { id: "telc", cat: "Exam prep", title: "telc: Deutsch B1 exam", url: "https://www.telc.net/", src: "telc",
      desc: "Information about telc Deutsch B1 and the DTZ (Deutsch-Test für Zuwanderer).", lv: ["B1"] }
  ];

  var DAY_RES = { A1: ["dw-nicos", "goethe-ele", "schubert", "forvo"],
                  A2: ["dw-nicos", "schubert", "lingolia", "nachrichtenleicht"],
                  B1: ["dw-overview", "goethe-hub", "lingolia", "tagesschau"] };

  window.COURSE = { levels: LEVELS, modules: MODULES, days: DAYS, resources: RES, dayRes: DAY_RES, total: 100, targetMinutes: 90 };
})();
