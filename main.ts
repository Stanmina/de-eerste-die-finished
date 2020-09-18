input.onButtonPressed(Button.A, function () {
    player1 += randint(0, 2)
    basic.showNumber(player1)
    if (player1 == 0) {
        if (player2 == 0) {
            basic.clearScreen()
        } else if (player2 == 1) {
        	
        } else if (player2 == 2) {
            basic.showLeds(`
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 3) {
            basic.showLeds(`
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 4) {
            basic.showLeds(`
                . . . . .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 5) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        }
    } else if (player1 == 1) {
        if (player2 == 0) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 1) {
            basic.showLeds(`
                # . . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 2) {
            basic.showLeds(`
                # . . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 3) {
            basic.showLeds(`
                # . . . .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 4) {
            basic.showLeds(`
                # . . . .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 >= 5) {
            basic.showLeds(`
                # . . . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        }
    } else if (player1 == 2) {
        if (player2 == 0) {
            basic.showLeds(`
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 1) {
            basic.showLeds(`
                # # . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 2) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 3) {
            basic.showLeds(`
                # # . . .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 4) {
            basic.showLeds(`
                # # . . .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 >= 5) {
            basic.showLeds(`
                # # . . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        }
    } else if (player1 == 3) {
        if (player2 == 0) {
            basic.showLeds(`
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 1) {
            basic.showLeds(`
                # # # . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 2) {
            basic.showLeds(`
                # # # . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 3) {
            basic.showLeds(`
                # # # . .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 4) {
            basic.showLeds(`
                # # # . .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 >= 5) {
            basic.showLeds(`
                # # # . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        }
    } else if (player1 == 4) {
        if (player2 == 0) {
            basic.showLeds(`
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 1) {
            basic.showLeds(`
                # # # # .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 2) {
            basic.showLeds(`
                # # # # .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 3) {
            basic.showLeds(`
                # # # # .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 == 4) {
            basic.showLeds(`
                # # # # .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player2 >= 5) {
            basic.showLeds(`
                # # # # .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        }
    } else if (player1 >= 5) {
        if (player2 == 0) {
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        } else if (player2 == 1) {
            basic.showLeds(`
                # # # # #
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        } else if (player2 == 2) {
            basic.showLeds(`
                # # # # #
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        } else if (player2 == 3) {
            basic.showLeds(`
                # # # # #
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        } else if (player2 == 4) {
            basic.showLeds(`
                # # # # #
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        } else if (player2 >= 5) {
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Tie += 1
            basic.showString("Tie")
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Player 1")
    basic.clearScreen()
    basic.showString("" + (Score1))
    basic.clearScreen()
    basic.showString("Player 2")
    basic.clearScreen()
    basic.showString("" + (Score2))
    basic.clearScreen()
    basic.showString("Tie")
    basic.clearScreen()
    basic.showString("" + (Tie))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    player2 += randint(0, 2)
    basic.showNumber(player2)
    if (player2 == 0) {
        if (player1 == 0) {
            basic.clearScreen()
        } else if (player1 == 1) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 2) {
            basic.showLeds(`
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 3) {
            basic.showLeds(`
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 4) {
            basic.showLeds(`
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 >= 5) {
            basic.showLeds(`
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        }
    } else if (player2 == 1) {
        if (player1 == 0) {
            basic.showLeds(`
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 1) {
            basic.showLeds(`
                # . . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 2) {
            basic.showLeds(`
                # # . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 3) {
            basic.showLeds(`
                # # # . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 4) {
            basic.showLeds(`
                # # # # .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 >= 5) {
            basic.showLeds(`
                # # # # #
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        }
    } else if (player2 == 2) {
        if (player1 == 0) {
            basic.showLeds(`
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 1) {
            basic.showLeds(`
                # . . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 2) {
            basic.showLeds(`
                # # . . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 3) {
            basic.showLeds(`
                # # # . .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 4) {
            basic.showLeds(`
                # # # # .
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 >= 5) {
            basic.showLeds(`
                # # # # #
                # # . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        }
    } else if (player2 == 3) {
        if (player1 == 0) {
            basic.showLeds(`
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 1) {
            basic.showLeds(`
                # . . . .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 2) {
            basic.showLeds(`
                # # . . .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 3) {
            basic.showLeds(`
                # # # . .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 4) {
            basic.showLeds(`
                # # # # .
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 >= 5) {
            basic.showLeds(`
                # # # # #
                # # # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        }
    } else if (player2 == 4) {
        if (player1 == 0) {
            basic.showLeds(`
                . . . . .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 1) {
            basic.showLeds(`
                # . . . .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 2) {
            basic.showLeds(`
                # # . . .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 3) {
            basic.showLeds(`
                # # # . .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 == 4) {
            basic.showLeds(`
                # # # # .
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (player1 >= 5) {
            basic.showLeds(`
                # # # # #
                # # # # .
                . . . . .
                . . . . .
                . . . . .
                `)
            Score1 += 1
            basic.showString("Player 1 Wins")
        }
    } else if (player2 >= 5) {
        if (player1 == 0) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        } else if (player1 == 1) {
            basic.showLeds(`
                # . . . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        } else if (player1 == 2) {
            basic.showLeds(`
                # # . . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        } else if (player1 == 3) {
            basic.showLeds(`
                # # # . .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        } else if (player1 == 4) {
            basic.showLeds(`
                # # # # .
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Score2 += 1
            basic.showString("Player 2 Wins")
        } else if (player1 >= 5) {
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            Tie += 1
            basic.showString("Tie")
        }
    }
})
let Tie = 0
let Score2 = 0
let Score1 = 0
let player2 = 0
let player1 = 0
player1 = 0
player2 = 0
Score1 = 0
Score2 = 0
