/* ===== Abschnitt 4 „Mein Leben“ (B1) für es, fr, en, it ===== */
(function(){
const C = "#7C4DFF";
const add = (code, sec, dlg) => {
  const P = LEL_PACKS[code]; if(!P) return;
  P.PATH_SECTIONS.push(sec);
  P.DIALOGS = P.DIALOGS.trim() + "\n" + dlg.trim();
  P.LANG.status = P.LANG.status.replace(/^[^·]+ · Abschnitt \d von 6/, "B1 · Abschnitt 4 von 6");
};
const D = {
 u19:["💼","Arbeit","Beruf, Firma, Bewerbung."],
 u20:["🎯","Pläne","Zukunft, Wünsche, Träume."],
 u21:["💬","Meinungen","Ich glaube, weil, aber."],
 u22:["😊","Gefühle","Wie es mir geht."],
 u23:["🏨","Hotel und Reisen","Reservierung, Flug, Koffer."],
 u24:["📜","Früher","Von früher erzählen."]
};
const unit = (id, pt, words, sents) => ({id, e:D[id][0], title:D[id][1], pt, desc:D[id][2], words, sents});

/* ---------- Spanisch ---------- */
add("es", {id:"s4", title:"Mein Leben", pt:"Mi vida", level:"B1", color:C, units:[
 unit("u19", "El trabajo", `el trabajo|die Arbeit
la empresa|die Firma
el jefe|der Chef
el compañero|der Kollege
la reunión|die Besprechung
el sueldo|das Gehalt
la entrevista|das Vorstellungsgespräch
el currículum|der Lebenslauf
buscar trabajo|Arbeit suchen
trabajar en equipo|im Team arbeiten`, `¿A qué te dedicas?|Was machst du beruflich?|Fragen|Die übliche Frage nach dem Beruf.
Trabajo como enfermera en un hospital.|Ich arbeite als Krankenschwester in einem Krankenhaus.|Beruf|trabajar como / de = arbeiten als.
Tengo una reunión a las tres.|Ich habe um drei eine Besprechung.|tener|
Llevo cinco años en esta empresa.|Ich bin seit fünf Jahren in dieser Firma.|llevar|llevar + Zeitraum = seit … dabei sein.
Estoy buscando trabajo.|Ich suche gerade Arbeit.|Verlaufsform|
Mañana tengo una entrevista de trabajo.|Morgen habe ich ein Vorstellungsgespräch.|tener|`),
 unit("u20", "Planes", `el futuro|die Zukunft
el plan|der Plan
el sueño|der Traum
aprender|lernen
mudarse|umziehen
viajar|reisen
el año que viene|nächstes Jahr
algún día|eines Tages
quizás|vielleicht
esperar|hoffen`, `El año que viene voy a aprender a conducir.|Nächstes Jahr lerne ich Auto fahren.|Futur|ir a + Infinitiv für Pläne.
Algún día viviré en la playa.|Eines Tages werde ich am Strand wohnen.|Futur|Futur I: Infinitiv + -é, -ás, -á …
Espero encontrar un buen trabajo.|Ich hoffe, eine gute Arbeit zu finden.|esperar|
Quizás nos mudemos a Valencia.|Vielleicht ziehen wir nach Valencia.|Subjuntivo|Nach „quizás“ steht oft der Subjuntivo.
Mi sueño es viajar por todo el mundo.|Mein Traum ist es, um die ganze Welt zu reisen.|Infinitiv|
¿Qué planes tienes para el verano?|Was hast du im Sommer vor?|Fragen|`),
 unit("u21", "Opiniones", `creo que|ich glaube, dass
pienso que|ich denke, dass
en mi opinión|meiner Meinung nach
estoy de acuerdo|ich bin einverstanden
porque|weil
pero|aber
sin embargo|jedoch
importante|wichtig
interesante|interessant
complicado|kompliziert`, `Creo que tienes razón.|Ich glaube, du hast recht.|Meinung|tener razón = recht haben.
En mi opinión, el libro es mejor que la película.|Meiner Meinung nach ist das Buch besser als der Film.|Vergleich|mejor que = besser als.
No estoy de acuerdo contigo.|Ich bin nicht deiner Meinung.|Meinung|con + ti = contigo.
Me gusta Madrid porque hay mucha vida.|Ich mag Madrid, weil dort viel los ist.|porque|Nach „porque“ bleibt die normale Wortstellung.
No creo que sea tan fácil.|Ich glaube nicht, dass es so einfach ist.|Subjuntivo|Nach „no creo que“ folgt der Subjuntivo.
Es interesante, pero un poco caro.|Es ist interessant, aber ein bisschen teuer.|Konjunktionen|`),
 unit("u22", "Sentimientos", `feliz|glücklich
triste|traurig
cansado|müde
nervioso|nervös
enfadado|wütend
contento|zufrieden
preocupado|besorgt
sorprendido|überrascht
tener miedo|Angst haben
echar de menos|vermissen`, `Hoy estoy muy cansado.|Heute bin ich sehr müde.|estar|Gefühle und Zustände mit „estar“.
Estoy nervioso por el examen.|Ich bin wegen der Prüfung nervös.|por|por = wegen.
Te echo de menos.|Ich vermisse dich.|echar de menos|
Me alegro mucho de verte.|Ich freue mich sehr, dich zu sehen.|alegrarse|
¿Por qué estás triste?|Warum bist du traurig?|Fragen|por qué = warum, porque = weil.
Tengo miedo de los perros.|Ich habe Angst vor Hunden.|tener|`),
 unit("u23", "De viaje", `el hotel|das Hotel
la habitación doble|das Doppelzimmer
la reserva|die Reservierung
la llave|der Schlüssel
el pasaporte|der Reisepass
la maleta|der Koffer
el desayuno|das Frühstück
el aeropuerto|der Flughafen
el vuelo|der Flug
las vacaciones|der Urlaub`, `Tengo una reserva a nombre de Müller.|Ich habe eine Reservierung auf den Namen Müller.|Hotel|
¿Está incluido el desayuno?|Ist das Frühstück inbegriffen?|estar|
Quería una habitación doble para dos noches.|Ich hätte gern ein Doppelzimmer für zwei Nächte.|Höflichkeit|
¿A qué hora hay que dejar la habitación?|Um wie viel Uhr muss man das Zimmer verlassen?|hay que|hay que + Infinitiv = man muss.
Mi vuelo sale a las seis de la mañana.|Mein Flug geht um sechs Uhr morgens.|Uhrzeit|
He perdido mi maleta.|Ich habe meinen Koffer verloren.|Perfecto|Pretérito perfecto: haber + Partizip – für gerade Geschehenes.`),
 unit("u24", "Antes", `cuando era niño|als ich ein Kind war
antes|früher
siempre|immer
todos los veranos|jeden Sommer
de repente|plötzlich
mientras|während
entonces|dann
vivía|ich wohnte (früher)
jugaba|ich spielte (früher)
había|es gab`, `Cuando era niño, vivía en un pueblo.|Als ich ein Kind war, wohnte ich in einem Dorf.|Imperfecto|Imperfecto für Zustände und Gewohnheiten in der Vergangenheit.
Antes jugaba al fútbol todos los días.|Früher spielte ich jeden Tag Fußball.|Imperfecto|-ar-Verben: -aba, -abas, -aba …
Todos los veranos íbamos a la playa.|Jeden Sommer fuhren wir an den Strand.|Imperfecto|ir → iba (unregelmäßig).
Mientras cocinaba, sonó el teléfono.|Während ich kochte, klingelte das Telefon.|Imperfecto/Indefinido|Hintergrund: Imperfecto – neues Ereignis: Indefinido.
De repente empezó a llover.|Plötzlich fing es an zu regnen.|Indefinido|
En mi pueblo había una plaza muy bonita.|In meinem Dorf gab es einen sehr schönen Platz.|haber|había = es gab.`)
]}, `19|¿A qué te dedicas?|Was machst du beruflich?|Soy profesor.|Hace calor.|Ayer fui al cine.
20|¿Qué vas a hacer el verano que viene?|Was machst du nächsten Sommer?|Voy a viajar a México.|Estoy cansado.|Tengo una reserva.
21|¿Qué opinas de la película?|Was hältst du von dem Film?|Creo que es muy buena.|A las seis.|Me duele la cabeza.
22|¿Qué te pasa? Pareces triste.|Was ist los? Du siehst traurig aus.|Echo de menos a mi familia.|Es muy barato.|Voy en metro.
23|¿Tiene una reserva?|Haben Sie eine Reservierung?|Sí, a nombre de Müller.|Hace sol.|Juego al fútbol.
24|¿Dónde vivías de niño?|Wo hast du als Kind gewohnt?|En un pueblo cerca de Sevilla.|Mañana a las diez.|Con tarjeta.`);

/* ---------- Französisch ---------- */
add("fr", {id:"s4", title:"Mein Leben", pt:"Ma vie", level:"B1", color:C, units:[
 unit("u19", "Le travail", `le travail|die Arbeit
l'entreprise|die Firma
le chef|der Chef
le collègue|der Kollege
la réunion|die Besprechung
le salaire|das Gehalt
l'entretien|das Vorstellungsgespräch
le CV|der Lebenslauf
chercher du travail|Arbeit suchen
travailler en équipe|im Team arbeiten`, `Qu'est-ce que tu fais dans la vie ?|Was machst du beruflich?|Fragen|
Je suis infirmière dans un hôpital.|Ich bin Krankenschwester in einem Krankenhaus.|Beruf|Berufe ohne Artikel: je suis infirmière.
J'ai une réunion à quinze heures.|Ich habe um 15 Uhr eine Besprechung.|Uhrzeit|
Je travaille dans cette entreprise depuis cinq ans.|Ich arbeite seit fünf Jahren in dieser Firma.|depuis|depuis + Präsens = seit.
Je cherche du travail.|Ich suche Arbeit.|Teilungsartikel|
Demain, j'ai un entretien d'embauche.|Morgen habe ich ein Vorstellungsgespräch.|Arbeit|`),
 unit("u20", "Les projets", `l'avenir|die Zukunft
le projet|der Plan
le rêve|der Traum
apprendre|lernen
déménager|umziehen
voyager|reisen
l'année prochaine|nächstes Jahr
un jour|eines Tages
peut-être|vielleicht
espérer|hoffen`, `L'année prochaine, je vais apprendre à conduire.|Nächstes Jahr lerne ich Auto fahren.|Futur proche|aller + Infinitiv für Pläne.
Un jour, j'habiterai au bord de la mer.|Eines Tages werde ich am Meer wohnen.|Futur simple|Futur: Infinitiv + -ai, -as, -a …
J'espère trouver un bon travail.|Ich hoffe, eine gute Arbeit zu finden.|espérer|
On va peut-être déménager à Lyon.|Vielleicht ziehen wir nach Lyon.|Futur proche|
Mon rêve, c'est de voyager dans le monde entier.|Mein Traum ist es, um die ganze Welt zu reisen.|Infinitiv|
Qu'est-ce que tu fais cet été ?|Was machst du diesen Sommer?|Fragen|`),
 unit("u21", "Les opinions", `je pense que|ich denke, dass
je crois que|ich glaube, dass
à mon avis|meiner Meinung nach
d'accord|einverstanden
parce que|weil
mais|aber
pourtant|trotzdem / jedoch
important|wichtig
intéressant|interessant
compliqué|kompliziert`, `Je pense que tu as raison.|Ich denke, du hast recht.|Meinung|avoir raison = recht haben.
À mon avis, le livre est meilleur que le film.|Meiner Meinung nach ist das Buch besser als der Film.|Vergleich|meilleur que = besser als.
Je ne suis pas d'accord avec toi.|Ich bin nicht deiner Meinung.|Meinung|
J'aime Lyon parce qu'il y a beaucoup de vie.|Ich mag Lyon, weil dort viel los ist.|parce que|parce que + il = parce qu'il.
Je ne pense pas que ce soit si facile.|Ich glaube nicht, dass es so einfach ist.|Subjonctif|Nach „je ne pense pas que“ folgt der Subjonctif.
C'est intéressant, mais un peu cher.|Es ist interessant, aber etwas teuer.|Konjunktionen|`),
 unit("u22", "Les sentiments", `heureux|glücklich
triste|traurig
fatigué|müde
nerveux|nervös
en colère|wütend
content|zufrieden
inquiet|besorgt
surpris|überrascht
avoir peur|Angst haben
manquer|fehlen (vermissen)`, `Aujourd'hui, je suis très fatigué.|Heute bin ich sehr müde.|être|
Je suis stressé à cause de l'examen.|Ich bin wegen der Prüfung gestresst.|à cause de|à cause de = wegen.
Tu me manques.|Ich vermisse dich.|manquer|Wörtlich: „Du fehlst mir.“ – umgekehrt als im Deutschen!
Je suis très content de te voir.|Ich freue mich sehr, dich zu sehen.|être content de|
Pourquoi tu es triste ?|Warum bist du traurig?|Fragen|pourquoi = warum, parce que = weil.
J'ai peur des chiens.|Ich habe Angst vor Hunden.|avoir peur de|de + les = des.`),
 unit("u23", "En voyage", `l'hôtel|das Hotel
la chambre double|das Doppelzimmer
la réservation|die Reservierung
la clé|der Schlüssel
le passeport|der Reisepass
la valise|der Koffer
le petit-déjeuner|das Frühstück
l'aéroport|der Flughafen
le vol|der Flug
les vacances|der Urlaub`, `J'ai une réservation au nom de Müller.|Ich habe eine Reservierung auf den Namen Müller.|Hotel|
Le petit-déjeuner est compris ?|Ist das Frühstück inbegriffen?|Hotel|
Je voudrais une chambre double pour deux nuits.|Ich hätte gern ein Doppelzimmer für zwei Nächte.|Höflichkeit|
À quelle heure faut-il libérer la chambre ?|Um wie viel Uhr muss man das Zimmer räumen?|il faut|il faut + Infinitiv = man muss.
Mon vol part à six heures du matin.|Mein Flug geht um sechs Uhr morgens.|Uhrzeit|
J'ai perdu ma valise.|Ich habe meinen Koffer verloren.|Passé composé|`),
 unit("u24", "Autrefois", `quand j'étais petit|als ich klein war
avant|früher
toujours|immer
chaque été|jeden Sommer
tout à coup|plötzlich
pendant que|während
ensuite|danach
j'habitais|ich wohnte (früher)
je jouais|ich spielte (früher)
il y avait|es gab`, `Quand j'étais petit, j'habitais dans un village.|Als ich klein war, wohnte ich in einem Dorf.|Imparfait|Imparfait für Zustände und Gewohnheiten in der Vergangenheit.
Avant, je jouais au foot tous les jours.|Früher spielte ich jeden Tag Fußball.|Imparfait|Endungen: -ais, -ais, -ait, -ions, -iez, -aient.
Chaque été, nous allions à la mer.|Jeden Sommer fuhren wir ans Meer.|Imparfait|
Pendant que je cuisinais, le téléphone a sonné.|Während ich kochte, klingelte das Telefon.|Imparfait/Passé composé|Hintergrund: Imparfait – neues Ereignis: Passé composé.
Tout à coup, il a commencé à pleuvoir.|Plötzlich fing es an zu regnen.|Passé composé|
Dans mon village, il y avait une très belle place.|In meinem Dorf gab es einen sehr schönen Platz.|il y a|il y avait = es gab.`)
]}, `19|Qu'est-ce que tu fais dans la vie ?|Was machst du beruflich?|Je suis professeur.|Il fait chaud.|Hier, je suis allé au cinéma.
20|Qu'est-ce que tu vas faire l'été prochain ?|Was machst du nächsten Sommer?|Je vais voyager au Canada.|Je suis fatigué.|J'ai une réservation.
21|Qu'est-ce que tu penses du film ?|Was hältst du von dem Film?|Je pense qu'il est très bon.|À six heures.|J'ai mal à la tête.
22|Qu'est-ce qui se passe ? Tu as l'air triste.|Was ist los? Du siehst traurig aus.|Ma famille me manque.|C'est très bon marché.|Je prends le métro.
23|Vous avez une réservation ?|Haben Sie eine Reservierung?|Oui, au nom de Müller.|Il fait beau.|Je joue au foot.
24|Tu habitais où quand tu étais petit ?|Wo hast du als Kind gewohnt?|Dans un village près de Lyon.|Demain à dix heures.|Par carte.`);

/* ---------- Englisch ---------- */
add("en", {id:"s4", title:"Mein Leben", pt:"My life", level:"B1", color:C, units:[
 unit("u19", "Work", `the job|der Job
the company|die Firma
the boss|der Chef
the colleague|der Kollege
the meeting|die Besprechung
the salary|das Gehalt
the job interview|das Vorstellungsgespräch
the CV|der Lebenslauf
to look for a job|Arbeit suchen
to work in a team|im Team arbeiten`, `What do you do for a living?|Was machst du beruflich?|Fragen|Kürzer: What do you do?
I work as a nurse in a hospital.|Ich arbeite als Krankenschwester in einem Krankenhaus.|Beruf|Vor Berufen steht „a / an“: I'm a nurse.
I've got a meeting at three.|Ich habe um drei eine Besprechung.|have got|
I've worked for this company for five years.|Ich arbeite seit fünf Jahren für diese Firma.|Present Perfect|„seit“ = Present Perfect + for (Zeitraum) oder since (Zeitpunkt).
I'm looking for a job.|Ich suche gerade Arbeit.|Verlaufsform|
I've got a job interview tomorrow.|Morgen habe ich ein Vorstellungsgespräch.|have got|`),
 unit("u20", "Plans", `the future|die Zukunft
the plan|der Plan
the dream|der Traum
to learn|lernen
to move|umziehen
to travel|reisen
next year|nächstes Jahr
one day|eines Tages
maybe|vielleicht
to hope|hoffen`, `Next year I'm going to learn to drive.|Nächstes Jahr lerne ich Auto fahren.|going to|going to = Plan, Absicht.
One day I'll live by the sea.|Eines Tages werde ich am Meer wohnen.|will|will = Zukunft, Vorhersage, spontane Entscheidung.
I hope to find a good job.|Ich hoffe, eine gute Arbeit zu finden.|hope|
Maybe we'll move to Manchester.|Vielleicht ziehen wir nach Manchester.|will|
My dream is to travel around the world.|Mein Traum ist es, um die Welt zu reisen.|Infinitiv|
What are you doing this summer?|Was machst du diesen Sommer?|Verlaufsform|Feste Pläne: Present Progressive.`),
 unit("u21", "Opinions", `I think|ich denke
I believe|ich glaube
in my opinion|meiner Meinung nach
I agree|ich stimme zu
because|weil
but|aber
however|jedoch
important|wichtig
interesting|interessant
complicated|kompliziert`, `I think you're right.|Ich denke, du hast recht.|Meinung|„that“ fällt oft weg: I think (that) …
In my opinion, the book is better than the film.|Meiner Meinung nach ist das Buch besser als der Film.|Vergleich|good → better → best.
I don't agree with you.|Ich bin nicht deiner Meinung.|Meinung|
I like London because there's so much to do.|Ich mag London, weil dort so viel los ist.|because|
I don't think it's that easy.|Ich glaube nicht, dass es so einfach ist.|Verneinung|Englisch verneint „think“: I don't think it's … statt „I think it isn't …“.
It's interesting, but a bit expensive.|Es ist interessant, aber etwas teuer.|Konjunktionen|`),
 unit("u22", "Feelings", `happy|glücklich
sad|traurig
tired|müde
nervous|nervös
angry|wütend
pleased|zufrieden
worried|besorgt
surprised|überrascht
to be afraid|Angst haben
to miss|vermissen`, `I'm really tired today.|Heute bin ich richtig müde.|to be|
I'm nervous about the exam.|Ich bin wegen der Prüfung nervös.|Präpositionen|nervous about, afraid of, angry with …
I miss you.|Ich vermisse dich.|miss|
I'm so happy to see you.|Ich freue mich so, dich zu sehen.|Infinitiv|
Why are you sad?|Warum bist du traurig?|Fragen|
I'm afraid of dogs.|Ich habe Angst vor Hunden.|afraid of|`),
 unit("u23", "Travelling", `the hotel|das Hotel
the double room|das Doppelzimmer
the booking|die Reservierung
the key|der Schlüssel
the passport|der Reisepass
the suitcase|der Koffer
breakfast|das Frühstück
the airport|der Flughafen
the flight|der Flug
the holiday|der Urlaub`, `I've got a booking in the name of Müller.|Ich habe eine Reservierung auf den Namen Müller.|Hotel|
Is breakfast included?|Ist das Frühstück inbegriffen?|Passiv|
I'd like a double room for two nights.|Ich hätte gern ein Doppelzimmer für zwei Nächte.|Höflichkeit|
What time do we have to check out?|Um wie viel Uhr müssen wir auschecken?|have to|have to = müssen.
My flight leaves at six in the morning.|Mein Flug geht um sechs Uhr morgens.|Simple Present|
I've lost my suitcase.|Ich habe meinen Koffer verloren.|Present Perfect|Gerade passiert, mit Folgen für jetzt: Present Perfect.`),
 unit("u24", "The past", `when I was a child|als ich ein Kind war
in the past|früher
always|immer
every summer|jeden Sommer
suddenly|plötzlich
while|während
then|dann
I used to live|ich wohnte früher
I used to play|ich spielte früher
there was|es gab`, `When I was a child, I lived in a village.|Als ich ein Kind war, wohnte ich in einem Dorf.|Simple Past|
I used to play football every day.|Früher spielte ich jeden Tag Fußball.|used to|used to = früher regelmäßig, heute nicht mehr.
Every summer we went to the seaside.|Jeden Sommer fuhren wir ans Meer.|Simple Past|
While I was cooking, the phone rang.|Während ich kochte, klingelte das Telefon.|Past Progressive|Hintergrund: Past Progressive – neues Ereignis: Simple Past.
Suddenly it started to rain.|Plötzlich fing es an zu regnen.|Simple Past|
There was a lovely square in my village.|In meinem Dorf gab es einen sehr schönen Platz.|there was|there was / there were = es gab.`)
]}, `19|What do you do?|Was machst du beruflich?|I'm a teacher.|It's hot.|I went to the cinema.
20|What are you going to do next summer?|Was machst du nächsten Sommer?|I'm going to travel to Canada.|I'm tired.|I've got a booking.
21|What do you think of the film?|Was hältst du von dem Film?|I think it's really good.|At six.|I've got a headache.
22|What's wrong? You look sad.|Was ist los? Du siehst traurig aus.|I miss my family.|It's very cheap.|I take the bus.
23|Have you got a booking?|Haben Sie eine Reservierung?|Yes, in the name of Müller.|It's sunny.|I play football.
24|Where did you live as a child?|Wo hast du als Kind gewohnt?|In a village near York.|Tomorrow at ten.|By card.`);

/* ---------- Italienisch ---------- */
add("it", {id:"s4", title:"Mein Leben", pt:"La mia vita", level:"B1", color:C, units:[
 unit("u19", "Il lavoro", `il lavoro|die Arbeit
l'azienda|die Firma
il capo|der Chef
il collega|der Kollege
la riunione|die Besprechung
lo stipendio|das Gehalt
il colloquio|das Vorstellungsgespräch
il curriculum|der Lebenslauf
cercare lavoro|Arbeit suchen
lavorare in squadra|im Team arbeiten`, `Che lavoro fai?|Was machst du beruflich?|Fragen|
Faccio l'infermiera in un ospedale.|Ich arbeite als Krankenschwester in einem Krankenhaus.|Beruf|fare + Artikel + Beruf: faccio l'infermiera.
Ho una riunione alle tre.|Ich habe um drei eine Besprechung.|Uhrzeit|
Lavoro in questa azienda da cinque anni.|Ich arbeite seit fünf Jahren in dieser Firma.|da|da + Präsens = seit.
Sto cercando lavoro.|Ich suche gerade Arbeit.|Verlaufsform|
Domani ho un colloquio di lavoro.|Morgen habe ich ein Vorstellungsgespräch.|Arbeit|`),
 unit("u20", "I progetti", `il futuro|die Zukunft
il progetto|der Plan
il sogno|der Traum
imparare|lernen
trasferirsi|umziehen
viaggiare|reisen
l'anno prossimo|nächstes Jahr
un giorno|eines Tages
forse|vielleicht
sperare|hoffen`, `L'anno prossimo imparerò a guidare.|Nächstes Jahr lerne ich Auto fahren.|Futuro|Futur: imparare → imparerò.
Un giorno vivrò al mare.|Eines Tages werde ich am Meer wohnen.|Futuro|vivere → vivrò.
Spero di trovare un buon lavoro.|Ich hoffe, eine gute Arbeit zu finden.|sperare di|
Forse ci trasferiamo a Bologna.|Vielleicht ziehen wir nach Bologna.|Präsens|Für nahe Pläne reicht oft das Präsens.
Il mio sogno è viaggiare per il mondo.|Mein Traum ist es, um die Welt zu reisen.|Infinitiv|
Cosa fai quest'estate?|Was machst du diesen Sommer?|Fragen|`),
 unit("u21", "Le opinioni", `penso che|ich denke, dass
credo che|ich glaube, dass
secondo me|meiner Meinung nach
sono d'accordo|ich bin einverstanden
perché|weil / warum
ma|aber
però|jedoch
importante|wichtig
interessante|interessant
complicato|kompliziert`, `Penso che tu abbia ragione.|Ich denke, du hast recht.|Congiuntivo|Nach „penso che“ folgt der Congiuntivo: tu abbia.
Secondo me, il libro è meglio del film.|Meiner Meinung nach ist das Buch besser als der Film.|Vergleich|meglio di = besser als.
Non sono d'accordo con te.|Ich bin nicht deiner Meinung.|Meinung|
Mi piace Bologna perché c'è tanta vita.|Ich mag Bologna, weil dort viel los ist.|perché|„perché“ heißt weil und warum.
Non credo che sia così facile.|Ich glaube nicht, dass es so einfach ist.|Congiuntivo|essere → sia.
È interessante, ma un po' caro.|Es ist interessant, aber etwas teuer.|Konjunktionen|`),
 unit("u22", "I sentimenti", `felice|glücklich
triste|traurig
stanco|müde
nervoso|nervös
arrabbiato|wütend
contento|zufrieden
preoccupato|besorgt
sorpreso|überrascht
avere paura|Angst haben
mancare|fehlen (vermissen)`, `Oggi sono molto stanco.|Heute bin ich sehr müde.|essere|
Sono nervoso per l'esame.|Ich bin wegen der Prüfung nervös.|per|
Mi manchi.|Ich vermisse dich.|mancare|Wörtlich: „Du fehlst mir.“
Sono molto contento di vederti.|Ich freue mich sehr, dich zu sehen.|contento di|
Perché sei triste?|Warum bist du traurig?|Fragen|
Ho paura dei cani.|Ich habe Angst vor Hunden.|avere paura di|di + i = dei.`),
 unit("u23", "In viaggio", `l'albergo|das Hotel
la camera doppia|das Doppelzimmer
la prenotazione|die Reservierung
la chiave|der Schlüssel
il passaporto|der Reisepass
la valigia|der Koffer
la colazione|das Frühstück
l'aeroporto|der Flughafen
il volo|der Flug
le vacanze|der Urlaub`, `Ho una prenotazione a nome Müller.|Ich habe eine Reservierung auf den Namen Müller.|Hotel|
La colazione è inclusa?|Ist das Frühstück inbegriffen?|Hotel|
Vorrei una camera doppia per due notti.|Ich hätte gern ein Doppelzimmer für zwei Nächte.|Höflichkeit|
A che ora bisogna lasciare la camera?|Um wie viel Uhr muss man das Zimmer verlassen?|bisogna|bisogna + Infinitiv = man muss.
Il mio volo parte alle sei di mattina.|Mein Flug geht um sechs Uhr morgens.|Uhrzeit|
Ho perso la valigia.|Ich habe meinen Koffer verloren.|Passato prossimo|perdere → perso.`),
 unit("u24", "Una volta", `quando ero piccolo|als ich klein war
prima|früher
sempre|immer
ogni estate|jeden Sommer
all'improvviso|plötzlich
mentre|während
poi|dann
abitavo|ich wohnte (früher)
giocavo|ich spielte (früher)
c'era|es gab`, `Quando ero piccolo, abitavo in un paese.|Als ich klein war, wohnte ich in einem Dorf.|Imperfetto|Imperfetto für Zustände und Gewohnheiten in der Vergangenheit.
Prima giocavo a calcio tutti i giorni.|Früher spielte ich jeden Tag Fußball.|Imperfetto|Endungen: -avo, -avi, -ava …
Ogni estate andavamo al mare.|Jeden Sommer fuhren wir ans Meer.|Imperfetto|
Mentre cucinavo, è squillato il telefono.|Während ich kochte, klingelte das Telefon.|Imperfetto/Passato prossimo|Hintergrund: Imperfetto – neues Ereignis: Passato prossimo.
All'improvviso ha cominciato a piovere.|Plötzlich fing es an zu regnen.|Passato prossimo|
Nel mio paese c'era una piazza bellissima.|In meinem Dorf gab es einen wunderschönen Platz.|esserci|c'era = es gab.`)
]}, `19|Che lavoro fai?|Was machst du beruflich?|Sono insegnante.|Fa caldo.|Ieri sono andato al cinema.
20|Cosa farai l'estate prossima?|Was machst du nächsten Sommer?|Andrò in Canada.|Sono stanco.|Ho una prenotazione.
21|Cosa pensi del film?|Was hältst du von dem Film?|Secondo me è molto bello.|Alle sei.|Mi fa male la testa.
22|Cosa c'è? Sembri triste.|Was ist los? Du wirkst traurig.|Mi manca la mia famiglia.|È molto economico.|Prendo l'autobus.
23|Ha una prenotazione?|Haben Sie eine Reservierung?|Sì, a nome Müller.|C'è il sole.|Gioco a calcio.
24|Dove abitavi da piccolo?|Wo hast du als Kind gewohnt?|In un paese vicino a Firenze.|Domani alle dieci.|Con la carta.`);
})();
