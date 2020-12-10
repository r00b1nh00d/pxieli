let strip = neopixel.create(DigitalPin.P1, 50, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showBarGraph(input.soundLevel(), 70)
    strip.show()
    basic.pause(10)
})
