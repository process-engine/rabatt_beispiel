# Rabbat-Beispiel


## Was sind die Ziele dieses Projekts?

Dieses Repo dient der Demonstration der ProcessEngine.

### Szenario

Ein Projekt, das im E-Commerce-Bereich angesiedelt ist,nähert sich der Fertigstellung des ersten Meilensteins.

Der zuständige Entwickler erhält folgende Nachrichten zu den verschiedenen E-Mails, die durch das System verschickt werden sollen:

> Super! Wir müssen bei der Registrierung auch einen Aktivierungscode verschicken, mit dem User ihre E-Mail-Adresse aktivieren.

> Ah, vergessen! :D ;-) Dann sollten Benutzer, die sich bei ihrem ersten Einkauf registriert haben, noch einen Rabattcode über 10% des Warenwerts, aber jeder Nutzer einen Code über mindestens 10,00 EUR bekommen.

> Noch eine Sache: Falls Benutzer sich während der Bestellung erstmalig registriert haben, dann muss geguckt werden, ob sie Waren im Wert von über 1.000 EUR bestellt haben. Dann sollen sie auch einen Resellercode angeboten bekommen, zusätzlich zum Rabattcode.

> Die Reseller, die so viel bestellen, dürfen natürlich keinen 10%-Rabattcode kriegen, das sollte doch klar sein!!??!!

> Oh Gott!! Reseller, die sogar über 10.000 EUR bestellen, sollten natürlich trotzdem einen Rabattcode bekommen (aber nur für 5%). Aber die E-Mail dafür darf erst nach der für den Reseller-Code rausgehen!

> Wo lag jetzt das Missverständnis?

Das BPMN setzt diese Anforderungen um und demonstriert wie Fachabteilung und Technik "sich gemeinsam ein Bild machen".

## Wie kann ich das Projekt aufsetzen?


### Voraussetzungen

- [BPMN Studio](https://www.process-engine.io/downloads/)
- Node v10  oder höher
- npm


### Setup/Installation

Sowohl `external-task-worker` als auch `http-rest-service` sind Node-Projekte, deren Abhängigkeiten wie üblich installiert werden:

```shell
$ cd external-task-worker
$ npm install

$ cd http-rest-service
$ npm install
```

## Wie kann ich das Projekt benutzen?


### Benutzung

Das BPMN-Diagramm muss in Studio geöffnet und auf die interne ProcessEngine deployt werden (genauer gesagt muss es auf eine ProcessEngine unter der Adresse http://localhost:56000 deployt werden).

Die im Diagramm befindlichen Service-Tasks gehören entweder zum `external-task-worker` oder zum `http-rest-service`.

Diese Services müssen separat über die Shell gestartet werden.

```shell
$ cd external-task-worker
$ npm start

$ cd http-rest-service
$ npm start
```

Das Diagramm kann über BPMN Studio gestartet werden.
Ein Verändern des Start-Tokens ist durch einen "Custom Start" möglich (im Dropdown neben dem "Play"-Knopf).

## Was muss ich sonst noch wissen?

- Das bewusste Verändern des Start-Tokens ermöglicht das "Ablaufen" der unterschiedlichen Pfade.
- Die Angabe einer ungültigen E-Mail provoziert einen Fehler.
- Die Angabe eines negativen Betrags provoziert einen Fehler.
- Das bewusste Beenden der gestarteten Services ermöglicht die Demonstration des Verhaltens im Fehlerfall.

### Wen kann ich auf das Projekt ansprechen?

* René Föhring
