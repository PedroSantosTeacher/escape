// Move left
input.onButtonPressed(Button.A, function () {
    if (playerX > 0) {
        playerX += 0 - 1
    }
})
// Move right
input.onButtonPressed(Button.B, function () {
    if (playerX < 4) {
        playerX += 1
    }
})
let enemyY = 0
let playerX = 0
playerX = 2
let enemyX = randint(0, 4)
let speed = 500
game.setScore(0)
basic.clearScreen()
basic.forever(function () {
    // Clear screen ONCE per frame
    basic.clearScreen()
    // Draw player
    led.plot(playerX, 4)
    // Draw enemy
    led.plot(enemyX, enemyY)
    basic.pause(speed)
    // Move enemy down
    enemyY += 1
    // Check collision
    if (enemyY == 4 && enemyX == playerX) {
        game.gameOver()
    }
    // Enemy reached bottom safely
    if (enemyY > 4) {
        enemyY = 0
        enemyX = randint(0, 4)
        game.addScore(1)
        // Gradually increase difficulty
        if (speed > 150) {
            speed += 0 - 30
        }
    }
})
