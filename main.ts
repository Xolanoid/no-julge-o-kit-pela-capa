input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 45)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    robotbit.Servo(robotbit.Servos.S1, 135)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 225)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    robotbit.Servo(robotbit.Servos.S1, 270)
})
