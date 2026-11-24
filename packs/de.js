/* ===== Sprachpaket: Deutsch als Fremdsprache =====
   Übersetzungen in der gewählten Hilfssprache (en, tr, pl, es, fr, it, pt). Norm: Duden; Niveaus: Goethe-Institut / Profile deutsch.
   Datenzeilen: Deutsch|en|tr|pl|es|fr|it|pt[|Thema|Hinweis (Englisch)] */
LEL_PACKS.de = (function(){
const HELP = [
  {code:"en", flag:"🇬🇧", own:"English", de:"Englisch", into:"ins Englische"},
  {code:"tr", flag:"🇹🇷", own:"Türkçe", de:"Türkisch", into:"ins Türkische"},
  {code:"pl", flag:"🇵🇱", own:"Polski", de:"Polnisch", into:"ins Polnische"},
  {code:"es", flag:"🇪🇸", own:"Español", de:"Spanisch", into:"ins Spanische"},
  {code:"fr", flag:"🇫🇷", own:"Français", de:"Französisch", into:"ins Französische"},
  {code:"it", flag:"🇮🇹", own:"Italiano", de:"Italienisch", into:"ins Italienische"},
  {code:"pt", flag:"🇵🇹", own:"Português", de:"Portugiesisch", into:"ins Portugiesische"}
];
let hc = "en"; try{ hc = localStorage.getItem("lel.help") || "en"; }catch(e){}
let hi = HELP.findIndex(h => h.code === hc); if(hi < 0) hi = 0;
const H = HELP[hi];
const col = 1 + hi;
const words = t => t.trim().split("\n").map(l => { const c = l.split("|"); return c[0] + "|" + c[col]; }).join("\n");
const sents = t => t.trim().split("\n").map(l => { const c = l.split("|"); return [c[0], c[col], c[8] || "", c[9] || ""].join("|"); }).join("\n");
const dialogs = t => t.trim().split("\n").map(l => { const c = l.split("|"); return [c[0], c[1], c[2 + hi], c[9], c[10], c[11]].join("|"); }).join("\n");
const mean = a => a[hi];
const hab = p => `habe ${p},hast ${p},hat ${p},haben ${p},habt ${p},haben ${p}`;
const bin = p => `bin ${p},bist ${p},ist ${p},sind ${p},seid ${p},sind ${p}`;
const fut = v => `werde ${v},wirst ${v},wird ${v},werden ${v},werdet ${v},werden ${v}`;

const U1W = `Hallo|hello|merhaba|cześć|hola|bonjour|ciao|olá
Guten Morgen|good morning|günaydın|dzień dobry|buenos días|bonjour|buongiorno|bom dia
Guten Tag|good afternoon / hello|iyi günler|dzień dobry|buenas tardes|bonjour|buongiorno|boa tarde
Guten Abend|good evening|iyi akşamlar|dobry wieczór|buenas noches|bonsoir|buonasera|boa noite
Gute Nacht|good night|iyi geceler|dobranoc|buenas noches|bonne nuit|buonanotte|boa noite
Tschüss|bye|hoşça kal|cześć|adiós|salut|ciao|adeus
Auf Wiedersehen|goodbye|hoşça kalın|do widzenia|adiós|au revoir|arrivederci|adeus
danke|thank you|teşekkür ederim|dziękuję|gracias|merci|grazie|obrigado
bitte|please|lütfen|proszę|por favor|s'il vous plaît|per favore|por favor
Wie geht's?|how are you?|nasılsın?|jak się masz?|¿qué tal?|ça va ?|come stai?|como estás?`;
const U1S = `Hallo, guten Morgen!|Hello, good morning!|Merhaba, günaydın!|Cześć, dzień dobry!|¡Hola, buenos días!|Bonjour !|Ciao, buongiorno!|Olá, bom dia!|Begrüßung|„Guten Morgen“ is used until about 10–11 a.m.
Guten Tag, wie geht es Ihnen?|Good afternoon, how are you?|İyi günler, nasılsınız?|Dzień dobry, jak się pan ma?|Buenas tardes, ¿cómo está usted?|Bonjour, comment allez-vous ?|Buongiorno, come sta?|Boa tarde, como está?|Anrede|„Ihnen“ is the polite form (Sie).
Gut, danke.|Fine, thanks.|İyiyim, teşekkürler.|Dobrze, dziękuję.|Bien, gracias.|Bien, merci.|Bene, grazie.|Bem, obrigado.|Begrüßung|
Gute Nacht und bis morgen!|Good night and see you tomorrow!|İyi geceler, yarın görüşürüz!|Dobranoc i do jutra!|¡Buenas noches y hasta mañana!|Bonne nuit et à demain !|Buonanotte e a domani!|Boa noite e até amanhã!|Begrüßung|
Tschüss, bis später!|Bye, see you later!|Hoşça kal, sonra görüşürüz!|Cześć, na razie!|¡Adiós, hasta luego!|Salut, à plus tard !|Ciao, a dopo!|Adeus, até logo!|Begrüßung|„Tschüss“ is informal, „Auf Wiedersehen“ is polite.
Einen Kaffee, bitte.|A coffee, please.|Bir kahve, lütfen.|Poproszę kawę.|Un café, por favor.|Un café, s'il vous plaît.|Un caffè, per favore.|Um café, por favor.|Höflichkeit|der Kaffee → einen Kaffee (masculine, accusative).`;
const U2W = `ich heiße|my name is|benim adım|mam na imię|me llamo|je m'appelle|mi chiamo|chamo-me
Wie heißt du?|what's your name?|adın ne?|jak masz na imię?|¿cómo te llamas?|comment tu t'appelles ?|come ti chiami?|como te chamas?
Woher kommst du?|where are you from?|nerelisin?|skąd jesteś?|¿de dónde eres?|tu viens d'où ?|di dove sei?|de onde és?
ich komme aus|I come from|-den / -dan geliyorum|pochodzę z|soy de|je viens de|vengo da|sou de
ich wohne in|I live in|-de / -da oturuyorum|mieszkam w|vivo en|j'habite à|abito a|moro em
Freut mich!|nice to meet you|memnun oldum|miło mi|encantado|enchanté|piacere|muito prazer
der Name|the name|isim / ad|imię|el nombre|le nom|il nome|o nome
der Nachname|the surname|soyadı|nazwisko|el apellido|le nom de famille|il cognome|o apelido
Deutschland|Germany|Almanya|Niemcy|Alemania|l'Allemagne|la Germania|a Alemanha
Österreich|Austria|Avusturya|Austria|Austria|l'Autriche|l'Austria|a Áustria`;
const U2S = `Ich heiße Daniel.|My name is Daniel.|Benim adım Daniel.|Mam na imię Daniel.|Me llamo Daniel.|Je m'appelle Daniel.|Mi chiamo Daniel.|Chamo-me Daniel.|Satzbau|In a German statement the verb is always in second position.
Wie heißt du?|What's your name?|Adın ne?|Jak masz na imię?|¿Cómo te llamas?|Comment tu t'appelles ?|Come ti chiami?|Como te chamas?|Fragen|After a question word comes the verb.
Ich komme aus Deutschland.|I come from Germany.|Almanya'dan geliyorum.|Pochodzę z Niemiec.|Soy de Alemania.|Je viens d'Allemagne.|Vengo dalla Germania.|Sou da Alemanha.|Präpositionen|„aus“ = from (origin).
Ich wohne in Berlin.|I live in Berlin.|Berlin'de oturuyorum.|Mieszkam w Berlinie.|Vivo en Berlín.|J'habite à Berlin.|Abito a Berlino.|Moro em Berlim.|Präpositionen|
Freut mich!|Nice to meet you!|Memnun oldum!|Miło mi!|¡Encantado!|Enchanté !|Piacere!|Muito prazer!|Begrüßung|
Woher kommen Sie?|Where are you from? (polite)|Nerelisiniz?|Skąd pan jest?|¿De dónde es usted?|D'où venez-vous ?|Di dov'è Lei?|De onde é?|Anrede|„Sie“ (always with a capital S) is the polite „you“; the verb takes the plural form.
Ich bin Student.|I'm a student.|Öğrenciyim.|Jestem studentem.|Soy estudiante.|Je suis étudiant.|Sono studente.|Sou estudante.|sein|No article before professions: Ich bin Student.`;
const U3W = `ja|yes|evet|tak|sí|oui|sì|sim
nein|no|hayır|nie|no|non|no|não
doch|yes (after a negative question)|evet (olumsuz soruya)|ależ tak|sí (tras una pregunta negativa)|si|sì (dopo una domanda negativa)|sim (após pergunta negativa)
klar|sure|tabii|jasne|claro|bien sûr|certo|claro
okay|OK|tamam|okej|vale|d'accord|va bene|está bem
auch|also / too|de / da|też|también|aussi|anche|também
nicht|not|değil|nie|no|pas|non|não
nichts|nothing|hiçbir şey|nic|nada|rien|niente|nada
nie|never|asla|nigdy|nunca|jamais|mai|nunca
ich weiß nicht|I don't know|bilmiyorum|nie wiem|no sé|je ne sais pas|non lo so|não sei`;
const U3S = `Ja, klar.|Yes, sure.|Evet, tabii.|Tak, jasne.|Sí, claro.|Oui, bien sûr.|Sì, certo.|Sim, claro.|Zustimmung|
Nein, danke.|No, thank you.|Hayır, teşekkürler.|Nie, dziękuję.|No, gracias.|Non, merci.|No, grazie.|Não, obrigado.|Verneinung|
Ich weiß es nicht.|I don't know.|Bilmiyorum.|Nie wiem.|No lo sé.|Je ne sais pas.|Non lo so.|Não sei.|Verneinung|„nicht“ usually comes after the verb and its object.
Kommst du nicht? – Doch!|Aren't you coming? – Yes, I am!|Gelmiyor musun? – Geliyorum!|Nie przyjdziesz? – Ależ przyjdę!|¿No vienes? – ¡Que sí!|Tu ne viens pas ? – Si !|Non vieni? – Sì che vengo!|Não vens? – Venho, sim!|Zustimmung|„doch“ contradicts a negative question.
Ich habe keine Zeit.|I have no time.|Zamanım yok.|Nie mam czasu.|No tengo tiempo.|Je n'ai pas le temps.|Non ho tempo.|Não tenho tempo.|Verneinung|Nouns are negated with „kein / keine“, not with „nicht“.
Ich auch.|Me too.|Ben de.|Ja też.|Yo también.|Moi aussi.|Anch'io.|Eu também.|Zustimmung|
Das ist nicht gut.|That's not good.|Bu iyi değil.|To nie jest dobre.|Eso no está bien.|Ce n'est pas bien.|Non va bene.|Isso não é bom.|Verneinung|`;
const U4W = `was?|what?|ne?|co?|¿qué?|quoi ?|che cosa?|o quê?
wer?|who?|kim?|kto?|¿quién?|qui ?|chi?|quem?
wo?|where?|nerede?|gdzie?|¿dónde?|où ?|dove?|onde?
woher?|where from?|nereden?|skąd?|¿de dónde?|d'où ?|da dove?|de onde?
wohin?|where to?|nereye?|dokąd?|¿adónde?|où (direction) ?|dove (direzione)?|para onde?
wann?|when?|ne zaman?|kiedy?|¿cuándo?|quand ?|quando?|quando?
wie?|how?|nasıl?|jak?|¿cómo?|comment ?|come?|como?
wie viel?|how much?|ne kadar?|ile?|¿cuánto?|combien ?|quanto?|quanto?
warum?|why?|neden?|dlaczego?|¿por qué?|pourquoi ?|perché?|porquê?
weil|because|çünkü|bo / ponieważ|porque|parce que|perché|porque`;
const U4S = `Was ist das?|What is that?|Bu ne?|Co to jest?|¿Qué es esto?|Qu'est-ce que c'est ?|Che cos'è?|O que é isto?|Fragen|
Wo ist die Toilette?|Where is the toilet?|Tuvalet nerede?|Gdzie jest toaleta?|¿Dónde está el baño?|Où sont les toilettes ?|Dov'è il bagno?|Onde é a casa de banho?|Fragen|
Wie viel kostet das?|How much is it?|Bu ne kadar?|Ile to kosztuje?|¿Cuánto cuesta?|Ça coûte combien ?|Quanto costa?|Quanto custa?|Fragen|
Wer ist das?|Who is that?|Bu kim?|Kto to jest?|¿Quién es?|Qui est-ce ?|Chi è?|Quem é?|Fragen|
Warum kommst du nicht?|Why aren't you coming?|Neden gelmiyorsun?|Dlaczego nie przychodzisz?|¿Por qué no vienes?|Pourquoi tu ne viens pas ?|Perché non vieni?|Porque é que não vens?|Fragen|
Weil ich müde bin.|Because I'm tired.|Çünkü yorgunum.|Bo jestem zmęczony.|Porque estoy cansado.|Parce que je suis fatigué.|Perché sono stanco.|Porque estou cansado.|Nebensätze|After „weil“ the verb goes to the end of the clause.
Wann beginnt der Kurs?|When does the course start?|Kurs ne zaman başlıyor?|Kiedy zaczyna się kurs?|¿Cuándo empieza el curso?|Quand commence le cours ?|Quando comincia il corso?|Quando começa o curso?|Fragen|`;
const U5W = `eins|one|bir|jeden|uno|un|uno|um
zwei|two|iki|dwa|dos|deux|due|dois
drei|three|üç|trzy|tres|trois|tre|três
vier|four|dört|cztery|cuatro|quatre|quattro|quatro
fünf|five|beş|pięć|cinco|cinq|cinque|cinco
zehn|ten|on|dziesięć|diez|dix|dieci|dez
zwanzig|twenty|yirmi|dwadzieścia|veinte|vingt|venti|vinte
hundert|a hundred|yüz|sto|cien|cent|cento|cem
der Euro|the euro|avro|euro|el euro|l'euro|l'euro|o euro
Wie alt bist du?|how old are you?|kaç yaşındasın?|ile masz lat?|¿cuántos años tienes?|tu as quel âge ?|quanti anni hai?|quantos anos tens?`;
const U5S = `Ich bin zwanzig Jahre alt.|I'm twenty years old.|Yirmi yaşındayım.|Mam dwadzieścia lat.|Tengo veinte años.|J'ai vingt ans.|Ho vent'anni.|Tenho vinte anos.|Zahlen|Age is expressed with „sein“ (to be): Ich bin … Jahre alt.
Wie alt bist du?|How old are you?|Kaç yaşındasın?|Ile masz lat?|¿Cuántos años tienes?|Tu as quel âge ?|Quanti anni hai?|Quantos anos tens?|Fragen|
Das macht fünf Euro.|That's five euros.|Beş avro tutuyor.|Razem pięć euro.|Son cinco euros.|Ça fait cinq euros.|Sono cinque euro.|São cinco euros.|Zahlen|After numbers „Euro“ has no plural ending.
Eins, zwei, drei, vier.|One, two, three, four.|Bir, iki, üç, dört.|Jeden, dwa, trzy, cztery.|Uno, dos, tres, cuatro.|Un, deux, trois, quatre.|Uno, due, tre, quattro.|Um, dois, três, quatro.|Zahlen|
Ich habe zwei Brüder.|I have two brothers.|İki erkek kardeşim var.|Mam dwóch braci.|Tengo dos hermanos.|J'ai deux frères.|Ho due fratelli.|Tenho dois irmãos.|haben|
Hundert Euro sind viel Geld.|A hundred euros is a lot of money.|Yüz avro çok para.|Sto euro to dużo pieniędzy.|Cien euros es mucho dinero.|Cent euros, c'est beaucoup d'argent.|Cento euro sono tanti soldi.|Cem euros é muito dinheiro.|Zahlen|Note: 21 = einundzwanzig – in German the units come before the tens.`;
const U6W = `ich|I|ben|ja|yo|je|io|eu
du|you (informal)|sen|ty|tú|tu|tu|tu
er|he|o (erkek)|on|él|il|lui|ele
sie|she / they|o (kadın) / onlar|ona / oni|ella / ellos|elle / ils|lei / loro|ela / eles
wir|we|biz|my|nosotros|nous|noi|nós
ihr|you (plural)|siz|wy|vosotros|vous|voi|vocês
Sie (formal)|you (polite)|siz|pan / pani|usted|vous|Lei|o senhor / a senhora
sprechen|to speak|konuşmak|mówić|hablar|parler|parlare|falar
arbeiten|to work|çalışmak|pracować|trabajar|travailler|lavorare|trabalhar
wohnen|to live (reside)|oturmak|mieszkać|vivir|habiter|abitare|morar`;
const U6S = `Ich spreche Deutsch.|I speak German.|Almanca konuşuyorum.|Mówię po niemiecku.|Hablo alemán.|Je parle allemand.|Parlo tedesco.|Falo alemão.|Verben|Languages are capitalised in German: Deutsch, Englisch.
Sprichst du Englisch?|Do you speak English?|İngilizce konuşuyor musun?|Mówisz po angielsku?|¿Hablas inglés?|Tu parles anglais ?|Parli inglese?|Falas inglês?|Fragen|In yes/no questions the verb comes first. sprechen → du sprichst (e becomes i).
Sie arbeitet in München.|She works in Munich.|Münih'te çalışıyor.|Ona pracuje w Monachium.|Trabaja en Múnich.|Elle travaille à Munich.|Lavora a Monaco di Baviera.|Ela trabalha em Munique.|Verben|
Wir wohnen in Berlin.|We live in Berlin.|Berlin'de oturuyoruz.|Mieszkamy w Berlinie.|Vivimos en Berlín.|Nous habitons à Berlin.|Abitiamo a Berlino.|Moramos em Berlim.|Verben|
Sprechen Sie Englisch?|Do you speak English? (polite)|İngilizce biliyor musunuz?|Czy mówi pan po angielsku?|¿Habla usted inglés?|Vous parlez anglais ?|Parla inglese?|Fala inglês?|Anrede|
Er arbeitet heute nicht.|He isn't working today.|Bugün çalışmıyor.|On dzisiaj nie pracuje.|Hoy no trabaja.|Il ne travaille pas aujourd'hui.|Oggi non lavora.|Ele hoje não trabalha.|Verneinung|
Heute lerne ich Deutsch.|Today I'm learning German.|Bugün Almanca öğreniyorum.|Dzisiaj uczę się niemieckiego.|Hoy aprendo alemán.|Aujourd'hui, j'apprends l'allemand.|Oggi imparo il tedesco.|Hoje aprendo alemão.|Satzbau|Verb in second position: if something else comes first, the subject follows the verb.`;
const DLG = `1|Hallo, wie geht's?|Hello, how are you?|Merhaba, nasılsın?|Cześć, jak się masz?|Hola, ¿qué tal?|Salut, ça va ?|Ciao, come stai?|Olá, como estás?|Gut, danke. Und dir?|Das macht drei Euro.|Ich wohne in Berlin.
1|Danke für die Hilfe!|Thanks for the help!|Yardımın için teşekkürler!|Dzięki za pomoc!|¡Gracias por la ayuda!|Merci pour ton aide !|Grazie per l'aiuto!|Obrigado pela ajuda!|Gern geschehen!|Ich weiß nicht.|Wie viel kostet das?
2|Wie heißt du?|What's your name?|Adın ne?|Jak masz na imię?|¿Cómo te llamas?|Comment tu t'appelles ?|Come ti chiami?|Como te chamas?|Ich heiße Daniel.|Ich bin zwanzig.|Bis später!
2|Woher kommst du?|Where are you from?|Nerelisin?|Skąd jesteś?|¿De dónde eres?|Tu viens d'où ?|Di dove sei?|De onde és?|Ich komme aus Spanien.|Ich heiße Anna.|Um acht Uhr.
3|Möchtest du einen Kaffee?|Would you like a coffee?|Kahve ister misin?|Chcesz kawę?|¿Quieres un café?|Tu veux un café ?|Vuoi un caffè?|Queres um café?|Ja, gern.|Ich komme aus Spanien.|Ich habe zwei Brüder.
4|Wo ist die Toilette?|Where is the toilet?|Tuvalet nerede?|Gdzie jest toaleta?|¿Dónde está el baño?|Où sont les toilettes ?|Dov'è il bagno?|Onde é a casa de banho?|Dort rechts.|Das macht fünf Euro.|Ich heiße Daniel.
5|Wie alt bist du?|How old are you?|Kaç yaşındasın?|Ile masz lat?|¿Cuántos años tienes?|Tu as quel âge ?|Quanti anni hai?|Quantos anos tens?|Ich bin dreißig.|Ich wohne in Köln.|Gut, danke.
5|Was kostet das Brot?|How much is the bread?|Ekmek ne kadar?|Ile kosztuje chleb?|¿Cuánto cuesta el pan?|Combien coûte le pain ?|Quanto costa il pane?|Quanto custa o pão?|Zwei Euro.|Bis morgen.|Ich bin Student.
6|Sprichst du Deutsch?|Do you speak German?|Almanca konuşuyor musun?|Mówisz po niemiecku?|¿Hablas alemán?|Tu parles allemand ?|Parli tedesco?|Falas alemão?|Ja, ein bisschen.|Ich bin zwanzig.|Gern geschehen.`;
const EXTRA = `Danke schön|thank you very much|çok teşekkürler|dziękuję bardzo|muchas gracias|merci beaucoup|grazie mille|muito obrigado
Gern geschehen|you're welcome|rica ederim|nie ma za co|de nada|de rien|prego|de nada
Entschuldigung|excuse me / sorry|affedersiniz|przepraszam|perdón|pardon|scusi|desculpe
der Kaffee|the coffee|kahve|kawa|el café|le café|il caffè|o café
der Tee|the tea|çay|herbata|el té|le thé|il tè|o chá
das Wasser|the water|su|woda|el agua|l'eau|l'acqua|a água
das Brot|the bread|ekmek|chleb|el pan|le pain|il pane|o pão
das Haus|the house|ev|dom|la casa|la maison|la casa|a casa
die Wohnung|the flat / apartment|daire|mieszkanie|el piso|l'appartement|l'appartamento|o apartamento
die Straße|the street|sokak|ulica|la calle|la rue|la strada|a rua
der Bahnhof|the station|tren istasyonu|dworzec|la estación|la gare|la stazione|a estação
der Bruder|the brother|erkek kardeş|brat|el hermano|le frère|il fratello|o irmão
die Schwester|the sister|kız kardeş|siostra|la hermana|la sœur|la sorella|a irmã
der Freund|the friend (male)|arkadaş (erkek)|przyjaciel|el amigo|l'ami|l'amico|o amigo
die Freundin|the friend (female)|arkadaş (kadın)|przyjaciółka|la amiga|l'amie|l'amica|a amiga
heute|today|bugün|dzisiaj|hoy|aujourd'hui|oggi|hoje
morgen|tomorrow|yarın|jutro|mañana|demain|domani|amanhã
gestern|yesterday|dün|wczoraj|ayer|hier|ieri|ontem
hier|here|burada|tutaj|aquí|ici|qui|aqui
dort|there|orada|tam|allí|là-bas|lì|ali
sehr|very|çok|bardzo|muy|très|molto|muito
ein bisschen|a little|biraz|trochę|un poco|un peu|un po'|um pouco
gut|good|iyi|dobry / dobrze|bueno / bien|bon / bien|buono / bene|bom / bem
müde|tired|yorgun|zmęczony|cansado|fatigué|stanco|cansado`;

return {
HELP, HELP_CUR: H, REMAP: true, _fmt:{words, sents, dialogs, mean},
LANG: {code:"de", flag:"🇩🇪", name:"Deutsch", adj:"Deutsch", inLang:"Deutsch", into:"ins Deutsche",
  native:H.de, nativeInto:H.into,
  country:"Deutschland", voiceFrom:"aus Deutschland", tts:"de-DE", ttsRe:/^de[-_]DE/i, prefix:"de",
  voicePath:"Deutsch", status:"A1 · Abschnitt 1 von 6 · Hilfssprache " + H.own, tutor:false},
ART_RE: /^(der|die|das|den|dem|ein|eine|einen|the|a|an|to|el|la|los|las|le|les|l'|il|lo|gli|un|una|une|o|os|as|um|uma) /,
F_RE: /anna|petra|helena|marlene|vicki|female|frau|woman/i,
M_RE: /markus|yannick|hans|martin|\bmale\b|mann|\bman\b/i,
FUNC: ["der","die","das","den","dem","ein","eine","einen","und","ist","in","im","zu","mit","nicht","ich","du","es","auf","für"],
LEVEL_NAMES: {A1:"Absolute Grundlagen",A2:"Einfache Gespräche & Alltag",B1:"Selbstständig kommunizieren",B2:"Flüssiger sprechen",C1:"Fortgeschrittenes Deutsch"},
CURRICULUM: {
 A1:[["A1-01","Begrüßen & sich vorstellen","Hallo, ich heiße …, du vs. Sie"],["A1-02","Aussprache","ch, sch, ei/ie, ä/ö/ü, ß"],["A1-03","Artikel & Geschlecht","der / die / das, ein / eine"],["A1-04","sein & haben","ich bin, ich habe"],["A1-05","Verb an Position 2","Heute lerne ich Deutsch."],["A1-06","Verneinung","nicht und kein"],["A1-07","Akkusativ","einen Kaffee, den Bus"],["A1-08","Zahlen & Uhrzeit","0–100, Wie spät ist es?"],["A1-T","A1-Abschlusstest","Prüfung über alle A1-Themen"]],
 A2:[["A2-01","Perfekt","ich habe gemacht, ich bin gegangen"],["A2-02","Dativ","mit dem Bus, dem Freund"],["A2-03","Trennbare Verben","anrufen, aufstehen"],["A2-04","Modalverben","können, müssen, wollen"],["A2-T","A2-Abschlusstest","Prüfung über alle A2-Themen"]],
 B1:[["B1-01","Nebensätze","weil, dass, wenn"],["B1-02","Präteritum","war, hatte, ging"],["B1-03","Konjunktiv II","ich würde, ich hätte"],["B1-T","B1-Abschlusstest","Prüfung über alle B1-Themen"]],
 B2:[["B2-01","Passiv","wird gebaut, wurde gebaut"],["B2-02","Genitiv & Relativsätze","des Mannes, der Mann, den …"],["B2-T","B2-Abschlusstest","Prüfung über alle B2-Themen"]],
 C1:[["C1-01","Stil & Register","formell, umgangssprachlich, regional"],["C1-02","Nominalstil","die Durchführung von …"],["C1-T","C1-Abschlusstest","Prüfung über alle C1-Themen"]]
},
SCENARIOS: [["☕","Im Café","Bestelle einen Kaffee und ein Stück Kuchen"],["🛒","Im Supermarkt","Frag nach Produkten, Preisen und bezahle"],["📞","Am Telefon","Reserviere einen Tisch im Restaurant"],["🍻","Mit Freunden","Verabrede dich für den Abend"],["👨‍👩‍👧","In der Familie","Lerne die Familie eines Freundes kennen"],["🧭","Auf der Straße","Frag nach dem Weg zur U-Bahn"],["💊","In der Apotheke","Beschreibe Beschwerden und kauf etwas"],["🏨","Im Hotel","Check-in und Fragen an der Rezeption"],["🏠","Mit dem Nachbarn","Smalltalk mit dem Nachbarn"],["🎲","Freies Gespräch","Freies Gespräch auf deinem Niveau"]],
SCEN_DE: ["Im Café","Im Supermarkt","Am Telefon","Mit Freunden","Mit der Familie","Auf der Straße","In der Apotheke","Im Hotel","Mit dem Nachbarn","Freies Gespräch"],
STARTER_VOCAB: words(U1W).split("\n").map(l => l.split("|")),
INITIAL_CHAT: [{role:"assistant", content:"Hallo! Willkommen beim Deutschkurs 🇩🇪\n\nFang einfach mit der ersten Lektion im Lernpfad an."}],
THEMES: [
 {id:"gruss",e:"👋",name:"Begrüßung & Höflichkeit",level:"A1",w:words(U1W + "\n" + EXTRA.split("\n").slice(0, 3).join("\n"))},
 {id:"ichdu",e:"🙋",name:"Personen & Vorstellen",level:"A1",w:words(U6W.split("\n").slice(0, 7).join("\n") + "\n" + U2W)},
 {id:"fragen",e:"❓",name:"Fragewörter",level:"A1",w:words(U4W)},
 {id:"zahlen",e:"🔢",name:"Zahlen",level:"A1",w:words(U5W)},
 {id:"alltag",e:"☀️",name:"Erste Alltagswörter",level:"A1",w:words(U3W + "\n" + EXTRA.split("\n").slice(3).join("\n"))}
],
PATH_SECTIONS: [
 {id:"s1", title:"Erste Schritte", pt:"Die ersten Schritte", level:"A1", color:"#2F6BFF", units:[
  {id:"u1", e:"👋", title:"Begrüßungen", pt:"Hallo!", desc:mean(["Saying hello, thank you and please.","Merhaba, teşekkürler ve lütfen.","Powitania, dziękuję i proszę.","Saludar, dar las gracias, pedir por favor.","Dire bonjour, merci et s'il vous plaît.","Salutare, ringraziare, chiedere per favore.","Cumprimentar, agradecer, pedir por favor."]), words:words(U1W), sents:sents(U1S)},
  {id:"u2", e:"🙋", title:"Sich vorstellen", pt:"Ich heiße …", desc:mean(["Name, origin and home town.","İsim, nereli olduğun ve nerede oturduğun.","Imię, pochodzenie i miejsce zamieszkania.","Nombre, origen y residencia.","Nom, origine et domicile.","Nome, provenienza e residenza.","Nome, origem e morada."]), words:words(U2W), sents:sents(U2S)},
  {id:"u3", e:"✅", title:"Ja und Nein", pt:"Ja oder nein", desc:mean(["Agreeing, refusing, negating.","Onaylamak, reddetmek, olumsuz cümle.","Zgadzanie się, odmawianie, przeczenie.","Aceptar, rechazar, negar.","Accepter, refuser, nier.","Accettare, rifiutare, negare.","Concordar, recusar, negar."]), words:words(U3W), sents:sents(U3S)},
  {id:"u4", e:"❓", title:"Grundlegende Fragen", pt:"Fragen", desc:mean(["Who, what, where, when and how much?","Kim, ne, nerede, ne zaman, ne kadar?","Kto, co, gdzie, kiedy, ile?","¿Quién, qué, dónde, cuándo, cuánto?","Qui, quoi, où, quand, combien ?","Chi, che cosa, dove, quando, quanto?","Quem, o quê, onde, quando, quanto?"]), words:words(U4W), sents:sents(U4S)},
  {id:"u5", e:"🔢", title:"Zahlen", pt:"Zahlen", desc:mean(["One to a hundred, age and prices.","Birden yüze, yaş ve fiyatlar.","Od jednego do stu, wiek i ceny.","Del uno al cien, edad y precios.","De un à cent, âge et prix.","Da uno a cento, età e prezzi.","De um a cem, idade e preços."]), words:words(U5W), sents:sents(U5S)},
  {id:"u6", e:"🧱", title:"Einfache Sätze", pt:"Einfache Sätze", desc:mean(["I, you, he, she – the first verbs.","Ben, sen, o – ilk fiiller.","Ja, ty, on, ona – pierwsze czasowniki.","Yo, tú, él, ella – los primeros verbos.","Je, tu, il, elle – les premiers verbes.","Io, tu, lui, lei – i primi verbi.","Eu, tu, ele, ela – os primeiros verbos."]), words:words(U6W), sents:sents(U6S)}
 ]}
],
DIALOGS: dialogs(DLG),
SENTENCES: sents(U6S + "\n" + U2S).split("\n").map(l => "A1|" + l.split("|").slice(0, 2).join("|")).join("\n"),
PERSONS: ["ich","du","er / sie / es","wir","ihr","sie / Sie"],
TENSES: [
  ["pres","Präsens","Now or regularly: **ich spreche** = I speak. Often also for the future: Morgen fahre ich nach Berlin."],
  ["perf","Perfekt","The normal spoken past: **ich habe gesprochen**. Verbs of movement and change use **sein**: **ich bin gegangen**."],
  ["praet","Präteritum","Mainly written past; in speech common for sein, haben and modal verbs: **ich war**, **ich hatte**, **ich konnte**."],
  ["fut","Futur I","Future and assumptions: **ich werde sprechen**. In everyday speech the present tense is often used instead."]
],
VERBS: {
  sein:     [mean(["to be","olmak","być","ser / estar","être","essere","ser / estar"]), "bin,bist,ist,sind,seid,sind", bin("gewesen"), "war,warst,war,waren,wart,waren", fut("sein")],
  haben:    [mean(["to have","sahip olmak","mieć","tener","avoir","avere","ter"]), "habe,hast,hat,haben,habt,haben", hab("gehabt"), "hatte,hattest,hatte,hatten,hattet,hatten", fut("haben")],
  werden:   [mean(["to become","olmak","stawać się","volverse","devenir","diventare","tornar-se"]), "werde,wirst,wird,werden,werdet,werden", bin("geworden"), "wurde,wurdest,wurde,wurden,wurdet,wurden", fut("werden")],
  gehen:    [mean(["to go","gitmek","iść","ir","aller","andare","ir"]), "gehe,gehst,geht,gehen,geht,gehen", bin("gegangen"), "ging,gingst,ging,gingen,gingt,gingen", fut("gehen")],
  kommen:   [mean(["to come","gelmek","przychodzić","venir","venir","venire","vir"]), "komme,kommst,kommt,kommen,kommt,kommen", bin("gekommen"), "kam,kamst,kam,kamen,kamt,kamen", fut("kommen")],
  machen:   [mean(["to do / make","yapmak","robić","hacer","faire","fare","fazer"]), "mache,machst,macht,machen,macht,machen", hab("gemacht"), "machte,machtest,machte,machten,machtet,machten", fut("machen")],
  sprechen: [mean(["to speak","konuşmak","mówić","hablar","parler","parlare","falar"]), "spreche,sprichst,spricht,sprechen,sprecht,sprechen", hab("gesprochen"), "sprach,sprachst,sprach,sprachen,spracht,sprachen", fut("sprechen")],
  sehen:    [mean(["to see","görmek","widzieć","ver","voir","vedere","ver"]), "sehe,siehst,sieht,sehen,seht,sehen", hab("gesehen"), "sah,sahst,sah,sahen,saht,sahen", fut("sehen")],
  essen:    [mean(["to eat","yemek","jeść","comer","manger","mangiare","comer"]), "esse,isst,isst,essen,esst,essen", hab("gegessen"), "aß,aßest,aß,aßen,aßt,aßen", fut("essen")],
  wohnen:   [mean(["to live (reside)","oturmak","mieszkać","vivir","habiter","abitare","morar"]), "wohne,wohnst,wohnt,wohnen,wohnt,wohnen", hab("gewohnt"), "wohnte,wohntest,wohnte,wohnten,wohntet,wohnten", fut("wohnen")],
  arbeiten: [mean(["to work","çalışmak","pracować","trabajar","travailler","lavorare","trabalhar"]), "arbeite,arbeitest,arbeitet,arbeiten,arbeitet,arbeiten", hab("gearbeitet"), "arbeitete,arbeitetest,arbeitete,arbeiteten,arbeitetet,arbeiteten", fut("arbeiten")],
  "können": [mean(["can / to be able to","-ebilmek","móc","poder","pouvoir","potere","poder"]), "kann,kannst,kann,können,könnt,können", hab("gekonnt"), "konnte,konntest,konnte,konnten,konntet,konnten", fut("können")]
},
VERB_NOTES: {
  sprechen: "Some strong verbs change their vowel in the du and er/sie/es forms: **du sprichst**, **er spricht**, **du siehst**, **du isst**.",
  arbeiten: "Stems ending in -t or -d add an **e**: **du arbeitest**, **er arbeitet**.",
  gehen: "Perfekt with **sein**: **ich bin gegangen**.",
  "können": "Modal verbs: no ending in ich and er/sie/es: **ich kann**, **er kann**."
},
CHEATS: [
 ["Pronunciation (Aussprache)", `- **ch** after a, o, u like Scottish „loch“: **Buch**; after other vowels softer: **ich**.
- **sch** = „sh“: **Schule**. **sp** and **st** at the start of a word = „shp“, „sht“: **Sport**, **Straße**.
- **ei** = „ai“: **mein**; **ie** = long „ee“: **Bier**; **eu / äu** = „oy“: **heute**.
- **ä, ö, ü** are separate vowels: **Mädchen**, **schön**, **müde**.
- **ß** = sharp „s“: **Straße**. **z** = „ts“: **Zeit**. **w** = English „v“: **Wasser**. **v** usually = „f“: **Vater**.
- Final **b, d, g** sound like p, t, k: **Tag**, **Kind**.
- Stress is usually on the first syllable: **ARbeiten**.`],
 ["Articles & gender (der, die, das)", `- Three genders: **der** (masculine), **die** (feminine), **das** (neuter). Plural always **die**.
- Always learn nouns with the article: **der Tisch**, **die Lampe**, **das Buch**.
- Some patterns: **-ung, -heit, -keit, -schaft** are feminine (**die Wohnung**); **-chen, -lein** are neuter (**das Mädchen**).
- All nouns are written with a capital letter.`],
 ["Word order", `- In statements the conjugated verb is in **position 2**: **Ich lerne heute Deutsch. Heute lerne ich Deutsch.**
- Yes/no questions start with the verb: **Lernst du Deutsch?**
- In clauses with **weil, dass, wenn** the verb goes to the end: **…, weil ich müde bin.**
- Separable verbs split: **anrufen → Ich rufe dich an.**`],
 ["Cases (Fälle)", `German has four cases. The article shows the case:
- **Nominativ** (subject): **der / die / das** – **Der Mann kommt.**
- **Akkusativ** (direct object): only masculine changes: **den / einen** – **Ich sehe den Mann.**
- **Dativ** (indirect object, after mit, bei, zu, von, aus …): **dem / der / dem** – **mit dem Bus**
- **Genitiv** (possession, mostly written): **des / der / des** – **das Auto des Mannes**`],
 ["du or Sie?", `- **du**: family, friends, children, often among young people and colleagues.
- **Sie** (capital S): strangers, shops, offices, formal situations. The verb takes the plural form: **Kommen Sie?**
- **ihr**: you (plural, informal).`],
 ["nicht or kein?", `- **kein / keine** negates nouns with ein or without article: **Ich habe kein Auto. Ich habe keine Zeit.**
- **nicht** negates everything else: **Ich komme nicht. Das ist nicht gut. Ich sehe den Film nicht.**`]
]
};
})();
