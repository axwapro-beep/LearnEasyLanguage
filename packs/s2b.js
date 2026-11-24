/* ===== Abschnitt 2 „Mein Alltag“ (A1–A2) für pl, tr, de ===== */
(function(){
const C = "#16A974";
const add = (code, sec, dlg) => {
  const P = LEL_PACKS[code]; if(!P) return;
  P.PATH_SECTIONS.push(sec);
  P.DIALOGS = P.DIALOGS.trim() + "\n" + dlg.trim();
  P.LANG.status = P.LANG.status.replace(/^A1 · Abschnitt 1 von 6/, "A1–A2 · Abschnitt 2 von 6");
};

/* ---------- Polnisch ---------- */
add("pl", {id:"s2", title:"Mein Alltag", pt:"Mój dzień", level:"A1–A2", color:C, units:[
 {id:"u7", e:"👨‍👩‍👧", title:"Familie", pt:"Rodzina", desc:"Eltern, Geschwister und mein, dein, sein.",
  words:`rodzina|die Familie
ojciec|der Vater
matka|die Mutter
rodzice|die Eltern
brat|der Bruder
siostra|die Schwester
syn|der Sohn
córka|die Tochter
dziadek|der Großvater
babcia|die Großmutter`,
  sents:`To jest moja rodzina.|Das ist meine Familie.|Possessiv|mój, moja, moje richten sich nach dem Geschlecht des Nomens.
Moja mama ma na imię Anna.|Meine Mutter heißt Anna.|Possessiv|Im Alltag sagt man meist „mama“ statt „matka“.
Mam brata i siostrę.|Ich habe einen Bruder und eine Schwester.|Akkusativ|Nach „mieć“ steht der Akkusativ: brat → brata, siostra → siostrę.
Masz dzieci?|Hast du Kinder?|Fragen|Man kann auch „Czy“ voranstellen: Czy masz dzieci?
Moi rodzice mieszkają w Krakowie.|Meine Eltern wohnen in Krakau.|Lokativ|w + Lokativ: Kraków → w Krakowie.
Jego brat jest bardzo miły.|Sein Bruder ist sehr nett.|Possessiv|jego = sein, jej = ihr – beide verändern sich nie.`},
 {id:"u8", e:"☀️", title:"Alltag", pt:"Codzienność", desc:"Aufstehen, arbeiten, essen, schlafen.",
  words:`wstawać|aufstehen
brać prysznic|duschen
jeść śniadanie|frühstücken
pracować|arbeiten
jeść obiad|zu Mittag essen
jeść kolację|zu Abend essen
iść spać|schlafen gehen
wcześnie|früh
późno|spät
codziennie|jeden Tag`,
  sents:`Wstaję o siódmej.|Ich stehe um sieben auf.|Uhrzeit|Uhrzeiten sind Ordnungszahlen: o siódmej = „um der siebten“.
Codziennie piję kawę.|Jeden Tag trinke ich Kaffee.|Präsens|
Pracuję od dziewiątej do piątej.|Ich arbeite von neun bis fünf.|Präpositionen|od … do … + Genitiv.
Obiad jemy o czternastej.|Zu Mittag essen wir um vierzehn Uhr.|Kultur|„obiad“ ist die warme Hauptmahlzeit am frühen Nachmittag.
Jem kolację z rodziną.|Ich esse mit der Familie zu Abend.|Instrumental|z + Instrumental: rodzina → z rodziną.
Chodzę spać późno.|Ich gehe spät schlafen.|chodzić|Für Gewohnheiten nimmt man „chodzić“ statt „iść“.`},
 {id:"u9", e:"🕐", title:"Uhrzeiten", pt:"Która godzina?", desc:"Wie spät ist es? Halb, Viertel, Mittag.",
  words:`która godzina?|wie spät ist es?
jest pierwsza|es ist eins
jest druga|es ist zwei
wpół do|halb (vor der nächsten Stunde)
kwadrans po|Viertel nach
za kwadrans|Viertel vor
południe|der Mittag
północ|die Mitternacht
rano|morgens
wieczorem|abends`,
  sents:`Która godzina?|Wie spät ist es?|Uhrzeit|
Jest wpół do czwartej.|Es ist halb vier.|Uhrzeit|Wie im Deutschen: „wpół do czwartej“ = halb vier (3:30).
Jest kwadrans po pierwszej.|Es ist Viertel nach eins.|Uhrzeit|kwadrans = Viertelstunde; auch „piętnaście po pierwszej“.
Jest za kwadrans ósma.|Es ist Viertel vor acht.|Uhrzeit|
Lekcja zaczyna się o dziesiątej.|Der Unterricht beginnt um zehn.|Uhrzeit|o + Lokativ der Ordnungszahl.
Pracuję rano.|Ich arbeite morgens.|Tageszeiten|`},
 {id:"u10", e:"🍽️", title:"Essen und Trinken", pt:"Jedzenie i picie", desc:"Bestellen, mögen, nicht mögen.",
  words:`woda|das Wasser
wino|der Wein
piwo|das Bier
chleb|das Brot
mięso|das Fleisch
ryba|der Fisch
owoce|das Obst
warzywa|das Gemüse
lubię|ich mag
rachunek|die Rechnung`,
  sents:`Lubię kawę.|Ich mag Kaffee.|lubić|Nach „lubić“ steht der Akkusativ: kawa → kawę.
Nie lubię ryby.|Ich mag keinen Fisch.|Verneinung|Bei Verneinung wird aus dem Akkusativ der Genitiv: ryba → ryby.
Poproszę piwo.|Ein Bier, bitte.|Höflichkeit|„Poproszę …“ ist die übliche Art zu bestellen.
Co podać?|Was darf es sein?|Restaurant|
Smacznego!|Guten Appetit!|Kultur|
Poproszę rachunek.|Die Rechnung, bitte.|Restaurant|`},
 {id:"u11", e:"🛒", title:"Einkaufen", pt:"Zakupy", desc:"Preise, bezahlen, Tüte bitte.",
  words:`sklep|der Laden
supermarket|der Supermarkt
kupować|kaufen
płacić|bezahlen
drogi|teuer
tani|billig
torba|die Tüte
kartą|mit Karte
gotówką|bar
ile to kosztuje?|wie viel kostet das?`,
  sents:`Ile kosztuje ta koszulka?|Wie viel kostet dieses T-Shirt?|Demonstrativ|ten, ta, to = dieser, diese, dieses.
To za drogie.|Das ist zu teuer.|Adjektive|
Czy mogę zapłacić kartą?|Kann ich mit Karte zahlen?|Instrumental|„kartą“ und „gotówką“ stehen im Instrumental (womit?).
Poproszę kilo pomidorów.|Ich hätte gern ein Kilo Tomaten.|Genitiv|Nach Mengen steht der Genitiv Plural: pomidory → pomidorów.
Czy potrzebuje pan torby?|Brauchen Sie eine Tüte?|Anrede|pan / pani = Sie (zu einem Mann / einer Frau); „potrzebować“ + Genitiv.
Idę do supermarketu.|Ich gehe in den Supermarkt.|Genitiv|do + Genitiv.`},
 {id:"u12", e:"🏠", title:"Wohnen", pt:"Mieszkanie", desc:"Zimmer, Miete und Nachbarn.",
  words:`dom|das Haus
mieszkanie|die Wohnung
pokój|das Zimmer
kuchnia|die Küche
łazienka|das Bad
salon|das Wohnzimmer
czynsz|die Miete
sąsiad|der Nachbar
duży|groß
mały|klein`,
  sents:`Mieszkam w małym mieszkaniu.|Ich wohne in einer kleinen Wohnung.|Lokativ|w + Lokativ: małe mieszkanie → w małym mieszkaniu.
Mieszkanie ma dwa pokoje.|Die Wohnung hat zwei Zimmer.|Zahlen|Nach 2, 3, 4 steht der Nominativ Plural: dwa pokoje.
Kuchnia jest bardzo duża.|Die Küche ist sehr groß.|Adjektive|Weiblich: duży → duża.
Łazienka jest na końcu korytarza.|Das Bad ist am Ende des Flurs.|Ort|
Czynsz wynosi dwa tysiące złotych.|Die Miete beträgt zweitausend Złoty.|Zahlen|
Mój sąsiad jest bardzo miły.|Mein Nachbar ist sehr nett.|Adjektive|`}
]}, `7|Masz rodzeństwo?|Hast du Geschwister?|Tak, mam siostrę.|Jest trzecia.|Lubię wino.
8|O której wstajesz?|Wann stehst du auf?|O siódmej.|Kartą.|Moja mama.
9|Która godzina?|Wie spät ist es?|Jest wpół do szóstej.|Pięć złotych.|W kuchni.
10|Co chcesz do picia?|Was möchtest du trinken?|Wodę, poproszę.|O ósmej.|Mój brat.
11|Jak pan płaci?|Wie zahlen Sie?|Kartą.|Wstaję późno.|Mam dwoje dzieci.
12|Ile pokoi ma mieszkanie?|Wie viele Zimmer hat die Wohnung?|Trzy.|O dziewiątej.|Nie lubię tego.`);

/* ---------- Türkisch ---------- */
add("tr", {id:"s2", title:"Mein Alltag", pt:"Günlük hayatım", level:"A1–A2", color:C, units:[
 {id:"u7", e:"👨‍👩‍👧", title:"Familie", pt:"Aile", desc:"Eltern, Geschwister und Besitzendungen.",
  words:`aile|die Familie
anne|die Mutter
baba|der Vater
kardeş|das (jüngere) Geschwister
abla|die ältere Schwester
abi|der ältere Bruder
oğul|der Sohn
kız|die Tochter / das Mädchen
dede|der Großvater
büyükanne|die Großmutter`,
  sents:`Bu benim ailem.|Das ist meine Familie.|Possessiv|Besitz zeigt man mit Endungen: aile → ailem (meine Familie).
Annemin adı Ayşe.|Meine Mutter heißt Ayşe.|Possessiv|Wörtlich: „Meiner Mutter ihr Name ist Ayşe.“
Bir abim ve bir ablam var.|Ich habe einen älteren Bruder und eine ältere Schwester.|var|„Haben“ heißt: … -m var (wörtlich: es gibt mein …).
Çocukların var mı?|Hast du Kinder?|Fragen|„mı“ macht aus einem Satz eine Ja/Nein-Frage.
Annem ve babam İzmir'de oturuyorlar.|Meine Eltern wohnen in İzmir.|Lokativ|-de / -da = in.
Kardeşim çok tatlı.|Mein Geschwisterchen ist sehr süß.|Possessiv|„kardeş“ heißt Bruder oder Schwester – meist das jüngere.`},
 {id:"u8", e:"☀️", title:"Alltag", pt:"Günlük hayat", desc:"Aufstehen, arbeiten, essen, schlafen.",
  words:`kalkmak|aufstehen
duş almak|duschen
kahvaltı yapmak|frühstücken
çalışmak|arbeiten
öğle yemeği|das Mittagessen
akşam yemeği|das Abendessen
yatmak|ins Bett gehen
erken|früh
geç|spät
her gün|jeden Tag`,
  sents:`Saat yedide kalkarım.|Ich stehe um sieben auf.|Geniş zaman|Für Gewohnheiten nimmt man die -r-Zeit (Aorist): kalkarım.
Kahvaltıda çay içerim.|Zum Frühstück trinke ich Tee.|Kultur|Tee gehört in der Türkei zu jedem Frühstück.
Dokuzdan beşe kadar çalışırım.|Ich arbeite von neun bis fünf.|Kasus|-den … -e kadar = von … bis.
Öğle yemeğini saat birde yerim.|Ich esse um eins zu Mittag.|Uhrzeit|„saat birde“ = um ein Uhr.
Akşam yemeğini ailemle yerim.|Ich esse mit meiner Familie zu Abend.|-le|-le / -la = mit.
Her gün geç yatarım.|Ich gehe jeden Tag spät ins Bett.|Geniş zaman|`},
 {id:"u9", e:"🕐", title:"Uhrzeiten", pt:"Saat kaç?", desc:"Wie spät ist es? Halb, Viertel, Mittag.",
  words:`saat kaç?|wie spät ist es?
saat bir|es ist ein Uhr
saat iki|es ist zwei Uhr
buçuk|halb (nach der vollen Stunde)
çeyrek geçiyor|Viertel nach
çeyrek var|Viertel vor
öğle|der Mittag
gece yarısı|die Mitternacht
sabah|der Morgen
akşam|der Abend`,
  sents:`Saat kaç?|Wie spät ist es?|Uhrzeit|
Saat üç buçuk.|Es ist halb vier.|Uhrzeit|„üç buçuk“ = 3:30, auf Deutsch also halb VIER.
Saat biri çeyrek geçiyor.|Es ist Viertel nach eins.|Uhrzeit|Bei „geçiyor“ steht die Stunde im Akkusativ: bir → biri.
Saat sekize çeyrek var.|Es ist Viertel vor acht.|Uhrzeit|Bei „var“ steht die Stunde im Dativ: sekiz → sekize.
Ders saat onda başlıyor.|Der Unterricht beginnt um zehn.|Uhrzeit|„um“ = Lokativ: on → onda.
Sabahları çalışıyorum.|Ich arbeite morgens.|Tageszeiten|sabahları = (immer) morgens.`},
 {id:"u10", e:"🍽️", title:"Essen und Trinken", pt:"Yemek ve içmek", desc:"Bestellen, mögen, nicht mögen.",
  words:`su|das Wasser
şarap|der Wein
bira|das Bier
ekmek|das Brot
et|das Fleisch
balık|der Fisch
meyve|das Obst
sebze|das Gemüse
severim|ich mag
hesap|die Rechnung`,
  sents:`Kahveyi severim.|Ich mag Kaffee.|sevmek|Das Gemochte steht im Akkusativ: kahve → kahveyi.
Balık sevmem.|Ich mag keinen Fisch.|Verneinung|Verneinung der -r-Zeit: severim → sevmem.
Bir bira lütfen.|Ein Bier, bitte.|Höflichkeit|
Ne alırsınız?|Was nehmen Sie?|Restaurant|
Afiyet olsun!|Guten Appetit!|Kultur|
Hesap lütfen.|Die Rechnung, bitte.|Restaurant|`},
 {id:"u11", e:"🛒", title:"Einkaufen", pt:"Alışveriş", desc:"Preise, bezahlen, Tüte bitte.",
  words:`dükkan|der Laden
market|der Supermarkt
satın almak|kaufen
ödemek|bezahlen
pahalı|teuer
ucuz|billig
poşet|die Tüte
kartla|mit Karte
nakit|bar
ne kadar?|wie viel kostet das?`,
  sents:`Bu tişört ne kadar?|Wie viel kostet dieses T-Shirt?|Demonstrativ|bu = dies (hier), şu = das (da), o = jenes.
Çok pahalı.|Das ist sehr teuer.|Adjektive|
Kartla ödeyebilir miyim?|Kann ich mit Karte zahlen?|können|-ebil- = können: ödemek → ödeyebilmek.
Bir kilo domates istiyorum.|Ich möchte ein Kilo Tomaten.|Mengen|Nach Zahlen steht kein Plural: iki domates.
Poşet ister misiniz?|Möchten Sie eine Tüte?|Anrede|
Markete gidiyorum.|Ich gehe in den Supermarkt.|Dativ|Richtung = Dativ: market → markete.`},
 {id:"u12", e:"🏠", title:"Wohnen", pt:"Ev", desc:"Zimmer, Miete und Nachbarn.",
  words:`ev|das Haus
daire|die Wohnung
oda|das Zimmer
mutfak|die Küche
banyo|das Bad
salon|das Wohnzimmer
kira|die Miete
komşu|der Nachbar
büyük|groß
küçük|klein`,
  sents:`Küçük bir dairede oturuyorum.|Ich wohne in einer kleinen Wohnung.|Lokativ|Das Adjektiv steht vor „bir“: küçük bir daire.
Dairenin iki odası var.|Die Wohnung hat zwei Zimmer.|var|
Mutfak çok büyük.|Die Küche ist sehr groß.|Adjektive|Ein „ist“ braucht man hier nicht.
Banyo koridorun sonunda.|Das Bad ist am Ende des Flurs.|Ort|
Kira ayda on beş bin lira.|Die Miete beträgt fünfzehntausend Lira im Monat.|Zahlen|
Komşum çok nazik.|Mein Nachbar ist sehr freundlich.|Possessiv|`}
]}, `7|Kardeşin var mı?|Hast du Geschwister?|Evet, bir ablam var.|Saat üç.|Şarap severim.
8|Saat kaçta kalkıyorsun?|Wann stehst du auf?|Yedide.|Kartla.|Annem.
9|Saat kaç?|Wie spät ist es?|Beş buçuk.|Beş lira.|Mutfakta.
10|Ne içmek istersin?|Was möchtest du trinken?|Su, lütfen.|Saat sekizde.|Kardeşim.
11|Nasıl ödemek istersiniz?|Wie möchten Sie bezahlen?|Kartla.|Geç kalkarım.|İki çocuğum var.
12|Dairede kaç oda var?|Wie viele Zimmer hat die Wohnung?|Üç.|Saat dokuzda.|Sevmiyorum.`);

/* ---------- Deutsch (Hilfssprachen: en|tr|pl|es|fr|it|pt) ---------- */
const D = LEL_PACKS.de; if(!D || !D._fmt) return;
const {words, sents, dialogs, mean} = D._fmt;
const U7W = `die Familie|the family|aile|rodzina|la familia|la famille|la famiglia|a família
der Vater|the father|baba|ojciec|el padre|le père|il padre|o pai
die Mutter|the mother|anne|matka|la madre|la mère|la madre|a mãe
die Eltern|the parents|anne baba|rodzice|los padres|les parents|i genitori|os pais
der Bruder|the brother|erkek kardeş|brat|el hermano|le frère|il fratello|o irmão
die Schwester|the sister|kız kardeş|siostra|la hermana|la sœur|la sorella|a irmã
der Sohn|the son|oğul|syn|el hijo|le fils|il figlio|o filho
die Tochter|the daughter|kız|córka|la hija|la fille|la figlia|a filha
der Großvater|the grandfather|dede|dziadek|el abuelo|le grand-père|il nonno|o avô
die Großmutter|the grandmother|büyükanne|babcia|la abuela|la grand-mère|la nonna|a avó`;
const U7S = `Das ist meine Familie.|This is my family.|Bu benim ailem.|To jest moja rodzina.|Esta es mi familia.|Voici ma famille.|Questa è la mia famiglia.|Esta é a minha família.|Possessiv|mein / meine follows the gender of the noun: mein Vater, meine Mutter.
Meine Mutter heißt Anna.|My mother's name is Anna.|Annemin adı Anna.|Moja mama ma na imię Anna.|Mi madre se llama Anna.|Ma mère s'appelle Anna.|Mia madre si chiama Anna.|A minha mãe chama-se Anna.|Possessiv|
Ich habe einen Bruder und eine Schwester.|I have a brother and a sister.|Bir erkek kardeşim ve bir kız kardeşim var.|Mam brata i siostrę.|Tengo un hermano y una hermana.|J'ai un frère et une sœur.|Ho un fratello e una sorella.|Tenho um irmão e uma irmã.|Akkusativ|After „haben“: ein Bruder → einen Bruder (masculine accusative).
Hast du Kinder?|Do you have children?|Çocukların var mı?|Masz dzieci?|¿Tienes hijos?|Tu as des enfants ?|Hai figli?|Tens filhos?|Fragen|In yes/no questions the verb comes first.
Meine Eltern wohnen in Hamburg.|My parents live in Hamburg.|Annem ve babam Hamburg'da oturuyorlar.|Moi rodzice mieszkają w Hamburgu.|Mis padres viven en Hamburgo.|Mes parents habitent à Hambourg.|I miei genitori abitano ad Amburgo.|Os meus pais moram em Hamburgo.|Possessiv|Plural: meine for all genders.
Sein Bruder ist sehr nett.|His brother is very nice.|Onun erkek kardeşi çok iyi.|Jego brat jest bardzo miły.|Su hermano es muy simpático.|Son frère est très sympa.|Suo fratello è molto simpatico.|O irmão dele é muito simpático.|Possessiv|sein = his, ihr = her.`;
const U8W = `aufstehen|to get up|kalkmak|wstawać|levantarse|se lever|alzarsi|levantar-se
duschen|to shower|duş almak|brać prysznic|ducharse|se doucher|fare la doccia|tomar banho
frühstücken|to have breakfast|kahvaltı yapmak|jeść śniadanie|desayunar|prendre le petit-déjeuner|fare colazione|tomar o pequeno-almoço
arbeiten|to work|çalışmak|pracować|trabajar|travailler|lavorare|trabalhar
das Mittagessen|lunch|öğle yemeği|obiad|la comida|le déjeuner|il pranzo|o almoço
das Abendessen|dinner|akşam yemeği|kolacja|la cena|le dîner|la cena|o jantar
ins Bett gehen|to go to bed|yatmak|iść spać|acostarse|se coucher|andare a letto|ir para a cama
früh|early|erken|wcześnie|temprano|tôt|presto|cedo
spät|late|geç|późno|tarde|tard|tardi|tarde
jeden Tag|every day|her gün|codziennie|todos los días|tous les jours|ogni giorno|todos os dias`;
const U8S = `Ich stehe um sieben Uhr auf.|I get up at seven.|Saat yedide kalkarım.|Wstaję o siódmej.|Me levanto a las siete.|Je me lève à sept heures.|Mi alzo alle sette.|Levanto-me às sete.|Trennbare Verben|„aufstehen“ is separable: the prefix „auf“ goes to the end.
Ich frühstücke um halb acht.|I have breakfast at half past seven.|Yedi buçukta kahvaltı yaparım.|Jem śniadanie o wpół do ósmej.|Desayuno a las siete y media.|Je prends le petit-déjeuner à sept heures et demie.|Faccio colazione alle sette e mezza.|Tomo o pequeno-almoço às sete e meia.|Uhrzeit|„halb acht“ = 7:30 – half TO eight!
Ich arbeite von neun bis fünf.|I work from nine to five.|Dokuzdan beşe kadar çalışırım.|Pracuję od dziewiątej do piątej.|Trabajo de nueve a cinco.|Je travaille de neuf heures à dix-sept heures.|Lavoro dalle nove alle cinque.|Trabalho das nove às cinco.|Präpositionen|von … bis … = from … to …
Mittags esse ich in der Kantine.|At lunchtime I eat in the canteen.|Öğlen kantinde yerim.|W południe jem w stołówce.|A mediodía como en el comedor.|À midi, je mange à la cantine.|A mezzogiorno mangio in mensa.|Ao meio-dia como na cantina.|Satzbau|If the sentence starts with a time, the verb still comes second: Mittags esse ich …
Wir essen um sieben zu Abend.|We have dinner at seven.|Akşam yemeğini yedide yeriz.|Jemy kolację o siódmej.|Cenamos a las siete.|Nous dînons à sept heures.|Ceniamo alle sette.|Jantamos às sete.|Alltag|„zu Abend essen“ = to have dinner.
Ich gehe spät ins Bett.|I go to bed late.|Geç yatarım.|Późno chodzę spać.|Me acuesto tarde.|Je me couche tard.|Vado a letto tardi.|Vou para a cama tarde.|Alltag|`;
const U9W = `Wie spät ist es?|what time is it?|saat kaç?|która godzina?|¿qué hora es?|quelle heure est-il ?|che ore sono?|que horas são?
es ist ein Uhr|it's one o'clock|saat bir|jest pierwsza|es la una|il est une heure|è l'una|é uma hora
halb|half (to the next hour)|buçuk (bir önceki saatin)|wpół do|y media (de la hora anterior)|et demie (de l'heure précédente)|e mezza (dell'ora precedente)|e meia (da hora anterior)
Viertel nach|quarter past|çeyrek geçiyor|kwadrans po|y cuarto|et quart|e un quarto|e um quarto
Viertel vor|quarter to|çeyrek var|za kwadrans|menos cuarto|moins le quart|meno un quarto|menos um quarto
der Mittag|midday|öğle|południe|el mediodía|midi|mezzogiorno|o meio-dia
die Mitternacht|midnight|gece yarısı|północ|la medianoche|minuit|mezzanotte|a meia-noite
morgens|in the morning|sabahları|rano|por la mañana|le matin|di mattina|de manhã
abends|in the evening|akşamları|wieczorem|por la noche|le soir|di sera|à noite
die Uhr|the clock / o'clock|saat|zegar / godzina|el reloj / la hora|l'horloge / l'heure|l'orologio / l'ora|o relógio / a hora`;
const U9S = `Wie spät ist es?|What time is it?|Saat kaç?|Która godzina?|¿Qué hora es?|Quelle heure est-il ?|Che ore sono?|Que horas são?|Uhrzeit|Also common: Wie viel Uhr ist es?
Es ist halb vier.|It's half past three.|Saat üç buçuk.|Jest wpół do czwartej.|Son las tres y media.|Il est trois heures et demie.|Sono le tre e mezza.|São três e meia.|Uhrzeit|Careful: „halb vier“ = 3:30 (half way TO four).
Es ist Viertel nach eins.|It's quarter past one.|Saat biri çeyrek geçiyor.|Jest kwadrans po pierwszej.|Es la una y cuarto.|Il est une heure et quart.|È l'una e un quarto.|É uma e um quarto.|Uhrzeit|
Es ist Viertel vor acht.|It's quarter to eight.|Saat sekize çeyrek var.|Jest za kwadrans ósma.|Son las ocho menos cuarto.|Il est huit heures moins le quart.|Sono le otto meno un quarto.|São oito menos um quarto.|Uhrzeit|
Der Kurs beginnt um zehn Uhr.|The course starts at ten.|Kurs saat onda başlıyor.|Kurs zaczyna się o dziesiątej.|El curso empieza a las diez.|Le cours commence à dix heures.|Il corso comincia alle dieci.|O curso começa às dez.|Uhrzeit|„um“ + time = at.
Ich arbeite morgens.|I work in the mornings.|Sabahları çalışırım.|Pracuję rano.|Trabajo por la mañana.|Je travaille le matin.|Lavoro di mattina.|Trabalho de manhã.|Tageszeiten|morgens, mittags, abends = regularly in the morning, at noon, in the evening.`;
const U10W = `das Wasser|the water|su|woda|el agua|l'eau|l'acqua|a água
der Wein|the wine|şarap|wino|el vino|le vin|il vino|o vinho
das Bier|the beer|bira|piwo|la cerveza|la bière|la birra|a cerveja
das Brot|the bread|ekmek|chleb|el pan|le pain|il pane|o pão
das Fleisch|the meat|et|mięso|la carne|la viande|la carne|a carne
der Fisch|the fish|balık|ryba|el pescado|le poisson|il pesce|o peixe
das Obst|the fruit|meyve|owoce|la fruta|les fruits|la frutta|a fruta
das Gemüse|the vegetables|sebze|warzywa|la verdura|les légumes|la verdura|os legumes
ich mag|I like|severim|lubię|me gusta|j'aime|mi piace|gosto de
die Rechnung|the bill|hesap|rachunek|la cuenta|l'addition|il conto|a conta`;
const U10S = `Ich mag Kaffee.|I like coffee.|Kahveyi severim.|Lubię kawę.|Me gusta el café.|J'aime le café.|Mi piace il caffè.|Gosto de café.|mögen|No article for things in general.
Ich esse keinen Fisch.|I don't eat fish.|Balık yemem.|Nie jem ryby.|No como pescado.|Je ne mange pas de poisson.|Non mangio pesce.|Não como peixe.|Verneinung|„kein“ negates nouns: ein Fisch → keinen Fisch.
Ich hätte gern ein Bier.|I'd like a beer.|Bir bira alabilir miyim?|Poproszę piwo.|Quería una cerveza.|Je voudrais une bière.|Vorrei una birra.|Queria uma cerveja.|Höflichkeit|„Ich hätte gern …“ is the polite way to order.
Was möchten Sie trinken?|What would you like to drink?|Ne içmek istersiniz?|Co pan chce do picia?|¿Qué quiere beber?|Qu'est-ce que vous voulez boire ?|Cosa vuole bere?|O que deseja beber?|Restaurant|
Guten Appetit!|Enjoy your meal!|Afiyet olsun!|Smacznego!|¡Buen provecho!|Bon appétit !|Buon appetito!|Bom apetite!|Kultur|
Die Rechnung, bitte.|The bill, please.|Hesap lütfen.|Poproszę rachunek.|La cuenta, por favor.|L'addition, s'il vous plaît.|Il conto, per favore.|A conta, por favor.|Restaurant|Also common: Zahlen, bitte!`;
const U11W = `der Laden|the shop|dükkan|sklep|la tienda|le magasin|il negozio|a loja
der Supermarkt|the supermarket|market|supermarket|el supermercado|le supermarché|il supermercato|o supermercado
kaufen|to buy|satın almak|kupować|comprar|acheter|comprare|comprar
bezahlen|to pay|ödemek|płacić|pagar|payer|pagare|pagar
teuer|expensive|pahalı|drogi|caro|cher|caro|caro
billig|cheap|ucuz|tani|barato|pas cher|economico|barato
die Tüte|the bag|poşet|torba|la bolsa|le sac|la busta|o saco
mit Karte|by card|kartla|kartą|con tarjeta|par carte|con la carta|com cartão
bar|in cash|nakit|gotówką|en efectivo|en espèces|in contanti|em dinheiro
Was kostet das?|how much is it?|ne kadar?|ile to kosztuje?|¿cuánto cuesta?|ça coûte combien ?|quanto costa?|quanto custa?`;
const U11S = `Was kostet das T-Shirt?|How much is the T-shirt?|Tişört ne kadar?|Ile kosztuje ta koszulka?|¿Cuánto cuesta la camiseta?|Combien coûte le t-shirt ?|Quanto costa la maglietta?|Quanto custa a t-shirt?|Fragen|
Das ist zu teuer.|That's too expensive.|Bu çok pahalı.|To za drogie.|Es demasiado caro.|C'est trop cher.|È troppo caro.|É demasiado caro.|Adjektive|
Kann ich mit Karte zahlen?|Can I pay by card?|Kartla ödeyebilir miyim?|Czy mogę zapłacić kartą?|¿Puedo pagar con tarjeta?|Je peux payer par carte ?|Posso pagare con la carta?|Posso pagar com cartão?|Modalverben|With „können“ the main verb goes to the end as an infinitive.
Ich nehme ein Kilo Tomaten.|I'll take a kilo of tomatoes.|Bir kilo domates alıyorum.|Wezmę kilo pomidorów.|Me llevo un kilo de tomates.|Je prends un kilo de tomates.|Prendo un chilo di pomodori.|Levo um quilo de tomates.|Mengen|No „of“ after amounts: ein Kilo Tomaten.
Brauchen Sie eine Tüte?|Do you need a bag?|Poşet ister misiniz?|Czy potrzebuje pan torby?|¿Necesita una bolsa?|Vous avez besoin d'un sac ?|Le serve una busta?|Precisa de um saco?|Anrede|
Ich gehe in den Supermarkt.|I'm going to the supermarket.|Markete gidiyorum.|Idę do supermarketu.|Voy al supermercado.|Je vais au supermarché.|Vado al supermercato.|Vou ao supermercado.|Präpositionen|Direction: in + accusative (in den Supermarkt). Location: in + dative (im Supermarkt).`;
const U12W = `das Haus|the house|ev|dom|la casa|la maison|la casa|a casa
die Wohnung|the flat|daire|mieszkanie|el piso|l'appartement|l'appartamento|o apartamento
das Zimmer|the room|oda|pokój|la habitación|la pièce|la stanza|o quarto
die Küche|the kitchen|mutfak|kuchnia|la cocina|la cuisine|la cucina|a cozinha
das Bad|the bathroom|banyo|łazienka|el baño|la salle de bains|il bagno|a casa de banho
das Wohnzimmer|the living room|salon|salon|el salón|le salon|il soggiorno|a sala
die Miete|the rent|kira|czynsz|el alquiler|le loyer|l'affitto|a renda
der Nachbar|the neighbour|komşu|sąsiad|el vecino|le voisin|il vicino|o vizinho
groß|big|büyük|duży|grande|grand|grande|grande
klein|small|küçük|mały|pequeño|petit|piccolo|pequeno`;
const U12S = `Ich wohne in einer kleinen Wohnung.|I live in a small flat.|Küçük bir dairede oturuyorum.|Mieszkam w małym mieszkaniu.|Vivo en un piso pequeño.|J'habite dans un petit appartement.|Abito in un piccolo appartamento.|Moro num apartamento pequeno.|Dativ|Location: in + dative – eine Wohnung → in einer Wohnung.
Die Wohnung hat drei Zimmer.|The flat has three rooms.|Dairenin üç odası var.|Mieszkanie ma trzy pokoje.|El piso tiene tres habitaciones.|L'appartement a trois pièces.|L'appartamento ha tre stanze.|O apartamento tem três divisões.|haben|Germans count rooms without kitchen and bathroom.
Die Küche ist sehr groß.|The kitchen is very big.|Mutfak çok büyük.|Kuchnia jest bardzo duża.|La cocina es muy grande.|La cuisine est très grande.|La cucina è molto grande.|A cozinha é muito grande.|Adjektive|After „sein“ the adjective doesn't change.
Das Bad ist neben der Küche.|The bathroom is next to the kitchen.|Banyo mutfağın yanında.|Łazienka jest obok kuchni.|El baño está al lado de la cocina.|La salle de bains est à côté de la cuisine.|Il bagno è accanto alla cucina.|A casa de banho fica ao lado da cozinha.|Präpositionen|neben + dative: die Küche → neben der Küche.
Die Miete kostet 900 Euro warm.|The rent is 900 euros including heating.|Kira ısınma dahil 900 euro.|Czynsz wynosi 900 euro z ogrzewaniem.|El alquiler cuesta 900 euros con calefacción.|Le loyer est de 900 euros charges comprises.|L'affitto è di 900 euro spese incluse.|A renda custa 900 euros com aquecimento.|Kultur|„warm“ = including heating and service charges, „kalt“ = without.
Mein Nachbar ist sehr freundlich.|My neighbour is very friendly.|Komşum çok nazik.|Mój sąsiad jest bardzo miły.|Mi vecino es muy amable.|Mon voisin est très gentil.|Il mio vicino è molto gentile.|O meu vizinho é muito simpático.|Adjektive|`;
const DLG2 = `7|Hast du Geschwister?|Do you have siblings?|Kardeşin var mı?|Masz rodzeństwo?|¿Tienes hermanos?|Tu as des frères et sœurs ?|Hai fratelli?|Tens irmãos?|Ja, ich habe eine Schwester.|Es ist drei Uhr.|Ich mag Wein.
8|Wann stehst du auf?|When do you get up?|Ne zaman kalkıyorsun?|Kiedy wstajesz?|¿Cuándo te levantas?|Tu te lèves quand ?|Quando ti alzi?|Quando te levantas?|Um sieben Uhr.|Mit Karte.|Meine Mutter.
9|Wie spät ist es?|What time is it?|Saat kaç?|Która godzina?|¿Qué hora es?|Quelle heure est-il ?|Che ore sono?|Que horas são?|Es ist halb sechs.|Fünf Euro.|In der Küche.
10|Was möchtest du trinken?|What would you like to drink?|Ne içmek istersin?|Co chcesz do picia?|¿Qué quieres beber?|Tu veux boire quoi ?|Cosa vuoi bere?|O que queres beber?|Wasser, bitte.|Um acht Uhr.|Mein Bruder.
11|Wie möchten Sie bezahlen?|How would you like to pay?|Nasıl ödemek istersiniz?|Jak chce pan zapłacić?|¿Cómo quiere pagar?|Vous payez comment ?|Come vuole pagare?|Como deseja pagar?|Mit Karte, bitte.|Ich stehe spät auf.|Ich habe zwei Kinder.
12|Wie viele Zimmer hat die Wohnung?|How many rooms does the flat have?|Dairede kaç oda var?|Ile pokoi ma mieszkanie?|¿Cuántas habitaciones tiene el piso?|L'appartement a combien de pièces ?|Quante stanze ha l'appartamento?|Quantas divisões tem o apartamento?|Drei.|Um neun Uhr.|Das mag ich nicht.`;
const U = (id, e, title, pt, d, w, s) => ({id, e, title, pt, desc:mean(d), words:words(w), sents:sents(s)});
add("de", {id:"s2", title:"Mein Alltag", pt:"Mein Alltag", level:"A1–A2", color:C, units:[
  U("u7","👨‍👩‍👧","Familie","Meine Familie",["Parents, siblings and my, your, his.","Anne baba, kardeşler ve iyelik.","Rodzice, rodzeństwo i mój, twój, jego.","Padres, hermanos y mi, tu, su.","Parents, frères et sœurs, mon, ton, son.","Genitori, fratelli e mio, tuo, suo.","Pais, irmãos e meu, teu, seu."], U7W, U7S),
  U("u8","☀️","Alltag","Mein Tag",["Getting up, working, eating, sleeping.","Kalkmak, çalışmak, yemek, uyumak.","Wstawanie, praca, jedzenie, sen.","Levantarse, trabajar, comer, dormir.","Se lever, travailler, manger, dormir.","Alzarsi, lavorare, mangiare, dormire.","Levantar, trabalhar, comer, dormir."], U8W, U8S),
  U("u9","🕐","Uhrzeiten","Wie spät ist es?",["Telling the time – watch out for „halb“!","Saati söylemek – „halb“ kelimesine dikkat!","Godziny – uwaga na „halb“!","La hora – ¡cuidado con „halb“!","L'heure – attention à « halb » !","L'ora – attenzione a „halb“!","As horas – cuidado com „halb“!"], U9W, U9S),
  U("u10","🍽️","Essen und Trinken","Guten Appetit!",["Ordering, likes and dislikes.","Sipariş vermek, sevmek, sevmemek.","Zamawianie, lubię, nie lubię.","Pedir, gustos y disgustos.","Commander, aimer, ne pas aimer.","Ordinare, piacere, non piacere.","Pedir, gostar, não gostar."], U10W, U10S),
  U("u11","🛒","Einkaufen","Was kostet das?",["Prices, paying, a bag please.","Fiyatlar, ödemek, poşet lütfen.","Ceny, płacenie, torba proszę.","Precios, pagar, una bolsa por favor.","Prix, payer, un sac s'il vous plaît.","Prezzi, pagare, una busta per favore.","Preços, pagar, um saco por favor."], U11W, U11S),
  U("u12","🏠","Wohnen","Meine Wohnung",["Rooms, rent and neighbours.","Odalar, kira ve komşular.","Pokoje, czynsz i sąsiedzi.","Habitaciones, alquiler y vecinos.","Pièces, loyer et voisins.","Stanze, affitto e vicini.","Divisões, renda e vizinhos."], U12W, U12S)
]}, dialogs(DLG2));
})();
