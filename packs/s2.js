/* ===== Abschnitt 2 „Mein Alltag“ (A1–A2) für es, fr, en, it ===== */
(function(){
const add = (code, sec, dlg) => {
  const P = LEL_PACKS[code]; if(!P) return;
  P.PATH_SECTIONS.push(sec);
  P.DIALOGS = P.DIALOGS.trim() + "\n" + dlg.trim();
  P.LANG.status = "A1–A2 · Abschnitt 2 von 6";
};
const C = "#16A974";

/* ---------- Spanisch ---------- */
add("es", {id:"s2", title:"Mein Alltag", pt:"Mi día a día", level:"A1–A2", color:C, units:[
 {id:"u7", e:"👨‍👩‍👧", title:"Familie", pt:"La familia", desc:"Eltern, Geschwister und mein, dein, sein.",
  words:`la familia|die Familie
el padre|der Vater
la madre|die Mutter
los padres|die Eltern
el hermano|der Bruder
la hermana|die Schwester
el hijo|der Sohn
la hija|die Tochter
el abuelo|der Großvater
la abuela|die Großmutter`,
  sents:`Esta es mi familia.|Das ist meine Familie.|Possessiv|mi, tu, su stehen vor dem Nomen – ohne Artikel.
Mi madre se llama Ana.|Meine Mutter heißt Ana.|Possessiv|
Tengo un hermano y una hermana.|Ich habe einen Bruder und eine Schwester.|tener|
¿Tienes hijos?|Hast du Kinder?|Fragen|„hijos“ heißt Söhne oder allgemein Kinder.
Mis padres viven en Sevilla.|Meine Eltern wohnen in Sevilla.|Possessiv|Im Plural: mis, tus, sus.
Su hermano es muy simpático.|Sein / Ihr Bruder ist sehr sympathisch.|Possessiv|„su“ kann sein, ihr oder Ihr bedeuten.`},
 {id:"u8", e:"☀️", title:"Alltag", pt:"La rutina", desc:"Aufstehen, arbeiten, essen, schlafen.",
  words:`levantarse|aufstehen
ducharse|duschen
desayunar|frühstücken
trabajar|arbeiten
comer|(zu Mittag) essen
cenar|zu Abend essen
acostarse|ins Bett gehen
temprano|früh
tarde|spät
todos los días|jeden Tag`,
  sents:`Me levanto a las siete.|Ich stehe um sieben auf.|Reflexive Verben|levantarse: me levanto, te levantas, se levanta …
Desayuno café con tostadas.|Ich frühstücke Kaffee mit Toast.|Verben auf -ar|
Trabajo de nueve a cinco.|Ich arbeite von neun bis fünf.|Präpositionen|de … a … = von … bis …
En España se come tarde.|In Spanien isst man spät.|Kultur|Mittagessen oft gegen 14 Uhr, Abendessen gegen 21 Uhr.
Ceno con mi familia.|Ich esse mit meiner Familie zu Abend.|Verben auf -ar|
Me acuesto a las once.|Ich gehe um elf ins Bett.|Reflexive Verben|acostarse: o wird zu ue – me acuesto.`},
 {id:"u9", e:"🕐", title:"Uhrzeiten", pt:"La hora", desc:"Wie spät ist es? Halb, Viertel, Mittag.",
  words:`¿qué hora es?|wie spät ist es?
es la una|es ist ein Uhr
son las dos|es ist zwei Uhr
y media|halb (nach der vollen Stunde)
y cuarto|Viertel nach
menos cuarto|Viertel vor
el mediodía|der Mittag
la medianoche|die Mitternacht
por la mañana|morgens / vormittags
por la noche|abends / nachts`,
  sents:`¿Qué hora es?|Wie spät ist es?|Uhrzeit|
Son las tres y media.|Es ist halb vier.|Uhrzeit|Achtung: „las tres y media“ = 3:30, auf Deutsch also halb VIER.
Es la una y cuarto.|Es ist Viertel nach eins.|Uhrzeit|Nur bei eins steht „es la“, sonst „son las“.
Son las ocho menos cuarto.|Es ist Viertel vor acht.|Uhrzeit|
La clase empieza a las diez.|Der Unterricht beginnt um zehn.|Uhrzeit|„um“ heißt „a las“.
Trabajo por la mañana.|Ich arbeite vormittags.|Tageszeiten|`},
 {id:"u10", e:"🍽️", title:"Essen und Trinken", pt:"Comer y beber", desc:"Bestellen, mögen, nicht mögen.",
  words:`el agua|das Wasser
el vino|der Wein
la cerveza|das Bier
el pan|das Brot
la carne|das Fleisch
el pescado|der Fisch
la fruta|das Obst
la verdura|das Gemüse
me gusta|mir gefällt / ich mag
la cuenta|die Rechnung`,
  sents:`Me gusta el café.|Ich mag Kaffee.|gustar|Wörtlich: „Mir gefällt der Kaffee.“
Me gustan las tapas.|Ich mag Tapas.|gustar|Bei mehreren Dingen: gustan.
No me gusta el pescado.|Ich mag keinen Fisch.|gustar|
Quería una cerveza, por favor.|Ich hätte gern ein Bier, bitte.|Höflichkeit|„quería“ klingt höflicher als „quiero“.
¿Qué vas a tomar?|Was nimmst du?|Restaurant|„tomar“ heißt hier essen oder trinken.
La cuenta, por favor.|Die Rechnung, bitte.|Restaurant|`},
 {id:"u11", e:"🛒", title:"Einkaufen", pt:"De compras", desc:"Preise, bezahlen, Tüte bitte.",
  words:`la tienda|der Laden
el supermercado|der Supermarkt
comprar|kaufen
pagar|bezahlen
caro|teuer
barato|billig
la bolsa|die Tüte
con tarjeta|mit Karte
en efectivo|bar
¿cuánto cuesta?|wie viel kostet das?`,
  sents:`¿Cuánto cuesta esta camiseta?|Wie viel kostet dieses T-Shirt?|Demonstrativ|este, esta, estos, estas = dieser, diese.
Es demasiado caro.|Das ist zu teuer.|Adjektive|
¿Puedo pagar con tarjeta?|Kann ich mit Karte zahlen?|poder|poder: o wird zu ue – puedo.
Quiero dos kilos de tomates.|Ich möchte zwei Kilo Tomaten.|Mengen|
¿Necesita una bolsa?|Brauchen Sie eine Tüte?|Anrede|
Voy al supermercado.|Ich gehe in den Supermarkt.|Präpositionen|a + el = al.`},
 {id:"u12", e:"🏠", title:"Wohnen", pt:"La casa", desc:"Zimmer, Miete und Nachbarn.",
  words:`la casa|das Haus
el piso|die Wohnung (in Spanien)
la habitación|das Zimmer
la cocina|die Küche
el baño|das Bad
el salón|das Wohnzimmer
el alquiler|die Miete
el vecino|der Nachbar
grande|groß
pequeño|klein`,
  sents:`Vivo en un piso pequeño.|Ich wohne in einer kleinen Wohnung.|Adjektive|Adjektive stehen meist hinter dem Nomen.
El piso tiene dos habitaciones.|Die Wohnung hat zwei Zimmer.|tener|
La cocina es muy grande.|Die Küche ist sehr groß.|ser/estar|
El baño está al fondo.|Das Bad ist hinten.|ser/estar|Wo etwas liegt, sagt man mit „estar“.
El alquiler es de 900 euros.|Die Miete beträgt 900 Euro.|Zahlen|
Mi vecino es muy amable.|Mein Nachbar ist sehr freundlich.|Adjektive|`}
]}, `7|¿Tienes hermanos?|Hast du Geschwister?|Sí, tengo una hermana.|Son las tres.|Me gusta el vino.
8|¿A qué hora te levantas?|Wann stehst du auf?|A las siete.|Con tarjeta.|Mi madre.
9|¿Qué hora es?|Wie spät ist es?|Son las cinco y media.|Cinco euros.|En la cocina.
10|¿Qué quieres beber?|Was möchtest du trinken?|Agua, por favor.|A las ocho.|Mi hermano.
11|¿Cómo quiere pagar?|Wie möchten Sie bezahlen?|Con tarjeta.|Me levanto tarde.|Tengo dos hijos.
12|¿Cuántas habitaciones tiene el piso?|Wie viele Zimmer hat die Wohnung?|Tres.|A las nueve.|No me gusta.`);

/* ---------- Französisch ---------- */
add("fr", {id:"s2", title:"Mein Alltag", pt:"Mon quotidien", level:"A1–A2", color:C, units:[
 {id:"u7", e:"👨‍👩‍👧", title:"Familie", pt:"La famille", desc:"Eltern, Geschwister und mein, dein, sein.",
  words:`la famille|die Familie
le père|der Vater
la mère|die Mutter
les parents|die Eltern
le frère|der Bruder
la sœur|die Schwester
le fils|der Sohn
la fille|die Tochter / das Mädchen
le grand-père|der Großvater
la grand-mère|die Großmutter`,
  sents:`Voici ma famille.|Das ist meine Familie.|Possessiv|mon, ma, mes richten sich nach dem Nomen.
Ma mère s'appelle Anne.|Meine Mutter heißt Anne.|Possessiv|
J'ai un frère et une sœur.|Ich habe einen Bruder und eine Schwester.|avoir|
Tu as des enfants ?|Hast du Kinder?|Fragen|
Mes parents habitent à Lyon.|Meine Eltern wohnen in Lyon.|Possessiv|
Son frère est très sympa.|Sein / Ihr Bruder ist sehr nett.|Possessiv|„son“ richtet sich nach „frère“ – es kann sein oder ihr heißen.`},
 {id:"u8", e:"☀️", title:"Alltag", pt:"La routine", desc:"Aufstehen, arbeiten, essen, schlafen.",
  words:`se lever|aufstehen
se doucher|duschen
prendre le petit-déjeuner|frühstücken
travailler|arbeiten
déjeuner|zu Mittag essen
dîner|zu Abend essen
se coucher|ins Bett gehen
tôt|früh
tard|spät
tous les jours|jeden Tag`,
  sents:`Je me lève à sept heures.|Ich stehe um sieben Uhr auf.|Reflexive Verben|se lever: je me lève, tu te lèves …
Je prends un café le matin.|Morgens trinke ich einen Kaffee.|prendre|
Je travaille de neuf heures à dix-sept heures.|Ich arbeite von neun bis siebzehn Uhr.|Uhrzeit|In Frankreich nennt man oft die 24-Stunden-Zeit.
On déjeune à midi.|Wir essen mittags.|Pronomen|
Je dîne avec ma famille.|Ich esse mit meiner Familie zu Abend.|Verben auf -er|
Je me couche tard.|Ich gehe spät ins Bett.|Reflexive Verben|`},
 {id:"u9", e:"🕐", title:"Uhrzeiten", pt:"L'heure", desc:"Wie spät ist es? Halb, Viertel, Mittag.",
  words:`quelle heure est-il ?|wie spät ist es?
il est une heure|es ist ein Uhr
il est deux heures|es ist zwei Uhr
et demie|halb (nach der vollen Stunde)
et quart|Viertel nach
moins le quart|Viertel vor
midi|der Mittag (12 Uhr)
minuit|die Mitternacht
le matin|der Morgen
le soir|der Abend`,
  sents:`Quelle heure est-il ?|Wie spät ist es?|Uhrzeit|
Il est trois heures et demie.|Es ist halb vier.|Uhrzeit|„trois heures et demie“ = 3:30, auf Deutsch also halb VIER.
Il est une heure et quart.|Es ist Viertel nach eins.|Uhrzeit|
Il est huit heures moins le quart.|Es ist Viertel vor acht.|Uhrzeit|
Le cours commence à dix heures.|Der Kurs beginnt um zehn Uhr.|Uhrzeit|„um“ heißt „à“.
Je travaille le matin.|Ich arbeite morgens.|Tageszeiten|`},
 {id:"u10", e:"🍽️", title:"Essen und Trinken", pt:"Manger et boire", desc:"Bestellen, mögen, nicht mögen.",
  words:`l'eau|das Wasser
le vin|der Wein
la bière|das Bier
le pain|das Brot
la viande|das Fleisch
le poisson|der Fisch
les fruits|das Obst
les légumes|das Gemüse
j'aime|ich mag
l'addition|die Rechnung`,
  sents:`J'aime le café.|Ich mag Kaffee.|aimer|Nach „aimer“ steht der bestimmte Artikel.
Je n'aime pas le poisson.|Ich mag keinen Fisch.|Verneinung|
Je voudrais une bière, s'il vous plaît.|Ich hätte gern ein Bier, bitte.|Höflichkeit|„je voudrais“ ist die höfliche Form von „je veux“.
Je prends du pain.|Ich nehme Brot.|Teilungsartikel|du / de la für unbestimmte Mengen.
Vous avez choisi ?|Haben Sie gewählt?|Restaurant|
L'addition, s'il vous plaît.|Die Rechnung, bitte.|Restaurant|`},
 {id:"u11", e:"🛒", title:"Einkaufen", pt:"Faire les courses", desc:"Preise, bezahlen, Tüte bitte.",
  words:`le magasin|der Laden
le supermarché|der Supermarkt
acheter|kaufen
payer|bezahlen
cher|teuer
pas cher|günstig
le sac|die Tüte
par carte|mit Karte
en espèces|bar
ça coûte combien ?|wie viel kostet das?`,
  sents:`Combien coûte ce t-shirt ?|Wie viel kostet dieses T-Shirt?|Demonstrativ|ce, cette, ces = dieser, diese.
C'est trop cher.|Das ist zu teuer.|Adjektive|
Je peux payer par carte ?|Kann ich mit Karte zahlen?|pouvoir|
Je voudrais un kilo de tomates.|Ich hätte gern ein Kilo Tomaten.|Mengen|Nach Mengenangaben steht nur „de“.
Vous voulez un sac ?|Möchten Sie eine Tüte?|Anrede|
Je vais au supermarché.|Ich gehe in den Supermarkt.|Präpositionen|à + le = au.`},
 {id:"u12", e:"🏠", title:"Wohnen", pt:"Le logement", desc:"Zimmer, Miete und Nachbarn.",
  words:`la maison|das Haus
l'appartement|die Wohnung
la chambre|das Schlafzimmer
la cuisine|die Küche
la salle de bains|das Bad
le salon|das Wohnzimmer
le loyer|die Miete
le voisin|der Nachbar
grand|groß
petit|klein`,
  sents:`J'habite dans un petit appartement.|Ich wohne in einer kleinen Wohnung.|Adjektive|Kurze Adjektive wie petit, grand, beau stehen vor dem Nomen.
L'appartement a deux chambres.|Die Wohnung hat zwei Schlafzimmer.|avoir|
La cuisine est très grande.|Die Küche ist sehr groß.|Adjektive|Weiblich: grand wird zu grande.
La salle de bains est au fond.|Das Bad ist hinten.|Ort|
Le loyer est de 900 euros.|Die Miete beträgt 900 Euro.|Zahlen|
Mon voisin est très gentil.|Mein Nachbar ist sehr nett.|Adjektive|`}
]}, `7|Tu as des frères et sœurs ?|Hast du Geschwister?|Oui, j'ai une sœur.|Il est trois heures.|J'aime le vin.
8|Tu te lèves à quelle heure ?|Wann stehst du auf?|À sept heures.|Par carte.|Ma mère.
9|Quelle heure est-il ?|Wie spät ist es?|Il est cinq heures et demie.|Cinq euros.|Dans la cuisine.
10|Qu'est-ce que tu veux boire ?|Was möchtest du trinken?|De l'eau, s'il te plaît.|À huit heures.|Mon frère.
11|Vous payez comment ?|Wie zahlen Sie?|Par carte.|Je me lève tard.|J'ai deux enfants.
12|L'appartement a combien de pièces ?|Wie viele Zimmer hat die Wohnung?|Trois.|À neuf heures.|Je n'aime pas ça.`);

/* ---------- Englisch ---------- */
add("en", {id:"s2", title:"Mein Alltag", pt:"My everyday life", level:"A1–A2", color:C, units:[
 {id:"u7", e:"👨‍👩‍👧", title:"Familie", pt:"Family", desc:"Eltern, Geschwister und mein, dein, sein.",
  words:`the family|die Familie
the father|der Vater
the mother|die Mutter
the parents|die Eltern
the brother|der Bruder
the sister|die Schwester
the son|der Sohn
the daughter|die Tochter
the grandfather|der Großvater
the grandmother|die Großmutter`,
  sents:`This is my family.|Das ist meine Familie.|Possessiv|my, your, his, her, our, their.
My mother's name is Anne.|Meine Mutter heißt Anne.|Possessiv|Besitz mit 's: my mother's name.
I have a brother and a sister.|Ich habe einen Bruder und eine Schwester.|to have|
Have you got any children?|Hast du Kinder?|have got|In Großbritannien sehr üblich; überall richtig: Do you have any children?
My parents live in Manchester.|Meine Eltern wohnen in Manchester.|Simple Present|
Her brother is very nice.|Ihr Bruder ist sehr nett.|Possessiv|his = sein, her = ihr.`},
 {id:"u8", e:"☀️", title:"Alltag", pt:"Daily routine", desc:"Aufstehen, arbeiten, essen, schlafen.",
  words:`to get up|aufstehen
to have a shower|duschen
to have breakfast|frühstücken
to work|arbeiten
to have lunch|zu Mittag essen
to have dinner|zu Abend essen
to go to bed|ins Bett gehen
early|früh
late|spät
every day|jeden Tag`,
  sents:`I get up at seven.|Ich stehe um sieben auf.|Simple Present|
I have a coffee in the morning.|Morgens trinke ich einen Kaffee.|have|„have“ steht oft für essen und trinken.
I work from nine to five.|Ich arbeite von neun bis fünf.|Präpositionen|
She has lunch at one.|Sie isst um eins zu Mittag.|Simple Present|3. Person: has.
We have dinner together.|Wir essen zusammen zu Abend.|Simple Present|
I usually go to bed late.|Ich gehe normalerweise spät ins Bett.|Häufigkeit|usually, often, always stehen vor dem Verb.`},
 {id:"u9", e:"🕐", title:"Uhrzeiten", pt:"Telling the time", desc:"Wie spät ist es? Halb, Viertel, Mittag.",
  words:`what time is it?|wie spät ist es?
it's one o'clock|es ist ein Uhr
it's two o'clock|es ist zwei Uhr
half past|halb (nach der vollen Stunde)
quarter past|Viertel nach
quarter to|Viertel vor
midday|der Mittag
midnight|die Mitternacht
in the morning|morgens
in the evening|abends`,
  sents:`What time is it?|Wie spät ist es?|Uhrzeit|
It's half past three.|Es ist halb vier.|Uhrzeit|„half past three“ = 3:30, auf Deutsch also halb VIER.
It's quarter past one.|Es ist Viertel nach eins.|Uhrzeit|
It's quarter to eight.|Es ist Viertel vor acht.|Uhrzeit|
The lesson starts at ten.|Der Unterricht beginnt um zehn.|Uhrzeit|„um“ heißt „at“.
I work in the morning.|Ich arbeite morgens.|Tageszeiten|`},
 {id:"u10", e:"🍽️", title:"Essen und Trinken", pt:"Food and drink", desc:"Bestellen, mögen, nicht mögen.",
  words:`the water|das Wasser
the wine|der Wein
the beer|das Bier
the bread|das Brot
the meat|das Fleisch
the fish|der Fisch
the fruit|das Obst
the vegetables|das Gemüse
I like|ich mag
the bill|die Rechnung`,
  sents:`I like coffee.|Ich mag Kaffee.|like|Bei allgemeinen Vorlieben steht kein Artikel.
I don't like fish.|Ich mag keinen Fisch.|Verneinung|
I'd like a beer, please.|Ich hätte gern ein Bier, bitte.|Höflichkeit|„I'd like“ = I would like – höflicher als „I want“.
Could I have some bread?|Könnte ich etwas Brot haben?|Höflichkeit|
Are you ready to order?|Möchten Sie bestellen?|Restaurant|
Can I have the bill, please?|Kann ich bitte die Rechnung haben?|Restaurant|In den USA sagt man „the check“.`},
 {id:"u11", e:"🛒", title:"Einkaufen", pt:"Shopping", desc:"Preise, bezahlen, Tüte bitte.",
  words:`the shop|der Laden
the supermarket|der Supermarkt
to buy|kaufen
to pay|bezahlen
expensive|teuer
cheap|billig
the bag|die Tüte
by card|mit Karte
in cash|bar
how much is it?|wie viel kostet das?`,
  sents:`How much is this T-shirt?|Wie viel kostet dieses T-Shirt?|Demonstrativ|this/these = hier, that/those = dort.
It's too expensive.|Das ist zu teuer.|Adjektive|
Can I pay by card?|Kann ich mit Karte zahlen?|can|
I'd like a kilo of tomatoes.|Ich hätte gern ein Kilo Tomaten.|Mengen|
Do you need a bag?|Brauchen Sie eine Tüte?|Fragen|
I'm going to the supermarket.|Ich gehe in den Supermarkt.|Verlaufsform|`},
 {id:"u12", e:"🏠", title:"Wohnen", pt:"Home", desc:"Zimmer, Miete und Nachbarn.",
  words:`the house|das Haus
the flat|die Wohnung
the bedroom|das Schlafzimmer
the kitchen|die Küche
the bathroom|das Bad
the living room|das Wohnzimmer
the rent|die Miete
the neighbour|der Nachbar
big|groß
small|klein`,
  sents:`I live in a small flat.|Ich wohne in einer kleinen Wohnung.|Adjektive|Adjektive stehen vor dem Nomen und verändern sich nicht.
The flat has two bedrooms.|Die Wohnung hat zwei Schlafzimmer.|to have|
The kitchen is very big.|Die Küche ist sehr groß.|Adjektive|
The bathroom is at the end of the hall.|Das Bad ist am Ende des Flurs.|Ort|
The rent is 900 pounds a month.|Die Miete beträgt 900 Pfund im Monat.|Zahlen|
My neighbour is very friendly.|Mein Nachbar ist sehr freundlich.|Adjektive|Britisch: neighbour, amerikanisch: neighbor.`}
]}, `7|Have you got any brothers or sisters?|Hast du Geschwister?|Yes, I've got a sister.|It's three o'clock.|I like wine.
8|What time do you get up?|Wann stehst du auf?|At seven.|By card.|My mother.
9|What time is it?|Wie spät ist es?|It's half past five.|Five pounds.|In the kitchen.
10|What would you like to drink?|Was möchtest du trinken?|Water, please.|At eight.|My brother.
11|How would you like to pay?|Wie möchten Sie bezahlen?|By card, please.|I get up late.|I've got two children.
12|How many bedrooms has the flat got?|Wie viele Schlafzimmer hat die Wohnung?|Two.|At nine.|I don't like it.`);

/* ---------- Italienisch ---------- */
add("it", {id:"s2", title:"Mein Alltag", pt:"La mia vita quotidiana", level:"A1–A2", color:C, units:[
 {id:"u7", e:"👨‍👩‍👧", title:"Familie", pt:"La famiglia", desc:"Eltern, Geschwister und mein, dein, sein.",
  words:`la famiglia|die Familie
il padre|der Vater
la madre|die Mutter
i genitori|die Eltern
il fratello|der Bruder
la sorella|die Schwester
il figlio|der Sohn
la figlia|die Tochter
il nonno|der Großvater
la nonna|die Großmutter`,
  sents:`Questa è la mia famiglia.|Das ist meine Familie.|Possessiv|Vor dem Possessiv steht meist ein Artikel: la mia famiglia.
Mia madre si chiama Anna.|Meine Mutter heißt Anna.|Possessiv|Bei einzelnen Familienmitgliedern fällt der Artikel weg: mia madre, mio fratello.
Ho un fratello e una sorella.|Ich habe einen Bruder und eine Schwester.|avere|
Hai figli?|Hast du Kinder?|Fragen|
I miei genitori abitano a Napoli.|Meine Eltern wohnen in Neapel.|Possessiv|Im Plural mit Artikel: i miei genitori.
Suo fratello è molto simpatico.|Sein / Ihr Bruder ist sehr sympathisch.|Possessiv|„suo“ kann sein, ihr oder Ihr heißen.`},
 {id:"u8", e:"☀️", title:"Alltag", pt:"La giornata", desc:"Aufstehen, arbeiten, essen, schlafen.",
  words:`alzarsi|aufstehen
fare la doccia|duschen
fare colazione|frühstücken
lavorare|arbeiten
pranzare|zu Mittag essen
cenare|zu Abend essen
andare a letto|ins Bett gehen
presto|früh
tardi|spät
ogni giorno|jeden Tag`,
  sents:`Mi alzo alle sette.|Ich stehe um sieben auf.|Reflexive Verben|alzarsi: mi alzo, ti alzi, si alza …
Faccio colazione al bar.|Ich frühstücke in der Bar.|fare|In Italien frühstückt man oft schnell in der Bar: Cappuccino und Cornetto.
Lavoro dalle nove alle cinque.|Ich arbeite von neun bis fünf.|Präpositionen|da + le = dalle, a + le = alle.
Pranzo all'una.|Ich esse um eins zu Mittag.|Uhrzeit|
Ceniamo insieme.|Wir essen zusammen zu Abend.|Verben auf -are|
Vado a letto tardi.|Ich gehe spät ins Bett.|andare|`},
 {id:"u9", e:"🕐", title:"Uhrzeiten", pt:"L'ora", desc:"Wie spät ist es? Halb, Viertel, Mittag.",
  words:`che ore sono?|wie spät ist es?
è l'una|es ist ein Uhr
sono le due|es ist zwei Uhr
e mezza|halb (nach der vollen Stunde)
e un quarto|Viertel nach
meno un quarto|Viertel vor
mezzogiorno|der Mittag
mezzanotte|die Mitternacht
di mattina|morgens
di sera|abends`,
  sents:`Che ore sono?|Wie spät ist es?|Uhrzeit|Auch üblich: „Che ora è?“
Sono le tre e mezza.|Es ist halb vier.|Uhrzeit|„le tre e mezza“ = 3:30, auf Deutsch also halb VIER.
È l'una e un quarto.|Es ist Viertel nach eins.|Uhrzeit|Nur bei eins: „è l'una“.
Sono le otto meno un quarto.|Es ist Viertel vor acht.|Uhrzeit|
La lezione comincia alle dieci.|Der Unterricht beginnt um zehn.|Uhrzeit|„um“ heißt „alle“ (a + le).
Lavoro di mattina.|Ich arbeite morgens.|Tageszeiten|`},
 {id:"u10", e:"🍽️", title:"Essen und Trinken", pt:"Mangiare e bere", desc:"Bestellen, mögen, nicht mögen.",
  words:`l'acqua|das Wasser
il vino|der Wein
la birra|das Bier
il pane|das Brot
la carne|das Fleisch
il pesce|der Fisch
la frutta|das Obst
la verdura|das Gemüse
mi piace|mir gefällt / ich mag
il conto|die Rechnung`,
  sents:`Mi piace il caffè.|Ich mag Kaffee.|piacere|Wörtlich: „Mir gefällt der Kaffee.“
Mi piacciono le olive.|Ich mag Oliven.|piacere|Bei mehreren Dingen: piacciono.
Non mi piace il pesce.|Ich mag keinen Fisch.|piacere|
Vorrei una birra, per favore.|Ich hätte gern ein Bier, bitte.|Höflichkeit|„vorrei“ ist höflicher als „voglio“.
Cosa prendi?|Was nimmst du?|Restaurant|
Il conto, per favore.|Die Rechnung, bitte.|Restaurant|`},
 {id:"u11", e:"🛒", title:"Einkaufen", pt:"Fare la spesa", desc:"Preise, bezahlen, Tüte bitte.",
  words:`il negozio|der Laden
il supermercato|der Supermarkt
comprare|kaufen
pagare|bezahlen
caro|teuer
economico|günstig
la busta|die Tüte
con la carta|mit Karte
in contanti|bar
quanto costa?|wie viel kostet das?`,
  sents:`Quanto costa questa maglietta?|Wie viel kostet dieses T-Shirt?|Demonstrativ|questo / questa = dieser / diese.
È troppo caro.|Das ist zu teuer.|Adjektive|
Posso pagare con la carta?|Kann ich mit Karte zahlen?|potere|
Vorrei un chilo di pomodori.|Ich hätte gern ein Kilo Tomaten.|Mengen|
Le serve una busta?|Brauchen Sie eine Tüte?|Anrede|
Vado al supermercato.|Ich gehe in den Supermarkt.|Präpositionen|a + il = al.`},
 {id:"u12", e:"🏠", title:"Wohnen", pt:"La casa", desc:"Zimmer, Miete und Nachbarn.",
  words:`l'appartamento|die Wohnung
la camera da letto|das Schlafzimmer
la cucina|die Küche
il bagno|das Bad
il soggiorno|das Wohnzimmer
l'affitto|die Miete
il vicino|der Nachbar
grande|groß
piccolo|klein
il balcone|der Balkon`,
  sents:`Abito in un piccolo appartamento.|Ich wohne in einer kleinen Wohnung.|Adjektive|„piccolo“ kann vor oder hinter dem Nomen stehen.
L'appartamento ha due camere da letto.|Die Wohnung hat zwei Schlafzimmer.|avere|
La cucina è molto grande.|Die Küche ist sehr groß.|Adjektive|
Il bagno è in fondo al corridoio.|Das Bad ist am Ende des Flurs.|Ort|
L'affitto è di 900 euro.|Die Miete beträgt 900 Euro.|Zahlen|
Il mio vicino è molto gentile.|Mein Nachbar ist sehr freundlich.|Adjektive|`}
]}, `7|Hai fratelli?|Hast du Geschwister?|Sì, ho una sorella.|Sono le tre.|Mi piace il vino.
8|A che ora ti alzi?|Wann stehst du auf?|Alle sette.|Con la carta.|Mia madre.
9|Che ore sono?|Wie spät ist es?|Sono le cinque e mezza.|Cinque euro.|In cucina.
10|Cosa vuoi bere?|Was möchtest du trinken?|Acqua, per favore.|Alle otto.|Mio fratello.
11|Come paga?|Wie zahlen Sie?|Con la carta.|Mi alzo tardi.|Ho due figli.
12|Quante camere ha l'appartamento?|Wie viele Zimmer hat die Wohnung?|Tre.|Alle nove.|Non mi piace.`);
})();
