let userChoice = 0
let myRandom = 0
input.onButtonPressed(Button.A, function () {
    userChoice = 1
})
input.onButtonPressed(Button.AB, function () {
    userChoice = 3
})
input.onButtonPressed(Button.B, function () {
    userChoice = 2
})
input.onGesture(Gesture.Shake, function () {
    if (userChoice == 1) {
        myRandom = randint(0, 1)
        if (myRandom == 0) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                # . . . #
                . # # # .
                `)
            basic.pause(2000)
            basic.clearScreen()
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . # . # .
                . # . # .
                # . . . #
                `)
            basic.pause(2000)
            basic.clearScreen()
        }
    }
    if (userChoice == 2) {
        myRandom = randint(1, 3)
        if (myRandom == 1) {
            basic.showLeds(`
                . . . # .
                . # # # #
                . # # # #
                # # # # #
                . # # # .
                `)
            basic.pause(2000)
            basic.clearScreen()
        } else if (myRandom == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(2000)
            basic.clearScreen()
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            basic.pause(2000)
            basic.clearScreen()
        }
    }
    if (userChoice == 3) {
        basic.showNumber(randint(1, 6))
        basic.pause(2000)
        basic.clearScreen()
    }
    music.playTone(988, music.beat(BeatFraction.Eighth))
})
