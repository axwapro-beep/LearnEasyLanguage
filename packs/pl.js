/* ===== Sprachpaket: Polnisch (Standardpolnisch) =====
   Norm: Rada Języka Polskiego, Słownik języka polskiego PWN; Niveaus: Standards der Państwowa Komisja
   do spraw Poświadczania Znajomości Języka Polskiego jako Obcego. Siehe QUELLEN.md. */
LEL_PACKS.pl = (function(){
const past = (s, p) => `${s}em,${s}eś,${s},${p}iśmy,${p}iście,${p}i`;
const fut = (s, p) => `będę ${s},będziesz ${s},będzie ${s},będziemy ${p},będziecie ${p},będą ${p}`;
return {
LANG: {code:"pl", flag:"🇵🇱", name:"Polnisch", adj:"Polnisch", inLang:"Polnisch", into:"ins Polnische",
  country:"Polen", voiceFrom:"aus Polen", tts:"pl-PL", ttsRe:/^pl/i, prefix:"pl",
  voicePath:"Polnisch", status:"A1 · Abschnitt 1 von 6", tutor:false},
ART_RE: /^(der|die|das|ein|eine|einen) /,
F_RE: /zosia|ewa|maja|agnieszka|female|kobieta|woman/i,
M_RE: /krzysztof|jacek|jan|\bmale\b|mężczyzna|\bman\b/i,
FUNC: ["i","w","na","z","do","nie","się","to","jest","a","ale","że","o","po","dla"],
LEVEL_NAMES: {A1:"Absolute Grundlagen",A2:"Einfache Gespräche & Alltag",B1:"Selbstständig kommunizieren",B2:"Flüssiger sprechen",C1:"Fortgeschrittenes Polnisch"},
CURRICULUM: {
 A1:[["A1-01","Begrüßen & sich vorstellen","cześć, dzień dobry, mam na imię …, pan / pani"],["A1-02","Aussprache","sz, cz, rz/ż, ł, ś/ć/ź, ą/ę"],["A1-03","Geschlecht","männlich, weiblich, sächlich – ohne Artikel"],["A1-04","być & mieć","jestem, mam"],["A1-05","Präsens: drei Konjugationen","mówię, mieszkam, pracuję"],["A1-06","Verneinung + Genitiv","nie mam czasu"],["A1-07","Lokativ & Instrumental","w Berlinie, jestem studentem"],["A1-08","Zahlen & Uhrzeit","0–100, która godzina?"],["A1-T","A1-Abschlusstest","Prüfung über alle A1-Themen"]],
 A2:[["A2-01","Vergangenheit","byłem / byłam"],["A2-02","Aspekt","robić – zrobić"],["A2-03","Akkusativ & Genitiv","Mengen, Verneinung, Objekte"],["A2-04","Bewegungsverben","iść / chodzić, jechać / jeździć"],["A2-T","A2-Abschlusstest","Prüfung über alle A2-Themen"]],
 B1:[["B1-01","Dativ","daję bratu"],["B1-02","Konditional","chciałbym"],["B1-03","Imperativ","zrób, nie rób"],["B1-T","B1-Abschlusstest","Prüfung über alle B1-Themen"]],
 B2:[["B2-01","Partizipien","czytający, przeczytany"],["B2-02","Komplexe Sätze","żeby, chociaż, gdyby"],["B2-T","B2-Abschlusstest","Prüfung über alle B2-Themen"]],
 C1:[["C1-01","Stil & Register","formell und umgangssprachlich"],["C1-02","Zahlwörter vollständig","Sammelzahlen, Männlichpersonenform"],["C1-T","C1-Abschlusstest","Prüfung über alle C1-Themen"]]
},
SCENARIOS: [["☕","W kawiarni","Bestelle einen Kaffee und ein Stück Kuchen"],["🛒","W sklepie","Frag nach Produkten, Preisen und bezahle"],["📞","Przez telefon","Reserviere einen Tisch im Restaurant"],["🍻","Ze znajomymi","Verabrede dich für den Abend"],["👨‍👩‍👧","W rodzinie","Lerne die Familie eines Freundes kennen"],["🧭","Na ulicy","Frag nach dem Weg zur Straßenbahn"],["💊","W aptece","Beschreibe Beschwerden und kauf etwas"],["🏨","W hotelu","Check-in und Fragen an der Rezeption"],["🏠","Z sąsiadem","Smalltalk mit dem Nachbarn"],["🎲","Wolna rozmowa","Freies Gespräch auf deinem Niveau"]],
SCEN_DE: ["Im Café","Im Laden","Am Telefon","Mit Freunden","Mit der Familie","Auf der Straße","In der Apotheke","Im Hotel","Mit dem Nachbarn","Freies Gespräch"],
STARTER_VOCAB: [["cześć","hallo / tschüss"],["dzień dobry","guten Tag"],["dobry wieczór","guten Abend"],["mam na imię …","ich heiße …"],["co słychać?","was gibt's Neues?"],["dziękuję","danke"],["proszę","bitte"],["przepraszam","Entschuldigung"],["tak","ja"],["nie","nein"],["do widzenia","auf Wiedersehen"]],
INITIAL_CHAT: [{role:"assistant", content:"Cześć! Hier lernst du Polnisch 🇵🇱\n\nFang einfach mit der ersten Lektion im Lernpfad an."}],
THEMES: [
 {id:"gruss",e:"👋",name:"Begrüßung & Höflichkeit",level:"A1",w:`cześć|hallo / tschüss (locker)
dzień dobry|guten Tag / guten Morgen
dobry wieczór|guten Abend
dobranoc|gute Nacht
do widzenia|auf Wiedersehen
na razie|bis dann (locker)
do jutra|bis morgen
do zobaczenia|bis bald
co słychać?|was gibt's Neues?
jak się masz?|wie geht es dir?
dobrze|gut
dziękuję|danke
dziękuję bardzo|vielen Dank
nie ma za co|gern geschehen
proszę|bitte
przepraszam|Entschuldigung
miło mi|freut mich
witamy|willkommen`},
 {id:"ichdu",e:"🙋",name:"Personen & Vorstellen",level:"A1",w:`ja|ich
ty|du
on|er
ona|sie (Singular)
ono|es
my|wir
wy|ihr
oni|sie (Plural, mit Männern)
one|sie (Plural, ohne Männer)
pan|Herr / Sie (zu einem Mann)
pani|Frau / Sie (zu einer Frau)
mam na imię|ich heiße (Vorname)
nazywam się|ich heiße (Nachname / voller Name)
imię|der Vorname
nazwisko|der Nachname
Niemiec|der Deutsche
Niemka|die Deutsche
Polak|der Pole
Polka|die Polin
Niemcy|Deutschland
Polska|Polen`},
 {id:"fragen",e:"❓",name:"Fragewörter",level:"A1",w:`co?|was?
kto?|wer?
gdzie?|wo?
dokąd?|wohin?
skąd?|woher?
kiedy?|wann?
jak?|wie?
ile?|wie viel? / wie viele?
dlaczego?|warum?
bo|weil
który?|welcher?
czy|ob (leitet Ja/Nein-Fragen ein)`},
 {id:"zahlen",e:"🔢",name:"Zahlen",level:"A1",w:`zero|null
jeden|eins
dwa|zwei
trzy|drei
cztery|vier
pięć|fünf
sześć|sechs
siedem|sieben
osiem|acht
dziewięć|neun
dziesięć|zehn
jedenaście|elf
dwanaście|zwölf
trzynaście|dreizehn
czternaście|vierzehn
piętnaście|fünfzehn
szesnaście|sechzehn
siedemnaście|siebzehn
osiemnaście|achtzehn
dziewiętnaście|neunzehn
dwadzieścia|zwanzig
dwadzieścia jeden|einundzwanzig
trzydzieści|dreißig
czterdzieści|vierzig
pięćdziesiąt|fünfzig
sześćdziesiąt|sechzig
siedemdziesiąt|siebzig
osiemdziesiąt|achtzig
dziewięćdziesiąt|neunzig
sto|hundert
tysiąc|tausend
złoty|der Złoty (Währung)`},
 {id:"verben",e:"⚙️",name:"Erste Verben",level:"A1",w:`być|sein
mieć|haben
iść|gehen (zu Fuß, gerade)
jechać|fahren (gerade)
robić|machen
móc|können
chcieć|wollen
mówić|sprechen
pracować|arbeiten
mieszkać|wohnen
jeść|essen
pić|trinken
wiedzieć|wissen
rozumieć|verstehen
lubić|mögen
kochać|lieben`},
 {id:"alltag",e:"☀️",name:"Erste Alltagswörter",level:"A1",w:`tak|ja
nie|nein / nicht
oczywiście|natürlich
dobrze|gut / okay
też|auch
nic|nichts
nigdy|nie
dzisiaj|heute
jutro|morgen
wczoraj|gestern
tutaj|hier
tam|dort
dużo|viel
trochę|ein bisschen
bardzo|sehr
kawa|der Kaffee
herbata|der Tee
woda|das Wasser
piwo|das Bier
chleb|das Brot
dom|das Haus
ulica|die Straße
toaleta|die Toilette
dworzec|der Bahnhof
brat|der Bruder
siostra|die Schwester
przyjaciel|der Freund
przyjaciółka|die Freundin`}
],
PATH_SECTIONS: [
 {id:"s1", title:"Erste Schritte", pt:"Pierwsze kroki", level:"A1", color:"#2F6BFF", units:[
  {id:"u1", e:"👋", title:"Begrüßungen", pt:"Cześć!", desc:"Hallo sagen, danke und bitte.",
   words:`cześć|hallo / tschüss (locker)
dzień dobry|guten Tag / guten Morgen
dobry wieczór|guten Abend
do widzenia|auf Wiedersehen
dobranoc|gute Nacht
na razie|bis dann (locker)
do jutra|bis morgen
dziękuję|danke
proszę|bitte
przepraszam|Entschuldigung`,
   sents:`Dzień dobry!|Guten Tag!|Begrüßung|„Dzień dobry“ sagt man vom Morgen bis zum Abend.
Cześć, co słychać?|Hallo, was gibt's Neues?|Begrüßung|„Cześć“ nur unter Freunden und Gleichaltrigen.
Dobrze, dziękuję.|Gut, danke.|Begrüßung|
Dobry wieczór!|Guten Abend!|Begrüßung|Ab dem Abend sagt man „dobry wieczór“.
Do widzenia, do jutra!|Auf Wiedersehen, bis morgen!|Begrüßung|
Poproszę kawę.|Ich hätte gern einen Kaffee.|Fälle|„kawa“ wird im Akkusativ zu „kawę“.`},
  {id:"u2", e:"🙋", title:"Sich vorstellen", pt:"Mam na imię…", desc:"Name, Herkunft und Wohnort.",
   words:`mam na imię|ich heiße (Vorname)
nazywam się|ich heiße (voller Name)
jestem|ich bin
jak masz na imię?|wie heißt du?
skąd jesteś?|woher kommst du?
jestem z Niemiec|ich komme aus Deutschland
mieszkam w|ich wohne in
miło mi|freut mich
Niemiec|der Deutsche
Niemka|die Deutsche`,
   sents:`Mam na imię Daniel.|Ich heiße Daniel.|Vorstellen|Wörtlich: „Ich habe zum Vornamen Daniel.“
Jak masz na imię?|Wie heißt du?|Fragen|
Jestem Niemcem.|Ich bin Deutscher.|Fälle|Nach „być“ (sein) steht ein Substantiv im Instrumental: Niemiec → Niemcem. Eine Frau sagt „Jestem Niemką“.
Jestem z Niemiec.|Ich komme aus Deutschland.|Fälle|Nach „z“ (aus) steht der Genitiv: Niemcy → z Niemiec.
Mieszkam w Berlinie.|Ich wohne in Berlin.|Fälle|Nach „w“ (in) steht der Lokativ: Berlin → w Berlinie.
Miło mi!|Freut mich!|Begrüßung|
Skąd jesteś?|Woher kommst du?|Fragen|`,
   story:{title:"Im Sprachkurs", lines:`Ola|Cześć! Jak masz na imię?|Hallo! Wie heißt du?
Daniel|Mam na imię Daniel. A ty?|Ich heiße Daniel. Und du?
Ola|Jestem Ola. Skąd jesteś?|Ich bin Ola. Woher kommst du?
Daniel|Jestem z Niemiec, ale mieszkam w Krakowie.|Ich komme aus Deutschland, aber ich wohne in Krakau.
Ola|Bardzo mi miło!|Sehr erfreut!`, qs:`Woher kommt Daniel?|Aus Deutschland|Aus Krakau|Aus Österreich
Wo wohnt Daniel?|In Krakau|In Berlin|In Danzig
Was sagt Ola am Ende?|Sehr erfreut|Bis morgen|Danke schön`}},
  {id:"u3", e:"✅", title:"Ja und Nein", pt:"Tak czy nie", desc:"Zustimmen, ablehnen, verneinen.",
   words:`tak|ja
nie|nein / nicht
oczywiście|natürlich
dobrze|gut / okay
też|auch
ja też|ich auch
ja też nie|ich auch nicht
nic|nichts
nigdy|nie
nie wiem|ich weiß nicht`,
   sents:`Tak, oczywiście.|Ja, natürlich.|Zustimmung|
Nie, dziękuję.|Nein, danke.|Verneinung|
Nie wiem.|Ich weiß nicht.|Verneinung|„nie“ steht direkt vor dem Verb.
Dobrze, zgoda.|Gut, einverstanden.|Zustimmung|
Nic nie chcę.|Ich will nichts.|Verneinung|Die doppelte Verneinung ist richtig: nic nie …
Ja też nie.|Ich auch nicht.|Verneinung|
Nie mam czasu.|Ich habe keine Zeit.|Fälle|Nach einer Verneinung steht das Objekt im Genitiv: czas → czasu.`},
  {id:"u4", e:"❓", title:"Grundlegende Fragen", pt:"Pytania", desc:"Wer, was, wo, wann und wie viel?",
   words:`co?|was?
kto?|wer?
gdzie?|wo?
kiedy?|wann?
jak?|wie?
ile?|wie viel? / wie viele?
dlaczego?|warum?
bo|weil
który?|welcher?
skąd?|woher?`,
   sents:`Co to jest?|Was ist das?|Fragen|
Gdzie jest toaleta?|Wo ist die Toilette?|Fragen|
Ile to kosztuje?|Wie viel kostet das?|Fragen|
Kto to jest?|Wer ist das?|Fragen|
Dlaczego nie przychodzisz?|Warum kommst du nicht?|Fragen|
Bo jestem zmęczony.|Weil ich müde bin.|Geschlecht|Eine Frau sagt „zmęczona“.
Kiedy zaczyna się lekcja?|Wann beginnt der Unterricht?|Fragen|„się“ gehört zum Verb: zaczynać się = anfangen.`},
  {id:"u5", e:"🔢", title:"Zahlen", pt:"Liczby", desc:"Von eins bis hundert, Alter und Preise.",
   words:`jeden|eins
dwa|zwei
trzy|drei
cztery|vier
pięć|fünf
dziesięć|zehn
dwadzieścia|zwanzig
sto|hundert
złoty|der Złoty (Währung)
ile masz lat?|wie alt bist du?`,
   sents:`Mam dwadzieścia lat.|Ich bin zwanzig Jahre alt.|Zahlen|Das Alter sagt man mit „mieć“ (haben). Ab 5 steht „lat“.
Ile masz lat?|Wie alt bist du?|Fragen|
To kosztuje pięć złotych.|Das kostet fünf Złoty.|Zahlen|Nach 2–4 sagt man „złote“, ab 5 „złotych“ (Genitiv Plural).
Jeden, dwa, trzy, cztery.|Eins, zwei, drei, vier.|Zahlen|
Mam dwóch braci.|Ich habe zwei Brüder.|Zahlen|Für Gruppen mit Männern gibt es eigene Zahlformen: dwóch braci.
Sto złotych to dużo pieniędzy.|Hundert Złoty sind viel Geld.|Zahlen|`},
  {id:"u6", e:"🧱", title:"Einfache Sätze", pt:"Proste zdania", desc:"Ich, du, er, sie – die ersten Verben.",
   words:`ja|ich
ty|du
on|er
ona|sie (Singular)
my|wir
wy|ihr
oni|sie (Plural, mit Männern)
pan|Sie (höflich, zu einem Mann)
mówić|sprechen
pracować|arbeiten`,
   sents:`Mówię po niemiecku.|Ich spreche Deutsch.|Verben|Das Pronomen lässt man meist weg. „po niemiecku“ = auf Deutsch.
Mówisz po polsku?|Sprichst du Polnisch?|Fragen|
Ona pracuje w Warszawie.|Sie arbeitet in Warschau.|Verben|Warszawa → w Warszawie (Lokativ).
Mieszkamy w Berlinie.|Wir wohnen in Berlin.|Verben|
Czy pan mówi po angielsku?|Sprechen Sie Englisch? (zu einem Mann)|Anrede|Höflich: „pan“ oder „pani“ mit der 3. Person. „czy“ leitet Ja/Nein-Fragen ein.
On dzisiaj nie pracuje.|Er arbeitet heute nicht.|Verneinung|
Jesteście stąd?|Seid ihr von hier?|być|`}
 ]}
],
DIALOGS: `1|Cześć, co słychać?|Hallo, was gibt's Neues?|Dobrze, dziękuję. A u ciebie?|To kosztuje trzy złote.|Mieszkam w Berlinie.
1|Dziękuję za pomoc!|Danke für die Hilfe!|Nie ma za co!|Nie wiem.|Ile to kosztuje?
2|Jak masz na imię?|Wie heißt du?|Mam na imię Daniel.|Mam dwadzieścia lat.|Na razie!
2|Skąd jesteś?|Woher kommst du?|Jestem z Niemiec.|Mam na imię Ola.|O ósmej.
3|Chcesz kawę?|Möchtest du einen Kaffee?|Tak, chętnie.|Jestem z Niemiec.|Mam dwóch braci.
4|Gdzie jest toaleta?|Wo ist die Toilette?|Tam, na prawo.|To kosztuje pięć złotych.|Mam na imię Daniel.
5|Ile masz lat?|Wie alt bist du?|Mam trzydzieści lat.|Mieszkam w Krakowie.|Dobrze, dziękuję.
5|Ile kosztuje chleb?|Wie viel kostet das Brot?|Pięć złotych.|Do jutra.|Jestem Niemcem.
6|Mówisz po polsku?|Sprichst du Polnisch?|Tak, trochę.|Mam dwadzieścia lat.|Nie ma za co.`,
SENTENCES: `A1|Mam na imię Daniel i jestem z Niemiec.|Ich heiße Daniel und komme aus Deutschland.
A1|Mieszkam w Krakowie od dwóch lat.|Ich wohne seit zwei Jahren in Krakau.
A1|Poproszę kawę z mlekiem.|Ich hätte gern einen Kaffee mit Milch.
A1|Poproszę rachunek.|Die Rechnung, bitte.
A1|Gdzie jest dworzec?|Wo ist der Bahnhof?
A1|Dzisiaj jest bardzo gorąco.|Heute ist es sehr heiß.
A1|Jestem głodny.|Ich habe Hunger. (Mann)
A1|Nie mówię dobrze po polsku.|Ich spreche nicht gut Polnisch.
A1|Czy może pan powtórzyć?|Können Sie das wiederholen? (zu einem Mann)
A1|Moja siostra pracuje w szpitalu.|Meine Schwester arbeitet in einem Krankenhaus.`,
PERSONS: ["ja","ty","on / ona / ono","my","wy","oni / one"],
TENSES: [
  ["pres","Präsens","Was jetzt oder regelmäßig passiert: **mówię** = ich spreche."],
  ["past","Vergangenheit","Die Form richtet sich nach dem Geschlecht. Hier die männlichen Formen: **mówiłem** = ich (Mann) sprach – eine Frau sagt **mówiłam**."],
  ["fut","Zukunft","Bei unvollendeten Verben **być** + Vergangenheitsform: **będę mówił** = ich werde sprechen. Bei **iść** die vollendete Form **pójdę**."]
],
VERBS: {
  "być":     ["sein", "jestem,jesteś,jest,jesteśmy,jesteście,są", past("był","byl"), "będę,będziesz,będzie,będziemy,będziecie,będą"],
  "mieć":    ["haben", "mam,masz,ma,mamy,macie,mają", past("miał","miel"), fut("miał","mieli")],
  "iść":     ["gehen", "idę,idziesz,idzie,idziemy,idziecie,idą", past("szedł","szl"), "pójdę,pójdziesz,pójdzie,pójdziemy,pójdziecie,pójdą"],
  "robić":   ["machen", "robię,robisz,robi,robimy,robicie,robią", past("robił","robil"), fut("robił","robili")],
  "mówić":   ["sprechen", "mówię,mówisz,mówi,mówimy,mówicie,mówią", past("mówił","mówil"), fut("mówił","mówili")],
  "chcieć":  ["wollen", "chcę,chcesz,chce,chcemy,chcecie,chcą", past("chciał","chciel"), fut("chciał","chcieli")],
  "móc":     ["können", "mogę,możesz,może,możemy,możecie,mogą", "mogłem,mogłeś,mógł,mogliśmy,mogliście,mogli", fut("mógł","mogli")],
  "wiedzieć":["wissen", "wiem,wiesz,wie,wiemy,wiecie,wiedzą", past("wiedział","wiedziel"), fut("wiedział","wiedzieli")],
  "pracować":["arbeiten", "pracuję,pracujesz,pracuje,pracujemy,pracujecie,pracują", past("pracował","pracowal"), fut("pracował","pracowali")],
  "mieszkać":["wohnen", "mieszkam,mieszkasz,mieszka,mieszkamy,mieszkacie,mieszkają", past("mieszkał","mieszkal"), fut("mieszkał","mieszkali")],
  "jeść":    ["essen", "jem,jesz,je,jemy,jecie,jedzą", past("jadł","jedl"), fut("jadł","jedli")],
  "pić":     ["trinken", "piję,pijesz,pije,pijemy,pijecie,piją", past("pił","pil"), fut("pił","pili")]
},
VERB_NOTES: {
  "być": "**być** ist unregelmäßig. Weibliche Vergangenheit: **byłam**, **byłaś**, **była**, **byłyśmy**.",
  "iść": "**iść** bedeutet „gerade zu Fuß unterwegs sein“. Regelmäßig gehen heißt **chodzić**.",
  "mówić": "Muster für viele Verben auf -ić: **mówię**, **mówisz** …",
  "pracować": "Verben auf **-ować** bilden das Präsens mit **-uj-**: **pracuję**, **kupuję**."
},
CHEATS: [
 ["Aussprache", `- **sz** wie „sch“, **cz** wie „tsch“: **szkoła**, **czas**.
- **rz** und **ż** klingen gleich, wie das „g“ in „Garage“: **rzeka**, **żaba**.
- **ś**, **ć**, **ź** (auch **si**, **ci**, **zi**) sind weichere Varianten: **cześć**, **ciocia**.
- **ł** klingt wie englisches „w“: **mały**. Das **w** klingt wie deutsches „w“.
- **ą** und **ę** sind nasal: **są**, **idę** – am Wortende klingt ę oft fast wie „e“.
- **ó** klingt genau wie **u**: **mój**.
- **c** ist immer „ts“: **co**. **ch** wie in „Bach“.
- Betonung fast immer auf der vorletzten Silbe: **Polska**, **dziękuję**.`],
 ["Die sieben Fälle", `Polnisch hat sieben Fälle. Die Endung zeigt die Rolle im Satz:
- **Nominativ** (wer?): **To jest Kraków.**
- **Genitiv** (nach Verneinung, nach z = aus, nach Mengen): **Nie mam czasu. Jestem z Polski.**
- **Dativ** (wem?): **Daję bratu książkę.**
- **Akkusativ** (wen?): **Mam kota. Poproszę kawę.**
- **Instrumental** (mit wem? – nach być bei Substantiven): **Jestem studentem. Jadę z mamą.**
- **Lokativ** (wo? – nach w, na, o): **Mieszkam w Berlinie.**
- **Vokativ** (Anrede): **Panie Tomaszu!**
Am Anfang reichen feste Wendungen – die Fälle kommen Schritt für Schritt.`],
 ["Geschlecht", `- Männlich: meist auf Konsonant – **dom**, **kot**, **student**.
- Weiblich: meist auf **-a** – **kawa**, **mama**, **Polska**.
- Sächlich: auf **-o**, **-e**, **-ę** – **okno**, **morze**, **imię**.
- Polnisch hat keine Artikel: **kot** = die Katze / eine Katze.
- Adjektive passen sich an: **dobry dzień**, **dobra kawa**, **dobre piwo**.`],
 ["Verneinung", `- **nie** steht direkt vor dem Verb: **Nie wiem.**
- Doppelte Verneinung ist richtig: **Nic nie wiem. Nikt nie przyszedł.**
- Nach Verneinung steht das Objekt im Genitiv: **Mam czas.** → **Nie mam czasu.** – **Lubię kawę.** → **Nie lubię kawy.**`],
 ["Aspekt: robić oder zrobić?", `Die meisten Verben gibt es als Paar:
- **unvollendet**: Vorgang, Wiederholung – **robić**, **pisać**, **czytać**
- **vollendet**: einmalig, abgeschlossen – **zrobić**, **napisać**, **przeczytać**
- Vollendete Verben haben kein Präsens: **zrobię** heißt „ich werde (es) machen“.
- **Codziennie czytam gazetę.** (Ich lese jeden Tag Zeitung.) – **Przeczytałem tę książkę.** (Ich habe dieses Buch zu Ende gelesen.)`],
 ["Du & Sie", `- **ty** (du): Freunde, Familie, Gleichaltrige.
- Höflich: **pan** (zu einem Mann), **pani** (zu einer Frau), **państwo** (zu mehreren) – mit dem Verb in der 3. Person: **Czy pan mówi po niemiecku?**
- Mit Vornamen per Sie: **Pani Anno, …**`]
]
};
})();
