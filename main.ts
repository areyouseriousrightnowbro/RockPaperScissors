/**
 * if youre reading this im not done yet im finidhing up
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        radio.sendNumber(8)
    } else if (receivedNumber == 8) {
        radio.sendNumber(9)
    } else if (receivedNumber == 9) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        state = 1
    }
    if (state == 2) {
        if (receivedNumber == 0 && position == 1) {
            basic.showString("YOU WIN")
        }
        if (receivedNumber == 0 && position == 2) {
            basic.showString("YOU LOSE")
        }
        if (receivedNumber == 1 && position == 0) {
            basic.showString("YOU LOSE")
        }
        if (receivedNumber == 1 && position == 2) {
            basic.showString("YOU WIN")
        }
        if (receivedNumber == 2 && position == 0) {
            basic.showString("YOU WIN")
        }
        if (receivedNumber == 2 && position == 1) {
            basic.showString("YOU LOSE")
        }
        if (position == receivedNumber) {
            basic.showString("DRAW")
        }
        control.reset()
    }
})
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        position += 1
        position = position % 5
        radio.setGroup(radio_group[position])
        basic.showString("" + (title_screen[position]))
    } else if (state == 1) {
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
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        radio.sendNumber(5)
        state += 1
    }
})
let state = 0
let title_screen: string[] = []
let radio_group: number[] = []
let position = 0
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
    while (state == 1) {
        timer += -1
        basic.showNumber(timer)
        if (timer == 0) {
            state += 1
            basic.clearScreen()
            radio.sendNumber(position)
        }
    }
})
