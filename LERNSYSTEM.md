# Lernsystem von LearnEasyLanguage

## 1. Bestandsaufnahme (vorher)

| Übungsart | Was der Nutzer tut | Problem für absolute Anfänger |
|---|---|---|
| Neues Wort (intro) | Wort, Übersetzung und Audio ansehen | gut, aber nur ein Beispiel und kein Bild |
| Multiple Choice | aus 4 Antworten wählen | direkt nach dem ersten Sehen schon 4 Antworten |
| Wort schreiben (write) | Übersetzung eintippen | kam in der **ersten** Lektion mit gerade gelernten Wörtern |
| Hören + tippen (listentype) | gehörtes Wort tippen | in der ersten Hörübung schon Pflicht |
| Satz bauen (build) | Satz aus Wortbausteinen legen | in Lektion 1 mit Wörtern, die noch nicht vorkamen |
| Satz übersetzen (bankde) | deutsche Übersetzung legen | wie oben |
| Lückentext (cloze) | Wort aus 4 Antworten einsetzen | wie oben |
| Hörverständnis (listen) | Satz hören, Bedeutung wählen | nur Audio, kein Text als Stütze |
| Satz schreiben (typept) | ganzen Satz eintippen | nur im Test, aber ohne jede Vorstufe |
| Dialog | passende Antwort wählen | in Lektion 1 |
| Sprechen | Satz nachsprechen | in Ordnung (Text und Audio sind sichtbar) |
| Geschichte + Fragen | lesen, hören, Fragen beantworten | in Ordnung |

Außerdem:
- Jeder Fehler kostete in **jeder** Lektion ein Herz.
- Die Wiederholung eines Fehlers kam erst am Ende und in der gleichen Schwierigkeit.
- Ein kleiner Tippfehler zählte als falsch.
- Die Akzent-Tasten zeigten in allen Sprachen nur portugiesische Zeichen.

## 2. Neues System: Lernstufen pro Wort

Jedes Wort im Wortschatz (`state.vocab`) bekommt eine **Stufe** (`st`) und einen Zähler für richtige Antworten in Folge (`sk`). Das ist kein zweites System: Die bestehende Wiederholung nach Abstand (`reps`, `due`, `right`, `wrong`) läuft weiter. Die Stufe kommt nur dazu.

| Stufe | Name | Aufgaben | Aufstieg nach |
|---|---|---|---|
| 0 | Neu | Kennenlernen: Wort, Übersetzung, Audio (auch langsam), Symbol, bis zu 2 Beispielsätze. Keine Eingabe | Ansehen |
| 1 | Kennengelernt | Auswahl aus **2** Antworten | 1× richtig |
| 2 | Wiedererkannt | Auswahl aus **3** Antworten (beide Richtungen), Paare finden | 2× richtig |
| 3 | Verstanden | Auswahl aus **4** Antworten ohne Hilfe, Paare finden | 2× richtig |
| 4 | Gefestigt | **erst jetzt tippen**, mit Tipp-Knopf (Buchstabe für Buchstabe) | 2× richtig |
| 5 | Sicher | tippen, Hören und tippen | – |

- Ein **Fehler** setzt das Wort eine Stufe zurück (nie unter 1).
- Bestehende Fortschritte werden beim ersten Laden aus den bisherigen Wiederholungen umgerechnet.

## 3. Sätze nach Stand der Einheit

Wie schwer eine Satzaufgabe ist, richtet sich nach der Durchschnittsstufe der Wörter der Einheit:

| Stand | Aufgaben |
|---|---|
| < 1,5 | Satz lesen und hören, Bedeutung aus 2–3 Antworten wählen |
| < 2,5 | lesen und wählen, Lücke mit 3 Antworten, deutsche Übersetzung legen |
| < 3,5 | Lücke mit 4 Antworten, Übersetzung legen, kurze Sätze bauen |
| < 4,5 | Sätze bauen, Lückentext, Hörverständnis nur mit Audio |
| ab 4,5 | Satz selbst schreiben, bauen, hören |

Neue Grammatik, also längere und freiere Satzaufgaben, kommt damit erst, wenn die Wörter sitzen.

## 4. Anpassung während der Lektion

- **Zwei Fehler hintereinander** machen die folgenden Aufgaben eine Stufe leichter, höchstens zwei Stufen.
- **Drei richtige Antworten** nehmen die Erleichterung wieder zurück.
- **Vier richtige in Folge** heben ganz leichte Aufgaben etwas an (von 2 auf 3 Antworten). Getippt wird trotzdem nie zu früh.
- Ein falsch beantwortetes Element kommt **3 Aufgaben später** in leichterer Form wieder.
- Ist ein Wort noch ganz neu oder wurde es zweimal verfehlt, erscheint es vorher nochmal als Kennenlern-Karte.
- **„Nochmal versuchen“** wiederholt dieselbe Aufgabe mit neu gemischten Antworten. Beim Tippen gibt es dazu einen Hinweis.
- **Tippfehler-Toleranz:** Abweichende Sonderzeichen oder Artikel und 1 Tippfehler (bei langen Wörtern 2) zählen als „fast richtig“, also als richtig mit Hinweis.

## 5. Ablauf einer Lektion

1. Neue Wörter in Zweiergruppen: Karte, Karte, dann sofort leicht wiedererkennen (2 Antworten).
2. Danach im Wechsel: zwei Wortaufgaben, eine Satzaufgabe. Jede Aufgabe richtet sich nach der aktuellen Stufe und wird erst beim Anzeigen ausgewählt.
3. Dialoge kommen erst in der zweiten Lektion einer Einheit.

Wiederholung und Abschlusstest nehmen zuerst schwierige, dann fällige Wörter, danach gemischte (Wiederholung nach Abstand).

## 6. Fehler gehören dazu

- Herzen kosten Fehler **nur noch im Abschlusstest**, und dort nicht doppelt für dieselbe Aufgabe.
- Rückmeldung bei Fehlern in warmem Orange statt Rot, mit freundlichem Text, der Lösung zum Anhören und einer kurzen Erklärung.
- Bis zur dritten Aufgabe beendet das ✕ die Lektion ohne Nachfrage.

## 7. Fortschritt sichtbar

- **Lernen:** Die Karte „Als Nächstes“ startet die nächste Station mit einem Tipp.
- **Wiederholen:** Die Karte „Deine Wörter“ zeigt, wie viele Wörter sicher sind, wie viele am Üben und wie viele noch neu. Mit „Alle Wörter ansehen“ siehst du jedes Wort mit seiner Stufe (5 Punkte), sortiert nach Einheit.
