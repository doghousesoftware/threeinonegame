let menuMode = 0
let userChoice = 0
let myRandom = 0
input.onButtonPressed(Button.A, function () {
    if (menuMode != 0) {
        userChoice = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (menuMode != 0) {
        userChoice = 3
    }
})
input.onButtonPressed(Button.B, function () {
    if (menuMode != 0) {
        userChoice = 2
    } else {
        userChoice = 2
    }
})
input.onGesture(Gesture.Shake, function () {
    menuMode = 0
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
        myRandom = randint(1, 6)
        basic.showNumber(myRandom)
        basic.pause(2000)
        basic.clearScreen()
    }
})
