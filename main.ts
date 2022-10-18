// A = change radio group, and change hand.
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        state = 1
    }
    if (receivedNumber == 6) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        state = 2
    }
    if (state == 3) {
        radio.sendNumber(position)
        if (receivedNumber == 0 && position == 1) {
            basic.showString("YOU WIN")
            W += 1
            basic.showString("Wins = " + W + ", Losses = " + L)
        } else if (receivedNumber == 0 && position == 2) {
            basic.showString("YOU LOSE")
            L += 1
            basic.showString("Wins = " + W + ", Losses = " + L)
        } else if (receivedNumber == 1 && position == 0) {
            basic.showString("YOU LOSE")
            L += 1
            basic.showString("Wins = " + W + ", Losses = " + L)
        } else if (receivedNumber == 1 && position == 2) {
            basic.showString("YOU WIN")
            W += 1
            basic.showString("Wins = " + W + ", Losses = " + L)
        } else if (receivedNumber == 2 && position == 0) {
            basic.showString("YOU WIN")
            W += 1
            basic.showString("Wins = " + W + ", Losses = " + L)
        } else if (receivedNumber == 2 && position == 1) {
            basic.showString("YOU LOSE")
            L += 1
            basic.showString("Wins = " + W + ", Losses = " + L)
        } else if (position == receivedNumber) {
            basic.showString("DRAW")
            basic.showString("Wins = " + W + ", Losses = " + L)
        }
        state = 2
    }
})
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        radio.sendNumber(5)
        state += 1
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    } else if (state == 1) {
        position += 1
        position = position % 5
        radio.setGroup(radio_group[position])
        basic.showString("" + (title_screen[position]))
    } else if (state == 2) {
        position += 1
        position = position % 3
        if (position == 0) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (position == 1) {
            basic.clearScreen()
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (position == 2) {
            basic.clearScreen()
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (state == 1) {
        radio.sendNumber(6)
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        state += 1
    }
})
// A = Set radio group, and set hand.
// 
// B = Initiate input window.
// 
// A + B = Reset program.
let state = 0
let title_screen: string[] = []
let radio_group: number[] = []
let position = 0
let L = 0
let W = 0
W = 0
L = 0
position = 0
radio_group = [
202,
203,
204,
205,
206
]
title_screen = [
"GROUP",
"SOLO1",
"SOLO2",
"SOLO3",
"SOLO4"
]
state = 0
let timer = 11
loops.everyInterval(2000, function () {
    while (state == 2) {
        if (timer == 11) {
            basic.showString("ENTER HAND",80)
        }
        timer += -1
        basic.showNumber(timer,170)
if (timer == 0) {
            timer = 11
            state += 1
            basic.clearScreen()
            radio.sendNumber(position)
        }
    }
})
