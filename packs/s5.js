/* ===== Abschnitt 5 „Gesellschaft und Welt“ (B2) für es, fr, en, it ===== */
(function(){
const C = "#0E9F9A";
const add = (code, sec, dlg) => {
  const P = LEL_PACKS[code]; if(!P) return;
  P.PATH_SECTIONS.push(sec);
  P.DIALOGS = P.DIALOGS.trim() + "\n" + dlg.trim();
  P.LANG.status = P.LANG.status.replace(/^[^·]+ · Abschnitt \d von 6/, "B2 · Abschnitt 5 von 6");
};
const D = {
 u25:["🌍","Umwelt","Klima, Müll, Energie."],
 u26:["💻","Technik","Handy, Internet, Apps."],
 u27:["💭","Was wäre, wenn …","Wünsche und Hypothesen."],
 u28:["🎭","Kultur","Kunst, Bücher, Feste."],
 u29:["📝","Beschwerden","Höflich und formell reklamieren."],
 u30:["📰","Nachrichten","Zeitung, Politik, Passiv."]
};
const unit = (id, pt, words, sents) => ({id, e:D[id][0], title:D[id][1], pt, desc:D[id][2], words, sents});

/* ---------- Spanisch ---------- */
add("es", {id:"s5", title:"Gesellschaft und Welt", pt:"La sociedad y el mundo", level:"B2", color:C, units:[
 unit("u25", "El medio ambiente", `el medio ambiente|die Umwelt
el cambio climático|der Klimawandel
la contaminación|die Verschmutzung
reciclar|recyceln
la basura|der Müll
la energía renovable|die erneuerbare Energie
ahorrar|sparen
el plástico|das Plastik
proteger|schützen
la naturaleza|die Natur`, `Deberíamos usar menos plástico.|Wir sollten weniger Plastik verwenden.|Condicional|deber im Condicional = sollte.
Es importante que reciclemos la basura.|Es ist wichtig, dass wir den Müll recyceln.|Subjuntivo|Nach „es importante que“ folgt der Subjuntivo.
El cambio climático es uno de los mayores problemas.|Der Klimawandel ist eines der größten Probleme.|Superlativ|uno de los mayores = eines der größten.
Si todos ahorramos energía, podemos cambiar algo.|Wenn wir alle Energie sparen, können wir etwas ändern.|Bedingung|Reale Bedingung: si + Präsens.
Hay que proteger la naturaleza.|Man muss die Natur schützen.|hay que|
Cada vez hay más coches eléctricos.|Es gibt immer mehr Elektroautos.|cada vez más|cada vez más = immer mehr.`),
 unit("u26", "La tecnología", `el móvil|das Handy
la aplicación|die App
la contraseña|das Passwort
descargar|herunterladen
la pantalla|der Bildschirm
las redes sociales|die sozialen Netzwerke
el ordenador|der Computer
la batería|der Akku
funcionar|funktionieren
guardar|speichern`, `Mi móvil no funciona.|Mein Handy funktioniert nicht.|funcionar|
He olvidado mi contraseña.|Ich habe mein Passwort vergessen.|Perfecto|
¿Me puedes enviar el enlace?|Kannst du mir den Link schicken?|Pronomen|Pronomen vor dem konjugierten Verb – oder angehängt: puedes enviarme.
La aplicación que me recomendaste es muy útil.|Die App, die du mir empfohlen hast, ist sehr nützlich.|Relativsatz|„que“ = der, die, das (Relativpronomen).
Paso demasiado tiempo en las redes sociales.|Ich verbringe zu viel Zeit in den sozialen Netzwerken.|pasar|
No te olvides de guardar el documento.|Vergiss nicht, das Dokument zu speichern.|Imperativ|Verneinter Imperativ: no + Subjuntivo.`),
 unit("u27", "¿Y si…?", `si tuviera|wenn ich hätte
si fuera|wenn ich wäre
me gustaría|ich würde gern
podría|ich könnte
tendría|ich hätte (würde haben)
haría|ich würde machen
ojalá|hoffentlich
el deseo|der Wunsch
la lotería|die Lotterie
en tu lugar|an deiner Stelle`, `Si tuviera más tiempo, aprendería a tocar la guitarra.|Wenn ich mehr Zeit hätte, würde ich Gitarre spielen lernen.|Irreale Bedingung|si + Subjuntivo imperfecto, dann Condicional.
Si fuera rico, viajaría por todo el mundo.|Wenn ich reich wäre, würde ich um die ganze Welt reisen.|Irreale Bedingung|ser → fuera.
Me gustaría vivir en el extranjero.|Ich würde gern im Ausland leben.|Condicional|
Yo en tu lugar hablaría con él.|An deiner Stelle würde ich mit ihm sprechen.|Rat|
¿Qué harías si ganaras la lotería?|Was würdest du machen, wenn du im Lotto gewinnen würdest?|Irreale Bedingung|hacer → haría.
Ojalá haga buen tiempo mañana.|Hoffentlich ist morgen schönes Wetter.|ojalá|Nach „ojalá“ steht immer der Subjuntivo.`),
 unit("u28", "La cultura", `la exposición|die Ausstellung
el museo|das Museum
la obra de teatro|das Theaterstück
el concierto|das Konzert
la entrada|die Eintrittskarte
el escritor|der Schriftsteller
la novela|der Roman
el cuadro|das Gemälde
la tradición|die Tradition
la fiesta|das Fest`, `¿Has visto la nueva exposición en el Prado?|Hast du die neue Ausstellung im Prado gesehen?|Perfecto|
Las entradas para el concierto ya están agotadas.|Die Karten für das Konzert sind schon ausverkauft.|estar|
Es una novela que trata de la guerra civil.|Es ist ein Roman, der vom Bürgerkrieg handelt.|tratar de|tratar de = handeln von.
Este cuadro fue pintado por Goya.|Dieses Gemälde wurde von Goya gemalt.|Passiv|ser + Partizip + por = Passiv.
En mi región hay muchas fiestas tradicionales.|In meiner Region gibt es viele traditionelle Feste.|haber|
Me encantaría ir al teatro contigo.|Ich würde sehr gern mit dir ins Theater gehen.|Condicional|`),
 unit("u29", "Reclamaciones", `la reclamación|die Beschwerde
el problema|das Problem
el cliente|der Kunde
devolver|zurückgeben
el reembolso|die Rückerstattung
la factura|die Rechnung
roto|kaputt
el retraso|die Verspätung
solucionar|lösen
estimado|sehr geehrter`, `Quisiera hacer una reclamación.|Ich möchte mich beschweren.|Höflichkeit|„quisiera“ ist sehr höflich (Subjuntivo imperfecto).
El producto llegó roto.|Das Produkt kam kaputt an.|Indefinido|
Me gustaría devolver estos zapatos.|Ich würde gern diese Schuhe zurückgeben.|Condicional|
¿Podrían devolverme el dinero?|Könnten Sie mir das Geld zurückerstatten?|Condicional|Höfliche Bitte: podría / podrían.
El tren tuvo un retraso de dos horas.|Der Zug hatte zwei Stunden Verspätung.|Indefinido|tener → tuvo.
Le agradecería que me respondiera pronto.|Ich wäre Ihnen dankbar, wenn Sie mir bald antworten würden.|Formell|Formelle Briefe: Condicional + Subjuntivo.`),
 unit("u30", "Las noticias", `las noticias|die Nachrichten
el periódico|die Zeitung
el gobierno|die Regierung
las elecciones|die Wahlen
la ley|das Gesetz
la crisis|die Krise
la economía|die Wirtschaft
según|laut / gemäß
aumentar|steigen
anunciar|ankündigen`, `Según el periódico, los precios han aumentado.|Laut der Zeitung sind die Preise gestiegen.|según|
El nuevo puente fue inaugurado ayer.|Die neue Brücke wurde gestern eingeweiht.|Passiv|ser + Partizip: Das Partizip richtet sich nach dem Subjekt.
Se han vendido más coches que el año pasado.|Es wurden mehr Autos verkauft als letztes Jahr.|Pasiva refleja|„se“ + Verb ist im Alltag die häufigste Passivform.
El gobierno anunció una nueva ley.|Die Regierung kündigte ein neues Gesetz an.|Indefinido|
Las elecciones se celebrarán en mayo.|Die Wahlen finden im Mai statt.|Futur|celebrarse = stattfinden.
Dicen que la economía va a mejorar.|Man sagt, dass sich die Wirtschaft verbessern wird.|dicen que|„dicen que“ = man sagt, dass.`)
]}, `25|¿Qué podemos hacer por el medio ambiente?|Was können wir für die Umwelt tun?|Usar menos plástico.|Mi móvil no funciona.|Ayer fui al cine.
26|¿Por qué no me contestas?|Warum antwortest du mir nicht?|Mi móvil no tiene batería.|Hace frío.|Me gusta la novela.
27|¿Qué harías con un millón de euros?|Was würdest du mit einer Million Euro machen?|Compraría una casa en la playa.|Tengo fiebre.|A las tres.
28|¿Vamos al concierto el sábado?|Gehen wir am Samstag ins Konzert?|Sí, ¡me encantaría!|El tren tuvo retraso.|Reciclo la basura.
29|¿En qué puedo ayudarle?|Wie kann ich Ihnen helfen?|Quisiera devolver este abrigo.|Hace sol.|Me gustan los museos.
30|¿Has leído las noticias hoy?|Hast du heute die Nachrichten gelesen?|Sí, habrá elecciones en mayo.|Estoy cansado.|Mi contraseña.`);

/* ---------- Französisch ---------- */
add("fr", {id:"s5", title:"Gesellschaft und Welt", pt:"La société et le monde", level:"B2", color:C, units:[
 unit("u25", "L'environnement", `l'environnement|die Umwelt
le changement climatique|der Klimawandel
la pollution|die Verschmutzung
recycler|recyceln
les déchets|der Müll
l'énergie renouvelable|die erneuerbare Energie
économiser|sparen
le plastique|das Plastik
protéger|schützen
la nature|die Natur`, `Nous devrions utiliser moins de plastique.|Wir sollten weniger Plastik verwenden.|Conditionnel|devoir im Conditionnel = sollte.
Il est important que nous recyclions nos déchets.|Es ist wichtig, dass wir unseren Müll recyceln.|Subjonctif|Nach „il est important que“ folgt der Subjonctif.
Le changement climatique est l'un des plus grands problèmes.|Der Klimawandel ist eines der größten Probleme.|Superlativ|
Si tout le monde économise de l'énergie, on peut changer les choses.|Wenn alle Energie sparen, kann man etwas ändern.|Bedingung|Reale Bedingung: si + Präsens.
Il faut protéger la nature.|Man muss die Natur schützen.|il faut|
Il y a de plus en plus de voitures électriques.|Es gibt immer mehr Elektroautos.|de plus en plus|de plus en plus = immer mehr.`),
 unit("u26", "La technologie", `le portable|das Handy
l'application|die App
le mot de passe|das Passwort
télécharger|herunterladen
l'écran|der Bildschirm
les réseaux sociaux|die sozialen Netzwerke
l'ordinateur|der Computer
la batterie|der Akku
marcher|funktionieren
enregistrer|speichern`, `Mon portable ne marche pas.|Mein Handy funktioniert nicht.|marcher|Im Alltag: marcher = funktionieren.
J'ai oublié mon mot de passe.|Ich habe mein Passwort vergessen.|Passé composé|
Tu peux m'envoyer le lien ?|Kannst du mir den Link schicken?|Pronomen|Das Pronomen steht vor dem Infinitiv: m'envoyer.
L'application que tu m'as conseillée est très utile.|Die App, die du mir empfohlen hast, ist sehr nützlich.|Relativsatz|„que“ für das Objekt; das Partizip richtet sich danach: conseillée.
Je passe trop de temps sur les réseaux sociaux.|Ich verbringe zu viel Zeit in den sozialen Netzwerken.|passer|
N'oublie pas d'enregistrer le document.|Vergiss nicht, das Dokument zu speichern.|Imperativ|`),
 unit("u27", "Et si… ?", `si j'avais|wenn ich hätte
si j'étais|wenn ich wäre
j'aimerais|ich würde gern
je pourrais|ich könnte
j'aurais|ich hätte (würde haben)
je ferais|ich würde machen
pourvu que|hoffentlich
le souhait|der Wunsch
le loto|das Lotto
à ta place|an deiner Stelle`, `Si j'avais plus de temps, j'apprendrais à jouer de la guitare.|Wenn ich mehr Zeit hätte, würde ich Gitarre spielen lernen.|Irreale Bedingung|si + Imparfait, dann Conditionnel.
Si j'étais riche, je voyagerais dans le monde entier.|Wenn ich reich wäre, würde ich um die ganze Welt reisen.|Irreale Bedingung|
J'aimerais vivre à l'étranger.|Ich würde gern im Ausland leben.|Conditionnel|
À ta place, je lui parlerais.|An deiner Stelle würde ich mit ihm sprechen.|Rat|lui = ihm / ihr.
Qu'est-ce que tu ferais si tu gagnais au loto ?|Was würdest du machen, wenn du im Lotto gewinnen würdest?|Irreale Bedingung|faire → ferais.
Pourvu qu'il fasse beau demain !|Hoffentlich ist morgen schönes Wetter!|Subjonctif|Nach „pourvu que“ steht der Subjonctif.`),
 unit("u28", "La culture", `l'exposition|die Ausstellung
le musée|das Museum
la pièce de théâtre|das Theaterstück
le concert|das Konzert
la place|der Platz (Sitzplatz)
l'écrivain|der Schriftsteller
le roman|der Roman
le tableau|das Gemälde
la tradition|die Tradition
la fête|das Fest`, `Tu as vu la nouvelle exposition au Louvre ?|Hast du die neue Ausstellung im Louvre gesehen?|Passé composé|
Il n'y a plus de places pour le concert.|Es gibt keine Plätze mehr für das Konzert.|Verneinung|ne … plus = nicht mehr.
C'est un roman qui parle de la guerre.|Es ist ein Roman, der vom Krieg handelt.|Relativsatz|„qui“ für das Subjekt.
Ce tableau a été peint par Monet.|Dieses Gemälde wurde von Monet gemalt.|Passiv|être + Partizip + par.
Dans ma région, il y a beaucoup de fêtes traditionnelles.|In meiner Region gibt es viele traditionelle Feste.|il y a|
J'adorerais aller au théâtre avec toi.|Ich würde sehr gern mit dir ins Theater gehen.|Conditionnel|`),
 unit("u29", "Les réclamations", `la réclamation|die Beschwerde
le problème|das Problem
le client|der Kunde
rendre|zurückgeben
le remboursement|die Rückerstattung
la facture|die Rechnung
cassé|kaputt
le retard|die Verspätung
résoudre|lösen
Madame, Monsieur|Sehr geehrte Damen und Herren`, `Je voudrais faire une réclamation.|Ich möchte mich beschweren.|Höflichkeit|
Le produit est arrivé cassé.|Das Produkt kam kaputt an.|Passé composé|arriver bildet es mit „être“.
J'aimerais rendre ces chaussures.|Ich würde gern diese Schuhe zurückgeben.|Conditionnel|
Pourriez-vous me rembourser ?|Könnten Sie mir das Geld zurückerstatten?|Conditionnel|Höfliche Frage mit Umstellung: pourriez-vous.
Le train a eu deux heures de retard.|Der Zug hatte zwei Stunden Verspätung.|Passé composé|
Je vous serais reconnaissant de me répondre rapidement.|Ich wäre Ihnen dankbar, wenn Sie mir bald antworten würden.|Formell|Typische Formel in formellen Briefen.`),
 unit("u30", "Les informations", `les informations|die Nachrichten
le journal|die Zeitung
le gouvernement|die Regierung
les élections|die Wahlen
la loi|das Gesetz
la crise|die Krise
l'économie|die Wirtschaft
selon|laut / gemäß
augmenter|steigen
annoncer|ankündigen`, `Selon le journal, les prix ont augmenté.|Laut der Zeitung sind die Preise gestiegen.|selon|
Le nouveau pont a été inauguré hier.|Die neue Brücke wurde gestern eingeweiht.|Passiv|
On a vendu plus de voitures que l'année dernière.|Man hat mehr Autos verkauft als letztes Jahr.|on|Statt Passiv oft „on“.
Le gouvernement a annoncé une nouvelle loi.|Die Regierung hat ein neues Gesetz angekündigt.|Passé composé|
Les élections auront lieu en mai.|Die Wahlen finden im Mai statt.|Futur|avoir lieu = stattfinden.
On dit que l'économie va s'améliorer.|Man sagt, dass sich die Wirtschaft verbessern wird.|on dit que|`)
]}, `25|Qu'est-ce qu'on peut faire pour l'environnement ?|Was können wir für die Umwelt tun?|Utiliser moins de plastique.|Mon portable ne marche pas.|Hier, je suis allé au cinéma.
26|Pourquoi tu ne réponds pas ?|Warum antwortest du nicht?|Mon portable n'a plus de batterie.|Il fait froid.|J'aime ce roman.
27|Qu'est-ce que tu ferais avec un million d'euros ?|Was würdest du mit einer Million Euro machen?|J'achèterais une maison au bord de la mer.|J'ai de la fièvre.|À trois heures.
28|On va au concert samedi ?|Gehen wir am Samstag ins Konzert?|Oui, avec plaisir !|Le train a eu du retard.|Je recycle mes déchets.
29|Je peux vous aider ?|Kann ich Ihnen helfen?|Je voudrais rendre ce manteau.|Il fait beau.|J'aime les musées.
30|Tu as lu les informations aujourd'hui ?|Hast du heute die Nachrichten gelesen?|Oui, il y aura des élections en mai.|Je suis fatigué.|Mon mot de passe.`);

/* ---------- Englisch ---------- */
add("en", {id:"s5", title:"Gesellschaft und Welt", pt:"Society and the world", level:"B2", color:C, units:[
 unit("u25", "The environment", `the environment|die Umwelt
climate change|der Klimawandel
pollution|die Verschmutzung
to recycle|recyceln
rubbish|der Müll
renewable energy|erneuerbare Energie
to save|sparen
plastic|das Plastik
to protect|schützen
nature|die Natur`, `We should use less plastic.|Wir sollten weniger Plastik verwenden.|should|should = sollte (Rat, Empfehlung).
It's important that we recycle our rubbish.|Es ist wichtig, dass wir unseren Müll recyceln.|that-Satz|
Climate change is one of the biggest problems.|Der Klimawandel ist eines der größten Probleme.|Superlativ|big → bigger → the biggest.
If everyone saves energy, we can make a difference.|Wenn alle Energie sparen, können wir etwas bewirken.|If-Satz Typ 1|Reale Bedingung: if + Simple Present.
We have to protect nature.|Wir müssen die Natur schützen.|have to|
There are more and more electric cars.|Es gibt immer mehr Elektroautos.|more and more|more and more = immer mehr.`),
 unit("u26", "Technology", `the mobile phone|das Handy
the app|die App
the password|das Passwort
to download|herunterladen
the screen|der Bildschirm
social media|die sozialen Medien
the computer|der Computer
the battery|der Akku
to work|funktionieren
to log in|sich anmelden`, `My phone isn't working.|Mein Handy funktioniert nicht.|Verlaufsform|
I've forgotten my password.|Ich habe mein Passwort vergessen.|Present Perfect|
Can you send me the link?|Kannst du mir den Link schicken?|Objekt|
The app that you recommended is really useful.|Die App, die du empfohlen hast, ist wirklich nützlich.|Relativsatz|„that“ oder „which“ für Dinge, „who“ für Personen.
I spend too much time on social media.|Ich verbringe zu viel Zeit in den sozialen Medien.|spend|
Don't forget to save the document.|Vergiss nicht, das Dokument zu speichern.|Imperativ|„save“ heißt hier speichern, sonst auch sparen.`),
 unit("u27", "What if…?", `if I had|wenn ich hätte
if I were|wenn ich wäre
I'd like|ich würde gern
I could|ich könnte
I would have|ich hätte (würde haben)
I would do|ich würde machen
I wish|ich wünschte
the wish|der Wunsch
the lottery|die Lotterie
if I were you|an deiner Stelle`, `If I had more time, I would learn the guitar.|Wenn ich mehr Zeit hätte, würde ich Gitarre lernen.|If-Satz Typ 2|if + Simple Past, dann would + Grundform.
If I were rich, I would travel around the world.|Wenn ich reich wäre, würde ich um die Welt reisen.|If-Satz Typ 2|Gehoben: if I were (statt was).
I'd like to live abroad.|Ich würde gern im Ausland leben.|would like|
If I were you, I'd talk to him.|An deiner Stelle würde ich mit ihm reden.|Rat|
What would you do if you won the lottery?|Was würdest du tun, wenn du im Lotto gewinnen würdest?|If-Satz Typ 2|
I hope the weather is nice tomorrow.|Hoffentlich ist morgen schönes Wetter.|hope|„hoffentlich“ = I hope …`),
 unit("u28", "Culture", `the exhibition|die Ausstellung
the museum|das Museum
the play|das Theaterstück
the concert|das Konzert
the seat|der Platz (Sitzplatz)
the writer|der Schriftsteller
the novel|der Roman
the painting|das Gemälde
the tradition|die Tradition
the festival|das Fest`, `Have you seen the new exhibition at the Tate?|Hast du die neue Ausstellung in der Tate gesehen?|Present Perfect|
The concert is already sold out.|Das Konzert ist schon ausverkauft.|Adjektive|
It's a novel about the war.|Es ist ein Roman über den Krieg.|Präpositionen|
This painting was painted by Turner.|Dieses Gemälde wurde von Turner gemalt.|Passiv|was / were + Partizip + by.
There are lots of traditional festivals in my region.|In meiner Region gibt es viele traditionelle Feste.|there are|
I'd love to go to the theatre with you.|Ich würde sehr gern mit dir ins Theater gehen.|would love|Amerikanisch: theater.`),
 unit("u29", "Complaints", `the complaint|die Beschwerde
the problem|das Problem
the customer|der Kunde
to return|zurückgeben
the refund|die Rückerstattung
the invoice|die Rechnung
broken|kaputt
the delay|die Verspätung
to solve|lösen
Dear Sir or Madam|Sehr geehrte Damen und Herren`, `I'd like to make a complaint.|Ich möchte mich beschweren.|Höflichkeit|
The product arrived broken.|Das Produkt kam kaputt an.|Simple Past|
I'd like to return these shoes.|Ich würde gern diese Schuhe zurückgeben.|would like|
Could I have a refund, please?|Könnte ich bitte mein Geld zurückbekommen?|Höflichkeit|
The train was delayed by two hours.|Der Zug hatte zwei Stunden Verspätung.|Passiv|
I look forward to hearing from you.|Ich freue mich auf Ihre Antwort.|Formell|Typischer Briefschluss: look forward to + -ing.`),
 unit("u30", "The news", `the news|die Nachrichten
the newspaper|die Zeitung
the government|die Regierung
the election|die Wahl
the law|das Gesetz
the crisis|die Krise
the economy|die Wirtschaft
according to|laut
to rise|steigen
to announce|ankündigen`, `According to the newspaper, prices have risen.|Laut der Zeitung sind die Preise gestiegen.|according to|
The new bridge was opened yesterday.|Die neue Brücke wurde gestern eröffnet.|Passiv|
More cars have been sold than last year.|Es wurden mehr Autos verkauft als letztes Jahr.|Passiv|Present Perfect Passiv: have been + Partizip.
The government announced a new law.|Die Regierung kündigte ein neues Gesetz an.|Simple Past|
The election will be held in May.|Die Wahl findet im Mai statt.|Passiv|be held = stattfinden.
They say the economy is going to improve.|Man sagt, die Wirtschaft wird sich verbessern.|they say|„they say“ = man sagt.`)
]}, `25|What can we do for the environment?|Was können wir für die Umwelt tun?|Use less plastic.|My phone isn't working.|I went to the cinema.
26|Why aren't you answering?|Warum antwortest du nicht?|My battery's dead.|It's cold.|I like the novel.
27|What would you do with a million pounds?|Was würdest du mit einer Million Pfund machen?|I'd buy a house by the sea.|I've got a temperature.|At three.
28|Shall we go to the concert on Saturday?|Gehen wir am Samstag ins Konzert?|Yes, I'd love to!|The train was late.|I recycle my rubbish.
29|How can I help you?|Wie kann ich Ihnen helfen?|I'd like to return this coat.|It's sunny.|I like museums.
30|Have you read the news today?|Hast du heute die Nachrichten gelesen?|Yes, there's an election in May.|I'm tired.|My password.`);

/* ---------- Italienisch ---------- */
add("it", {id:"s5", title:"Gesellschaft und Welt", pt:"La società e il mondo", level:"B2", color:C, units:[
 unit("u25", "L'ambiente", `l'ambiente|die Umwelt
il cambiamento climatico|der Klimawandel
l'inquinamento|die Verschmutzung
riciclare|recyceln
i rifiuti|der Müll
l'energia rinnovabile|die erneuerbare Energie
risparmiare|sparen
la plastica|das Plastik
proteggere|schützen
la natura|die Natur`, `Dovremmo usare meno plastica.|Wir sollten weniger Plastik verwenden.|Condizionale|dovere im Condizionale = sollte.
È importante che ricicliamo i rifiuti.|Es ist wichtig, dass wir den Müll recyceln.|Congiuntivo|Nach „è importante che“ folgt der Congiuntivo.
Il cambiamento climatico è uno dei problemi più grandi.|Der Klimawandel ist eines der größten Probleme.|Superlativ|
Se tutti risparmiamo energia, possiamo cambiare qualcosa.|Wenn wir alle Energie sparen, können wir etwas ändern.|Bedingung|Reale Bedingung: se + Präsens.
Bisogna proteggere la natura.|Man muss die Natur schützen.|bisogna|
Ci sono sempre più auto elettriche.|Es gibt immer mehr Elektroautos.|sempre più|sempre più = immer mehr.`),
 unit("u26", "La tecnologia", `il cellulare|das Handy
l'app|die App
la password|das Passwort
scaricare|herunterladen
lo schermo|der Bildschirm
i social|die sozialen Netzwerke
il computer|der Computer
la batteria|der Akku
funzionare|funktionieren
salvare|speichern`, `Il mio cellulare non funziona.|Mein Handy funktioniert nicht.|funzionare|
Ho dimenticato la password.|Ich habe das Passwort vergessen.|Passato prossimo|
Mi puoi mandare il link?|Kannst du mir den Link schicken?|Pronomen|
L'app che mi hai consigliato è molto utile.|Die App, die du mir empfohlen hast, ist sehr nützlich.|Relativsatz|„che“ = der, die, das.
Passo troppo tempo sui social.|Ich verbringe zu viel Zeit in den sozialen Netzwerken.|passare|
Non dimenticare di salvare il documento.|Vergiss nicht, das Dokument zu speichern.|Imperativ|Verneinter Imperativ (du): non + Infinitiv.`),
 unit("u27", "E se…?", `se avessi|wenn ich hätte
se fossi|wenn ich wäre
mi piacerebbe|ich würde gern
potrei|ich könnte
avrei|ich hätte (würde haben)
farei|ich würde machen
magari|hoffentlich / vielleicht
il desiderio|der Wunsch
la lotteria|die Lotterie
al posto tuo|an deiner Stelle`, `Se avessi più tempo, imparerei a suonare la chitarra.|Wenn ich mehr Zeit hätte, würde ich Gitarre spielen lernen.|Irreale Bedingung|se + Congiuntivo imperfetto, dann Condizionale.
Se fossi ricco, viaggerei per tutto il mondo.|Wenn ich reich wäre, würde ich um die ganze Welt reisen.|Irreale Bedingung|
Mi piacerebbe vivere all'estero.|Ich würde gern im Ausland leben.|Condizionale|
Al posto tuo, gli parlerei.|An deiner Stelle würde ich mit ihm sprechen.|Rat|gli = ihm.
Cosa faresti se vincessi alla lotteria?|Was würdest du machen, wenn du im Lotto gewinnen würdest?|Irreale Bedingung|
Speriamo che domani faccia bel tempo.|Hoffentlich ist morgen schönes Wetter.|Congiuntivo|Nach „speriamo che“ folgt der Congiuntivo.`),
 unit("u28", "La cultura", `la mostra|die Ausstellung
il museo|das Museum
lo spettacolo teatrale|das Theaterstück
il concerto|das Konzert
il posto|der Platz (Sitzplatz)
lo scrittore|der Schriftsteller
il romanzo|der Roman
il quadro|das Gemälde
la tradizione|die Tradition
la festa|das Fest`, `Hai visto la nuova mostra agli Uffizi?|Hast du die neue Ausstellung in den Uffizien gesehen?|Passato prossimo|
I biglietti per il concerto sono esauriti.|Die Karten für das Konzert sind ausverkauft.|essere|
È un romanzo che parla della guerra.|Es ist ein Roman, der vom Krieg handelt.|Relativsatz|
Questo quadro è stato dipinto da Leonardo.|Dieses Gemälde wurde von Leonardo gemalt.|Passiv|essere + Partizip + da.
Nella mia regione ci sono molte feste tradizionali.|In meiner Region gibt es viele traditionelle Feste.|esserci|
Mi piacerebbe tanto andare a teatro con te.|Ich würde sehr gern mit dir ins Theater gehen.|Condizionale|`),
 unit("u29", "I reclami", `il reclamo|die Beschwerde
il problema|das Problem
il cliente|der Kunde
restituire|zurückgeben
il rimborso|die Rückerstattung
la fattura|die Rechnung
rotto|kaputt
il ritardo|die Verspätung
risolvere|lösen
gentile signore|sehr geehrter Herr`, `Vorrei fare un reclamo.|Ich möchte mich beschweren.|Höflichkeit|
Il prodotto è arrivato rotto.|Das Produkt kam kaputt an.|Passato prossimo|
Vorrei restituire queste scarpe.|Ich würde gern diese Schuhe zurückgeben.|Condizionale|
Potrebbe rimborsarmi?|Könnten Sie mir das Geld zurückerstatten?|Condizionale|
Il treno ha avuto due ore di ritardo.|Der Zug hatte zwei Stunden Verspätung.|Passato prossimo|
La ringrazio in anticipo per la Sua risposta.|Ich danke Ihnen im Voraus für Ihre Antwort.|Formell|In formellen Briefen schreibt man „La“ und „Sua“ groß.`),
 unit("u30", "Le notizie", `le notizie|die Nachrichten
il giornale|die Zeitung
il governo|die Regierung
le elezioni|die Wahlen
la legge|das Gesetz
la crisi|die Krise
l'economia|die Wirtschaft
secondo|laut / gemäß
aumentare|steigen
annunciare|ankündigen`, `Secondo il giornale, i prezzi sono aumentati.|Laut der Zeitung sind die Preise gestiegen.|secondo|
Il nuovo ponte è stato inaugurato ieri.|Die neue Brücke wurde gestern eingeweiht.|Passiv|
Si sono vendute più auto dell'anno scorso.|Es wurden mehr Autos verkauft als letztes Jahr.|Si passivante|„si“ + Verb als Passiv.
Il governo ha annunciato una nuova legge.|Die Regierung hat ein neues Gesetz angekündigt.|Passato prossimo|
Le elezioni si terranno a maggio.|Die Wahlen finden im Mai statt.|Futuro|tenersi = stattfinden.
Si dice che l'economia migliorerà.|Man sagt, dass sich die Wirtschaft verbessern wird.|si dice che|`)
]}, `25|Cosa possiamo fare per l'ambiente?|Was können wir für die Umwelt tun?|Usare meno plastica.|Il mio cellulare non funziona.|Ieri sono andato al cinema.
26|Perché non rispondi?|Warum antwortest du nicht?|Ho il cellulare scarico.|Fa freddo.|Mi piace il romanzo.
27|Cosa faresti con un milione di euro?|Was würdest du mit einer Million Euro machen?|Comprerei una casa al mare.|Ho la febbre.|Alle tre.
28|Andiamo al concerto sabato?|Gehen wir am Samstag ins Konzert?|Sì, molto volentieri!|Il treno era in ritardo.|Riciclo i rifiuti.
29|Posso aiutarLa?|Kann ich Ihnen helfen?|Vorrei restituire questo cappotto.|C'è il sole.|Mi piacciono i musei.
30|Hai letto le notizie oggi?|Hast du heute die Nachrichten gelesen?|Sì, a maggio ci saranno le elezioni.|Sono stanco.|La mia password.`);
})();
