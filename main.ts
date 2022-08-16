input.onButtonPressed(Button.A, function () {
    led.setBrightness(123)
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        # # # # #
        `)
    basic.showArrow(ArrowNames.South)
    led.setBrightness(255)
})
basic.showString("hello")
basic.pause(1000)
basic.showString("my name is jimena ")
