let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Starting Up")
    basic.pause(2000)
    OLED.writeStringNewLine("Done")
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
