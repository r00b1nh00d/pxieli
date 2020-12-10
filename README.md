# WeihnachtsfeierLicht
## ~avatar avatar @unplugged
![PartyStern](https://github.com/r00b1nh00d/weihnachtsfeierlicht/blob/master/PartyStern3.gif?raw=true)

## ~ @unplugged
Du kannst für dieses Projekt den bereits gebauten Weihnachtsstern oder einen anderen Streifen des RGB-LED Bands nutzen. Beginnen wir erstmal mit einer einfachen Variante, bei der ein Lautstärkebalken vom ersten bis zum letzten Pixel gezeichnet wird.

gedulde dich noch ein wenig bis es soweit ist :-)


## Variante 1
Dazu musst du ``||basic.beim Start||`` dem Calliope wieder mittels ``||neopixel.zeige ||`` beibringen, wo der Neopixel angeschlossen ist. <br>
In die ``||basic:dauerhaft||``- Schleife kannst du den Block ``||neopixel.strip : zeige Balkendiagramm||`` und eine ``||basic:Pause||`` einfügen. <br>
Das Balkendiagramm soll von der gemessenen ``||input: lautstärke||`` bis zu einem Maximalwert gezeichnet werden (bei mir war 90 ein guter Maximalwert, diesen kannst du von 255 langsam verringern und experimentell herausfinden).





```blocks

let strip = neopixel.create(DigitalPin.P1, 50, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showBarGraph(input.soundLevel(), 70)
    strip.show()
    basic.pause(10)
})


```


> Diese Seite bei [https://r00b1nh00d.github.io/pxieli/](https://r00b1nh00d.github.io/pxieli/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/r00b1nh00d/pxieli** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/r00b1nh00d/pxieli/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/r00b1nh00d/pxieli** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/r00b1nh00d/pxieli/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
