/* ===== Abschnitt 5 „Gesellschaft und Welt“ (B2) für pl, tr, de ===== */
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

/* ---------- Polnisch ---------- */
add("pl", {id:"s5", title:"Gesellschaft und Welt", pt:"Społeczeństwo i świat", level:"B2", color:C, units:[
 unit("u25", "Środowisko", `środowisko|die Umwelt
zmiany klimatu|der Klimawandel
zanieczyszczenie|die Verschmutzung
segregować śmieci|Müll trennen
śmieci|der Müll
energia odnawialna|erneuerbare Energie
oszczędzać|sparen
plastik|das Plastik
chronić|schützen
przyroda|die Natur`, `Powinniśmy używać mniej plastiku.|Wir sollten weniger Plastik verwenden.|powinien|powinniśmy = wir sollten. Nach „mniej“ steht der Genitiv.
Ważne, żebyśmy segregowali śmieci.|Es ist wichtig, dass wir den Müll trennen.|żeby|Nach „ważne“ steht „żeby“ + Vergangenheitsform.
Zmiany klimatu to jeden z największych problemów.|Der Klimawandel ist eines der größten Probleme.|Superlativ|jeden z + Genitiv Plural.
Jeśli wszyscy będziemy oszczędzać energię, możemy coś zmienić.|Wenn wir alle Energie sparen, können wir etwas ändern.|Bedingung|jeśli + Futur für reale Bedingungen.
Trzeba chronić przyrodę.|Man muss die Natur schützen.|trzeba|
Jest coraz więcej samochodów elektrycznych.|Es gibt immer mehr Elektroautos.|coraz więcej|coraz więcej + Genitiv = immer mehr.`),
 unit("u26", "Technologia", `komórka|das Handy
aplikacja|die App
hasło|das Passwort
pobrać|herunterladen
ekran|der Bildschirm
media społecznościowe|die sozialen Medien
komputer|der Computer
bateria|der Akku
działać|funktionieren
zapisać|speichern`, `Moja komórka nie działa.|Mein Handy funktioniert nicht.|działać|
Zapomniałem hasła.|Ich habe mein Passwort vergessen.|Genitiv|zapomnieć + Genitiv. Frau: zapomniałam.
Możesz mi wysłać link?|Kannst du mir den Link schicken?|Dativ|
Aplikacja, którą mi poleciłeś, jest bardzo przydatna.|Die App, die du mir empfohlen hast, ist sehr nützlich.|Relativsatz|który, która, które richtet sich nach Geschlecht und Fall.
Spędzam za dużo czasu w mediach społecznościowych.|Ich verbringe zu viel Zeit in den sozialen Medien.|Lokativ|
Nie zapomnij zapisać dokumentu.|Vergiss nicht, das Dokument zu speichern.|Imperativ|`),
 unit("u27", "Co by było, gdyby…", `gdybym miał|wenn ich hätte (Mann)
gdybym był|wenn ich wäre (Mann)
chciałbym|ich würde gern (Mann)
mógłbym|ich könnte (Mann)
zrobiłbym|ich würde machen (Mann)
kupiłbym|ich würde kaufen (Mann)
oby|hoffentlich
życzenie|der Wunsch
loteria|die Lotterie
na twoim miejscu|an deiner Stelle`, `Gdybym miał więcej czasu, nauczyłbym się grać na gitarze.|Wenn ich mehr Zeit hätte, würde ich Gitarre spielen lernen.|Konditional|gdyby + Endung -m, dann Vergangenheitsform + by: nauczyłbym.
Gdybym był bogaty, podróżowałbym po całym świecie.|Wenn ich reich wäre, würde ich um die ganze Welt reisen.|Konditional|Frau: gdybym była bogata, podróżowałabym.
Chciałbym mieszkać za granicą.|Ich würde gern im Ausland leben.|Konditional|Frau: chciałabym.
Na twoim miejscu porozmawiałbym z nim.|An deiner Stelle würde ich mit ihm sprechen.|Rat|
Co byś zrobił, gdybyś wygrał na loterii?|Was würdest du machen, wenn du im Lotto gewinnen würdest?|Konditional|
Oby jutro była ładna pogoda.|Hoffentlich ist morgen schönes Wetter.|oby|oby + Vergangenheitsform.`),
 unit("u28", "Kultura", `wystawa|die Ausstellung
muzeum|das Museum
sztuka teatralna|das Theaterstück
koncert|das Konzert
miejsce|der Platz
pisarz|der Schriftsteller
powieść|der Roman
obraz|das Gemälde
tradycja|die Tradition
święto|das Fest`, `Widziałeś nową wystawę w muzeum?|Hast du die neue Ausstellung im Museum gesehen?|Vergangenheit|
Bilety na koncert są już wyprzedane.|Die Karten für das Konzert sind schon ausverkauft.|Passiv|
To powieść, która opowiada o wojnie.|Das ist ein Roman, der vom Krieg erzählt.|Relativsatz|
Ten obraz został namalowany przez Matejkę.|Dieses Gemälde wurde von Matejko gemalt.|Passiv|zostać + Partizip + przez = wurde … von.
W moim regionie jest dużo tradycyjnych świąt.|In meiner Region gibt es viele traditionelle Feste.|Genitiv|dużo + Genitiv Plural.
Chętnie poszedłbym z tobą do teatru.|Ich würde gern mit dir ins Theater gehen.|Konditional|`),
 unit("u29", "Reklamacje", `reklamacja|die Reklamation
problem|das Problem
klient|der Kunde
zwrócić|zurückgeben
zwrot pieniędzy|die Rückerstattung
faktura|die Rechnung
zepsuty|kaputt
opóźnienie|die Verspätung
rozwiązać|lösen
Szanowni Państwo|Sehr geehrte Damen und Herren`, `Chciałbym złożyć reklamację.|Ich möchte eine Reklamation einreichen.|Höflichkeit|
Produkt przyszedł zepsuty.|Das Produkt kam kaputt an.|Vergangenheit|
Chciałbym zwrócić te buty.|Ich würde gern diese Schuhe zurückgeben.|Konditional|
Czy mogliby Państwo zwrócić mi pieniądze?|Könnten Sie mir das Geld zurückerstatten?|Höflichkeit|„Państwo“ = Sie (Plural, höflich).
Pociąg miał dwie godziny opóźnienia.|Der Zug hatte zwei Stunden Verspätung.|Genitiv|
Z góry dziękuję za odpowiedź.|Vielen Dank im Voraus für Ihre Antwort.|Formell|z góry = im Voraus.`),
 unit("u30", "Wiadomości", `wiadomości|die Nachrichten
gazeta|die Zeitung
rząd|die Regierung
wybory|die Wahlen
ustawa|das Gesetz
kryzys|die Krise
gospodarka|die Wirtschaft
według|laut
rosnąć|steigen
ogłosić|ankündigen`, `Według gazety ceny wzrosły.|Laut der Zeitung sind die Preise gestiegen.|według|według + Genitiv.
Nowy most został otwarty wczoraj.|Die neue Brücke wurde gestern eröffnet.|Passiv|
Sprzedano więcej samochodów niż w zeszłym roku.|Es wurden mehr Autos verkauft als letztes Jahr.|-no/-to|Unpersönliche Form auf -no / -to: sprzedano = man verkaufte.
Rząd ogłosił nową ustawę.|Die Regierung kündigte ein neues Gesetz an.|Vergangenheit|
Wybory odbędą się w maju.|Die Wahlen finden im Mai statt.|Futur|odbyć się = stattfinden.
Mówi się, że gospodarka się poprawi.|Man sagt, dass sich die Wirtschaft verbessern wird.|mówi się|„mówi się“ = man sagt.`)
]}, `25|Co możemy zrobić dla środowiska?|Was können wir für die Umwelt tun?|Używać mniej plastiku.|Moja komórka nie działa.|Wczoraj byłem w kinie.
26|Dlaczego nie odbierasz?|Warum gehst du nicht ran?|Rozładowała mi się bateria.|Jest zimno.|Lubię tę powieść.
27|Co byś zrobił z milionem złotych?|Was würdest du mit einer Million Złoty machen?|Kupiłbym dom nad morzem.|Mam gorączkę.|O trzeciej.
28|Idziemy w sobotę na koncert?|Gehen wir am Samstag ins Konzert?|Tak, chętnie!|Pociąg się spóźnił.|Segreguję śmieci.
29|W czym mogę pomóc?|Wie kann ich helfen?|Chciałbym zwrócić ten płaszcz.|Jest słonecznie.|Lubię muzea.
30|Czytałeś dzisiaj wiadomości?|Hast du heute die Nachrichten gelesen?|Tak, w maju będą wybory.|Jestem zmęczony.|Moje hasło.`);

/* ---------- Türkisch ---------- */
add("tr", {id:"s5", title:"Gesellschaft und Welt", pt:"Toplum ve dünya", level:"B2", color:C, units:[
 unit("u25", "Çevre", `çevre|die Umwelt
iklim değişikliği|der Klimawandel
kirlilik|die Verschmutzung
geri dönüşüm|das Recycling
çöp|der Müll
yenilenebilir enerji|erneuerbare Energie
tasarruf etmek|sparen
plastik|das Plastik
korumak|schützen
doğa|die Natur`, `Daha az plastik kullanmalıyız.|Wir sollten weniger Plastik verwenden.|-meli|-meli / -malı = sollen, müssen.
Çöpleri geri dönüştürmemiz önemli.|Es ist wichtig, dass wir den Müll recyceln.|Nominalisierung|-memiz = dass wir … (wörtlich: unser Recyceln).
İklim değişikliği en büyük sorunlardan biri.|Der Klimawandel ist eines der größten Probleme.|Superlativ|en + Adjektiv = am …sten; -lerden biri = eines der …
Herkes enerji tasarrufu yaparsa bir şeyler değiştirebiliriz.|Wenn alle Energie sparen, können wir etwas ändern.|-se|Bedingung: -se / -sa = wenn.
Doğayı korumak zorundayız.|Wir müssen die Natur schützen.|zorunda|-mek zorundayız = wir müssen.
Gittikçe daha fazla elektrikli araba var.|Es gibt immer mehr Elektroautos.|gittikçe|gittikçe daha = immer mehr.`),
 unit("u26", "Teknoloji", `cep telefonu|das Handy
uygulama|die App
şifre|das Passwort
indirmek|herunterladen
ekran|der Bildschirm
sosyal medya|die sozialen Medien
bilgisayar|der Computer
şarj|die Akkuladung
bağlanmak|sich verbinden
kaydetmek|speichern`, `Telefonum çalışmıyor.|Mein Handy funktioniert nicht.|çalışmak|„çalışmak“ heißt arbeiten und funktionieren.
Şifremi unuttum.|Ich habe mein Passwort vergessen.|Vergangenheit|
Bana linki gönderebilir misin?|Kannst du mir den Link schicken?|Dativ|
Bana önerdiğin uygulama çok faydalı.|Die App, die du mir empfohlen hast, ist sehr nützlich.|Partizip|Relativsätze mit -dığı: önerdiğin = die du empfohlen hast.
Sosyal medyada çok fazla zaman geçiriyorum.|Ich verbringe zu viel Zeit in den sozialen Medien.|Lokativ|
Belgeyi kaydetmeyi unutma.|Vergiss nicht, das Dokument zu speichern.|Imperativ|Verneinter Imperativ: -me / -ma.`),
 unit("u27", "Ya olsaydı?", `param olsaydı|wenn ich Geld hätte
zengin olsaydım|wenn ich reich wäre
isterdim|ich würde gern
yapabilirdim|ich könnte
yapardım|ich würde machen
alırdım|ich würde kaufen
inşallah|hoffentlich
dilek|der Wunsch
piyango|die Lotterie
senin yerinde olsam|an deiner Stelle`, `Daha çok zamanım olsaydı gitar çalmayı öğrenirdim.|Wenn ich mehr Zeit hätte, würde ich Gitarre spielen lernen.|Irreale Bedingung|-seydi … -rdi: irreale Bedingung.
Zengin olsaydım bütün dünyayı gezerdim.|Wenn ich reich wäre, würde ich die ganze Welt bereisen.|Irreale Bedingung|
Yurt dışında yaşamak isterdim.|Ich würde gern im Ausland leben.|-rdi|
Senin yerinde olsam onunla konuşurdum.|An deiner Stelle würde ich mit ihm sprechen.|Rat|
Piyangoyu kazansan ne yapardın?|Was würdest du machen, wenn du im Lotto gewinnen würdest?|Bedingung|
İnşallah yarın hava güzel olur.|Hoffentlich ist morgen schönes Wetter.|inşallah|„inşallah“ = so Gott will, hoffentlich.`),
 unit("u28", "Kültür", `sergi|die Ausstellung
müze|das Museum
tiyatro oyunu|das Theaterstück
konser|das Konzert
yer|der Platz
yazar|der Schriftsteller
roman|der Roman
tablo|das Gemälde
gelenek|die Tradition
bayram|das Fest`, `Müzedeki yeni sergiyi gördün mü?|Hast du die neue Ausstellung im Museum gesehen?|-deki|-deki = der/die/das im … befindliche.
Konser biletleri tükendi.|Die Konzertkarten sind ausverkauft.|Vergangenheit|
Savaşı anlatan bir roman.|Es ist ein Roman, der vom Krieg erzählt.|Partizip|-an / -en = der … (Subjekt-Partizip).
Bu tablo Osman Hamdi tarafından yapıldı.|Dieses Gemälde wurde von Osman Hamdi gemalt.|Passiv|Passiv mit -il-; „tarafından“ = von.
Bölgemde birçok geleneksel bayram var.|In meiner Region gibt es viele traditionelle Feste.|var|
Seninle tiyatroya gitmeyi çok isterim.|Ich würde sehr gern mit dir ins Theater gehen.|Geniş zaman|`),
 unit("u29", "Şikâyetler", `şikâyet|die Beschwerde
sorun|das Problem
müşteri|der Kunde
iade etmek|zurückgeben
para iadesi|die Rückerstattung
fatura|die Rechnung
bozuk|kaputt
gecikme|die Verspätung
çözmek|lösen
sayın|sehr geehrte(r)`, `Şikâyette bulunmak istiyorum.|Ich möchte mich beschweren.|Höflichkeit|
Ürün bozuk geldi.|Das Produkt kam kaputt an.|Vergangenheit|
Bu ayakkabıları iade etmek istiyorum.|Ich möchte diese Schuhe zurückgeben.|istemek|
Paramı iade edebilir misiniz?|Können Sie mir mein Geld zurückerstatten?|Höflichkeit|
Tren iki saat gecikti.|Der Zug hatte zwei Stunden Verspätung.|Vergangenheit|
Cevabınız için şimdiden teşekkür ederim.|Vielen Dank im Voraus für Ihre Antwort.|Formell|şimdiden = schon jetzt, im Voraus.`),
 unit("u30", "Haberler", `haberler|die Nachrichten
gazete|die Zeitung
hükümet|die Regierung
seçim|die Wahl
kanun|das Gesetz
kriz|die Krise
ekonomi|die Wirtschaft
gazeteye göre|laut der Zeitung
artmak|steigen
açıklamak|ankündigen / erklären`, `Gazeteye göre fiyatlar arttı.|Laut der Zeitung sind die Preise gestiegen.|göre|-e göre = laut.
Yeni köprü dün açıldı.|Die neue Brücke wurde gestern eröffnet.|Passiv|açmak → açılmak (Passiv).
Geçen yıla göre daha fazla araba satıldı.|Im Vergleich zum letzten Jahr wurden mehr Autos verkauft.|Passiv|
Hükümet yeni bir kanun açıkladı.|Die Regierung kündigte ein neues Gesetz an.|Vergangenheit|
Seçimler mayısta yapılacak.|Die Wahlen finden im Mai statt.|Passiv|yapılacak = wird abgehalten.
Ekonominin düzeleceği söyleniyor.|Man sagt, dass sich die Wirtschaft erholen wird.|söyleniyor|söyleniyor = es wird gesagt, man sagt.`)
]}, `25|Çevre için ne yapabiliriz?|Was können wir für die Umwelt tun?|Daha az plastik kullanabiliriz.|Telefonum çalışmıyor.|Dün sinemaya gittim.
26|Neden telefonu açmıyorsun?|Warum gehst du nicht ran?|Şarjım bitti.|Hava soğuk.|Romanı seviyorum.
27|Bir milyon liran olsa ne yapardın?|Was würdest du mit einer Million Lira machen?|Deniz kenarında bir ev alırdım.|Ateşim var.|Saat üçte.
28|Cumartesi konsere gidelim mi?|Gehen wir am Samstag ins Konzert?|Evet, çok isterim!|Tren gecikti.|Çöpleri ayırıyorum.
29|Size nasıl yardımcı olabilirim?|Wie kann ich Ihnen helfen?|Bu montu iade etmek istiyorum.|Hava güneşli.|Müzeleri severim.
30|Bugün haberleri okudun mu?|Hast du heute die Nachrichten gelesen?|Evet, mayısta seçim var.|Yorgunum.|Şifrem.`);

/* ---------- Deutsch (Hilfssprachen: en|tr|pl|es|fr|it|pt) ---------- */
const DE = LEL_PACKS.de; if(!DE || !DE._fmt) return;
const {words, sents, dialogs, mean} = DE._fmt;
const W25 = `die Umwelt|the environment|çevre|środowisko|el medio ambiente|l'environnement|l'ambiente|o ambiente
der Klimawandel|climate change|iklim değişikliği|zmiany klimatu|el cambio climático|le changement climatique|il cambiamento climatico|as alterações climáticas
die Verschmutzung|pollution|kirlilik|zanieczyszczenie|la contaminación|la pollution|l'inquinamento|a poluição
Müll trennen|to separate rubbish|çöpleri ayırmak|segregować śmieci|separar la basura|trier les déchets|fare la differenziata|separar o lixo
der Müll|rubbish|çöp|śmieci|la basura|les déchets|i rifiuti|o lixo
erneuerbare Energie|renewable energy|yenilenebilir enerji|energia odnawialna|la energía renovable|l'énergie renouvelable|l'energia rinnovabile|a energia renovável
sparen|to save|tasarruf etmek|oszczędzać|ahorrar|économiser|risparmiare|poupar
das Plastik|plastic|plastik|plastik|el plástico|le plastique|la plastica|o plástico
schützen|to protect|korumak|chronić|proteger|protéger|proteggere|proteger
die Natur|nature|doğa|przyroda|la naturaleza|la nature|la natura|a natureza`;
const S25 = `Wir sollten weniger Plastik benutzen.|We should use less plastic.|Daha az plastik kullanmalıyız.|Powinniśmy używać mniej plastiku.|Deberíamos usar menos plástico.|Nous devrions utiliser moins de plastique.|Dovremmo usare meno plastica.|Devíamos usar menos plástico.|Konjunktiv II|„sollte“ = should (advice).
Es ist wichtig, dass wir den Müll trennen.|It's important that we separate our rubbish.|Çöpleri ayırmamız önemli.|Ważne, żebyśmy segregowali śmieci.|Es importante que separemos la basura.|Il est important que nous triions nos déchets.|È importante che facciamo la differenziata.|É importante que separemos o lixo.|Nebensätze|In Germany rubbish is separated into several bins.
Der Klimawandel ist eines der größten Probleme.|Climate change is one of the biggest problems.|İklim değişikliği en büyük sorunlardan biri.|Zmiany klimatu to jeden z największych problemów.|El cambio climático es uno de los mayores problemas.|Le changement climatique est l'un des plus grands problèmes.|Il cambiamento climatico è uno dei problemi più grandi.|As alterações climáticas são um dos maiores problemas.|Genitiv|„eines der …“ = one of the … (genitive plural).
Wenn alle Energie sparen, können wir etwas ändern.|If everyone saves energy, we can change something.|Herkes enerji tasarrufu yaparsa bir şeyler değiştirebiliriz.|Jeśli wszyscy będziemy oszczędzać energię, możemy coś zmienić.|Si todos ahorramos energía, podemos cambiar algo.|Si tout le monde économise de l'énergie, on peut changer les choses.|Se tutti risparmiamo energia, possiamo cambiare qualcosa.|Se todos poupamos energia, podemos mudar alguma coisa.|wenn|After a „wenn“ clause the main clause starts with the verb.
Man muss die Natur schützen.|We have to protect nature.|Doğayı korumak zorundayız.|Trzeba chronić przyrodę.|Hay que proteger la naturaleza.|Il faut protéger la nature.|Bisogna proteggere la natura.|É preciso proteger a natureza.|man|„man“ = one / people in general.
Es gibt immer mehr Elektroautos.|There are more and more electric cars.|Gittikçe daha fazla elektrikli araba var.|Jest coraz więcej samochodów elektrycznych.|Cada vez hay más coches eléctricos.|Il y a de plus en plus de voitures électriques.|Ci sono sempre più auto elettriche.|Há cada vez mais carros elétricos.|Vergleich|„immer mehr“ = more and more.`;
const W26 = `das Handy|the mobile phone|cep telefonu|komórka|el móvil|le portable|il cellulare|o telemóvel
die App|the app|uygulama|aplikacja|la aplicación|l'application|l'app|a aplicação
das Passwort|the password|şifre|hasło|la contraseña|le mot de passe|la password|a palavra-passe
herunterladen|to download|indirmek|pobrać|descargar|télécharger|scaricare|descarregar
der Bildschirm|the screen|ekran|ekran|la pantalla|l'écran|lo schermo|o ecrã
die sozialen Medien|social media|sosyal medya|media społecznościowe|las redes sociales|les réseaux sociaux|i social|as redes sociais
der Computer|the computer|bilgisayar|komputer|el ordenador|l'ordinateur|il computer|o computador
der Akku|the battery|şarj / batarya|bateria|la batería|la batterie|la batteria|a bateria
funktionieren|to work|çalışmak|działać|funcionar|marcher|funzionare|funcionar
speichern|to save|kaydetmek|zapisać|guardar|enregistrer|salvare|guardar`;
const S26 = `Mein Handy funktioniert nicht.|My phone isn't working.|Telefonum çalışmıyor.|Moja komórka nie działa.|Mi móvil no funciona.|Mon portable ne marche pas.|Il mio cellulare non funziona.|O meu telemóvel não funciona.|Verneinung|„nicht“ goes to the end of a simple sentence.
Ich habe mein Passwort vergessen.|I've forgotten my password.|Şifremi unuttum.|Zapomniałem hasła.|He olvidado mi contraseña.|J'ai oublié mon mot de passe.|Ho dimenticato la password.|Esqueci-me da palavra-passe.|Perfekt|vergessen → vergessen (no „ge-“ with „ver-“).
Kannst du mir den Link schicken?|Can you send me the link?|Bana linki gönderebilir misin?|Możesz mi wysłać link?|¿Me puedes enviar el enlace?|Tu peux m'envoyer le lien ?|Mi puoi mandare il link?|Podes enviar-me o link?|Dativ|Person (dative) before thing (accusative): mir den Link.
Die App, die du mir empfohlen hast, ist sehr nützlich.|The app you recommended is very useful.|Bana önerdiğin uygulama çok faydalı.|Aplikacja, którą mi poleciłeś, jest bardzo przydatna.|La aplicación que me recomendaste es muy útil.|L'application que tu m'as conseillée est très utile.|L'app che mi hai consigliato è molto utile.|A aplicação que me recomendaste é muito útil.|Relativsatz|Relative pronoun = article (die); verb at the end.
Ich verbringe zu viel Zeit in den sozialen Medien.|I spend too much time on social media.|Sosyal medyada çok fazla zaman geçiriyorum.|Spędzam za dużo czasu w mediach społecznościowych.|Paso demasiado tiempo en las redes sociales.|Je passe trop de temps sur les réseaux sociaux.|Passo troppo tempo sui social.|Passo demasiado tempo nas redes sociais.|Dativ|in + dative (where?).
Vergiss nicht, das Dokument zu speichern.|Don't forget to save the document.|Belgeyi kaydetmeyi unutma.|Nie zapomnij zapisać dokumentu.|No te olvides de guardar el documento.|N'oublie pas d'enregistrer le document.|Non dimenticare di salvare il documento.|Não te esqueças de guardar o documento.|Imperativ|du-imperative: vergessen → vergiss!`;
const W27 = `wenn ich hätte|if I had|olsaydı|gdybym miał|si tuviera|si j'avais|se avessi|se eu tivesse
wenn ich wäre|if I were|olsaydım|gdybym był|si fuera|si j'étais|se fossi|se eu fosse
ich würde gern|I would like to|isterdim|chciałbym|me gustaría|j'aimerais|mi piacerebbe|gostaria
ich könnte|I could|yapabilirdim|mógłbym|podría|je pourrais|potrei|poderia
ich würde machen|I would do|yapardım|zrobiłbym|haría|je ferais|farei|faria
ich würde kaufen|I would buy|alırdım|kupiłbym|compraría|j'achèterais|comprerei|compraria
hoffentlich|hopefully|inşallah / umarım|oby|ojalá|j'espère que|speriamo|oxalá
der Wunsch|the wish|dilek|życzenie|el deseo|le souhait|il desiderio|o desejo
das Lotto|the lottery|piyango|loteria|la lotería|le loto|la lotteria|o totoloto
an deiner Stelle|if I were you|senin yerinde olsam|na twoim miejscu|en tu lugar|à ta place|al posto tuo|no teu lugar`;
const S27 = `Wenn ich mehr Zeit hätte, würde ich Gitarre lernen.|If I had more time, I would learn the guitar.|Daha çok zamanım olsaydı gitar öğrenirdim.|Gdybym miał więcej czasu, nauczyłbym się grać na gitarze.|Si tuviera más tiempo, aprendería a tocar la guitarra.|Si j'avais plus de temps, j'apprendrais la guitare.|Se avessi più tempo, imparerei a suonare la chitarra.|Se tivesse mais tempo, aprenderia a tocar guitarra.|Konjunktiv II|Unreal condition: wenn + hätte/wäre; main clause: würde + infinitive.
Wenn ich reich wäre, würde ich um die Welt reisen.|If I were rich, I would travel around the world.|Zengin olsaydım dünyayı gezerdim.|Gdybym był bogaty, podróżowałbym po świecie.|Si fuera rico, viajaría por el mundo.|Si j'étais riche, je voyagerais dans le monde entier.|Se fossi ricco, viaggerei per il mondo.|Se fosse rico, viajaria pelo mundo.|Konjunktiv II|sein → wäre.
Ich würde gern im Ausland leben.|I'd like to live abroad.|Yurt dışında yaşamak isterdim.|Chciałbym mieszkać za granicą.|Me gustaría vivir en el extranjero.|J'aimerais vivre à l'étranger.|Mi piacerebbe vivere all'estero.|Gostaria de viver no estrangeiro.|Konjunktiv II|
An deiner Stelle würde ich mit ihm reden.|If I were you, I'd talk to him.|Senin yerinde olsam onunla konuşurdum.|Na twoim miejscu porozmawiałbym z nim.|Yo en tu lugar hablaría con él.|À ta place, je lui parlerais.|Al posto tuo, gli parlerei.|No teu lugar, falaria com ele.|Rat|
Was würdest du machen, wenn du im Lotto gewinnen würdest?|What would you do if you won the lottery?|Piyangoyu kazansan ne yapardın?|Co byś zrobił, gdybyś wygrał na loterii?|¿Qué harías si ganaras la lotería?|Qu'est-ce que tu ferais si tu gagnais au loto ?|Cosa faresti se vincessi alla lotteria?|O que farias se ganhasses o totoloto?|Konjunktiv II|In speech „würde“ is used for most verbs.
Hoffentlich ist morgen schönes Wetter.|Hopefully the weather will be nice tomorrow.|İnşallah yarın hava güzel olur.|Oby jutro była ładna pogoda.|Ojalá haga buen tiempo mañana.|Pourvu qu'il fasse beau demain !|Speriamo che domani faccia bel tempo.|Oxalá amanhã esteja bom tempo.|hoffentlich|„hoffentlich“ is one word – no extra verb needed.`;
const W28 = `die Ausstellung|the exhibition|sergi|wystawa|la exposición|l'exposition|la mostra|a exposição
das Museum|the museum|müze|muzeum|el museo|le musée|il museo|o museu
das Theaterstück|the play|tiyatro oyunu|sztuka teatralna|la obra de teatro|la pièce de théâtre|lo spettacolo teatrale|a peça de teatro
das Konzert|the concert|konser|koncert|el concierto|le concert|il concerto|o concerto
der Platz|the seat|yer|miejsce|el asiento|la place|il posto|o lugar
der Schriftsteller|the writer|yazar|pisarz|el escritor|l'écrivain|lo scrittore|o escritor
der Roman|the novel|roman|powieść|la novela|le roman|il romanzo|o romance
das Gemälde|the painting|tablo|obraz|el cuadro|le tableau|il quadro|o quadro
die Tradition|the tradition|gelenek|tradycja|la tradición|la tradition|la tradizione|a tradição
das Fest|the festival|şenlik|święto|la fiesta|la fête|la festa|a festa`;
const S28 = `Hast du die neue Ausstellung im Museum gesehen?|Have you seen the new exhibition at the museum?|Müzedeki yeni sergiyi gördün mü?|Widziałeś nową wystawę w muzeum?|¿Has visto la nueva exposición en el museo?|Tu as vu la nouvelle exposition au musée ?|Hai visto la nuova mostra al museo?|Já viste a nova exposição no museu?|Perfekt|
Das Konzert ist leider ausverkauft.|The concert is sold out, unfortunately.|Konser maalesef tükendi.|Koncert jest niestety wyprzedany.|Lamentablemente, el concierto está agotado.|Le concert est malheureusement complet.|Purtroppo il concerto è esaurito.|Infelizmente, o concerto está esgotado.|Adjektive|
Es ist ein Roman, der vom Krieg erzählt.|It's a novel about the war.|Savaşı anlatan bir roman.|To powieść, która opowiada o wojnie.|Es una novela que trata de la guerra.|C'est un roman qui parle de la guerre.|È un romanzo che parla della guerra.|É um romance que fala da guerra.|Relativsatz|„der“ refers to „der Roman“; verb at the end.
Das Bild wurde von Dürer gemalt.|The picture was painted by Dürer.|Tablo Dürer tarafından yapıldı.|Obraz został namalowany przez Dürera.|El cuadro fue pintado por Durero.|Le tableau a été peint par Dürer.|Il quadro è stato dipinto da Dürer.|O quadro foi pintado por Dürer.|Passiv|werden + participle; „von“ = by.
In meiner Region gibt es viele traditionelle Feste.|There are many traditional festivals in my region.|Bölgemde birçok geleneksel şenlik var.|W moim regionie jest dużo tradycyjnych świąt.|En mi región hay muchas fiestas tradicionales.|Dans ma région, il y a beaucoup de fêtes traditionnelles.|Nella mia regione ci sono molte feste tradizionali.|Na minha região há muitas festas tradicionais.|Adjektivendungen|No article: viele traditionelle Feste.
Ich würde sehr gern mit dir ins Theater gehen.|I'd love to go to the theatre with you.|Seninle tiyatroya gitmeyi çok isterim.|Bardzo chętnie poszedłbym z tobą do teatru.|Me encantaría ir al teatro contigo.|J'adorerais aller au théâtre avec toi.|Mi piacerebbe tanto andare a teatro con te.|Gostava muito de ir ao teatro contigo.|Konjunktiv II|`;
const W29 = `die Beschwerde|the complaint|şikâyet|skarga|la reclamación|la réclamation|il reclamo|a reclamação
das Problem|the problem|sorun|problem|el problema|le problème|il problema|o problema
der Kunde|the customer|müşteri|klient|el cliente|le client|il cliente|o cliente
zurückgeben|to return|iade etmek|zwrócić|devolver|rendre|restituire|devolver
die Rückerstattung|the refund|para iadesi|zwrot pieniędzy|el reembolso|le remboursement|il rimborso|o reembolso
die Quittung|the receipt|fiş|paragon|el recibo|le reçu|la ricevuta|o recibo
kaputt|broken|bozuk|zepsuty|roto|cassé|rotto|estragado
die Verspätung|the delay|gecikme|opóźnienie|el retraso|le retard|il ritardo|o atraso
lösen|to solve|çözmek|rozwiązać|solucionar|résoudre|risolvere|resolver
Sehr geehrte Damen und Herren|Dear Sir or Madam|Sayın yetkili|Szanowni Państwo|Estimados señores|Madame, Monsieur|Gentili Signori|Exmos. Senhores`;
const S29 = `Ich möchte mich beschweren.|I'd like to make a complaint.|Şikâyette bulunmak istiyorum.|Chciałbym złożyć skargę.|Quisiera hacer una reclamación.|Je voudrais faire une réclamation.|Vorrei fare un reclamo.|Queria fazer uma reclamação.|Reflexive Verben|sich beschweren über + accusative.
Das Gerät ist kaputt angekommen.|The device arrived broken.|Cihaz bozuk geldi.|Urządzenie przyszło zepsute.|El aparato llegó roto.|L'appareil est arrivé cassé.|L'apparecchio è arrivato rotto.|O aparelho chegou estragado.|Perfekt|ankommen → ist angekommen.
Ich würde die Schuhe gern zurückgeben.|I'd like to return the shoes.|Ayakkabıları iade etmek istiyorum.|Chciałbym zwrócić te buty.|Me gustaría devolver los zapatos.|J'aimerais rendre les chaussures.|Vorrei restituire le scarpe.|Gostaria de devolver os sapatos.|Trennbare Verben|In the infinitive, „zurückgeben“ stays together at the end.
Könnten Sie mir das Geld zurückerstatten?|Could you refund my money?|Paramı iade edebilir misiniz?|Czy mogliby Państwo zwrócić mi pieniądze?|¿Podrían devolverme el dinero?|Pourriez-vous me rembourser ?|Potrebbe rimborsarmi?|Poderiam devolver-me o dinheiro?|Konjunktiv II|„Könnten Sie …?“ = a very polite request.
Der Zug hatte zwei Stunden Verspätung.|The train was two hours late.|Tren iki saat gecikti.|Pociąg miał dwie godziny opóźnienia.|El tren tuvo dos horas de retraso.|Le train a eu deux heures de retard.|Il treno ha avuto due ore di ritardo.|O comboio teve duas horas de atraso.|Präteritum|
Ich freue mich auf Ihre Antwort.|I look forward to your reply.|Cevabınızı bekliyorum.|Czekam na Państwa odpowiedź.|Quedo a la espera de su respuesta.|Dans l'attente de votre réponse.|Resto in attesa di una Sua risposta.|Aguardo a vossa resposta.|Formell|„sich freuen auf“ = to look forward to. Formal letters end with „Mit freundlichen Grüßen“.`;
const W30 = `die Nachrichten|the news|haberler|wiadomości|las noticias|les informations|le notizie|as notícias
die Zeitung|the newspaper|gazete|gazeta|el periódico|le journal|il giornale|o jornal
die Regierung|the government|hükümet|rząd|el gobierno|le gouvernement|il governo|o governo
die Wahl|the election|seçim|wybory|las elecciones|les élections|le elezioni|as eleições
das Gesetz|the law|kanun|ustawa|la ley|la loi|la legge|a lei
die Krise|the crisis|kriz|kryzys|la crisis|la crise|la crisi|a crise
die Wirtschaft|the economy|ekonomi|gospodarka|la economía|l'économie|l'economia|a economia
laut|according to|-e göre|według|según|selon|secondo|segundo
steigen|to rise|artmak|rosnąć|aumentar|augmenter|aumentare|subir
ankündigen|to announce|açıklamak|ogłosić|anunciar|annoncer|annunciare|anunciar`;
const S30 = `Laut der Zeitung sind die Preise gestiegen.|According to the newspaper, prices have risen.|Gazeteye göre fiyatlar arttı.|Według gazety ceny wzrosły.|Según el periódico, los precios han subido.|Selon le journal, les prix ont augmenté.|Secondo il giornale, i prezzi sono aumentati.|Segundo o jornal, os preços subiram.|Perfekt|steigen → ist gestiegen (with „sein“).
Die neue Brücke wurde gestern eröffnet.|The new bridge was opened yesterday.|Yeni köprü dün açıldı.|Nowy most został otwarty wczoraj.|El nuevo puente fue inaugurado ayer.|Le nouveau pont a été inauguré hier.|Il nuovo ponte è stato inaugurato ieri.|A nova ponte foi inaugurada ontem.|Passiv|Passive past: wurde + participle.
Es wurden mehr Autos verkauft als letztes Jahr.|More cars were sold than last year.|Geçen yıla göre daha fazla araba satıldı.|Sprzedano więcej samochodów niż w zeszłym roku.|Se vendieron más coches que el año pasado.|On a vendu plus de voitures que l'année dernière.|Si sono vendute più auto dell'anno scorso.|Venderam-se mais carros do que no ano passado.|Passiv|„es“ fills the first position; the verb agrees with „Autos“: wurden.
Die Regierung hat ein neues Gesetz angekündigt.|The government has announced a new law.|Hükümet yeni bir kanun açıkladı.|Rząd ogłosił nową ustawę.|El gobierno anunció una nueva ley.|Le gouvernement a annoncé une nouvelle loi.|Il governo ha annunciato una nuova legge.|O governo anunciou uma nova lei.|Perfekt|ankündigen → angekündigt.
Die Wahl findet im Mai statt.|The election takes place in May.|Seçim mayısta yapılacak.|Wybory odbędą się w maju.|Las elecciones se celebrarán en mayo.|Les élections auront lieu en mai.|Le elezioni si terranno a maggio.|As eleições realizam-se em maio.|Trennbare Verben|stattfinden: findet … statt.
Man sagt, dass sich die Wirtschaft erholen wird.|They say the economy will recover.|Ekonominin düzeleceği söyleniyor.|Mówi się, że gospodarka się poprawi.|Dicen que la economía se recuperará.|On dit que l'économie va se redresser.|Si dice che l'economia si riprenderà.|Diz-se que a economia vai recuperar.|Nebensätze|In the „dass“ clause the verb goes to the end: … erholen wird.`;
const DLG5 = `25|Was können wir für die Umwelt tun?|What can we do for the environment?|Çevre için ne yapabiliriz?|Co możemy zrobić dla środowiska?|¿Qué podemos hacer por el medio ambiente?|Qu'est-ce qu'on peut faire pour l'environnement ?|Cosa possiamo fare per l'ambiente?|O que podemos fazer pelo ambiente?|Weniger Plastik benutzen.|Mein Handy ist kaputt.|Ich war gestern im Kino.
26|Warum gehst du nicht ans Telefon?|Why don't you answer the phone?|Neden telefonu açmıyorsun?|Dlaczego nie odbierasz telefonu?|¿Por qué no contestas al teléfono?|Pourquoi tu ne réponds pas au téléphone ?|Perché non rispondi al telefono?|Porque não atendes o telefone?|Mein Akku ist leer.|Es ist kalt.|Ich mag den Roman.
27|Was würdest du mit einer Million Euro machen?|What would you do with a million euros?|Bir milyon euron olsa ne yapardın?|Co byś zrobił z milionem euro?|¿Qué harías con un millón de euros?|Qu'est-ce que tu ferais avec un million d'euros ?|Cosa faresti con un milione di euro?|O que farias com um milhão de euros?|Ich würde ein Haus am Meer kaufen.|Ich habe Fieber.|Um drei Uhr.
28|Gehen wir am Samstag ins Konzert?|Shall we go to the concert on Saturday?|Cumartesi konsere gidelim mi?|Idziemy w sobotę na koncert?|¿Vamos al concierto el sábado?|On va au concert samedi ?|Andiamo al concerto sabato?|Vamos ao concerto no sábado?|Ja, sehr gern!|Der Zug hatte Verspätung.|Ich trenne den Müll.
29|Wie kann ich Ihnen helfen?|How can I help you?|Size nasıl yardımcı olabilirim?|W czym mogę pomóc?|¿En qué puedo ayudarle?|Je peux vous aider ?|Posso aiutarLa?|Em que posso ajudar?|Ich möchte diesen Mantel zurückgeben.|Es ist sonnig.|Ich mag Museen.
30|Hast du heute die Nachrichten gelesen?|Have you read the news today?|Bugün haberleri okudun mu?|Czytałeś dzisiaj wiadomości?|¿Has leído las noticias hoy?|Tu as lu les informations aujourd'hui ?|Hai letto le notizie oggi?|Já leste as notícias hoje?|Ja, im Mai ist die Wahl.|Ich bin müde.|Mein Passwort.`;
const U = (id, e, title, pt, d, w, s) => ({id, e, title, pt, desc:mean(d), words:words(w), sents:sents(s)});
add("de", {id:"s5", title:"Gesellschaft und Welt", pt:"Gesellschaft und Welt", level:"B2", color:C, units:[
  U("u25","🌍","Umwelt","Unsere Umwelt",["Climate, rubbish, energy.","İklim, çöp, enerji.","Klimat, śmieci, energia.","Clima, basura, energía.","Climat, déchets, énergie.","Clima, rifiuti, energia.","Clima, lixo, energia."], W25, S25),
  U("u26","💻","Technik","Handy und Internet",["Phone, internet, apps.","Telefon, internet, uygulamalar.","Telefon, internet, aplikacje.","Móvil, internet, apps.","Portable, internet, applis.","Cellulare, internet, app.","Telemóvel, internet, apps."], W26, S26),
  U("u27","💭","Was wäre, wenn …","Der Konjunktiv II",["Wishes and hypotheses.","İstekler ve varsayımlar.","Życzenia i hipotezy.","Deseos e hipótesis.","Souhaits et hypothèses.","Desideri e ipotesi.","Desejos e hipóteses."], W27, S27),
  U("u28","🎭","Kultur","Kunst und Kultur",["Art, books, festivals.","Sanat, kitaplar, şenlikler.","Sztuka, książki, święta.","Arte, libros, fiestas.","Art, livres, fêtes.","Arte, libri, feste.","Arte, livros, festas."], W28, S28),
  U("u29","📝","Beschwerden","Formell schreiben",["Complaining politely and formally.","Kibar ve resmî şikâyet.","Uprzejma i formalna reklamacja.","Reclamar con cortesía y formalidad.","Réclamer poliment et formellement.","Reclamare in modo cortese e formale.","Reclamar de forma educada e formal."], W29, S29),
  U("u30","📰","Nachrichten","Das Passiv",["Newspaper, politics, passive voice.","Gazete, siyaset, edilgen çatı.","Gazeta, polityka, strona bierna.","Periódico, política, voz pasiva.","Journal, politique, voix passive.","Giornale, politica, forma passiva.","Jornal, política, voz passiva."], W30, S30)
]}, dialogs(DLG5));
})();
