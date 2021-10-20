function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var game = new Object()
game.win = 0
game.loss = 0

let choices = ["Rock", "Paper", "Scissors"]

var random1 = getRandomInt(0,2)
var random2 = getRandomInt(0,2)

var bot1 = choices[random1]
var bot2 = choices[random2]

const weapons = {
    Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
    Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
    Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
 }

 if (weapons[bot1].strongTo === bot2) {
     game.win = 1
 } else if (weapons[bot2].strongTo === bot1) {
     game.loss = 1
 }

if (game.win > 0) {
    console.log(bot1 + " beats " + bot2 + "! BotOne Wins!")
} else if (game.loss > 0) {
    console.log(bot2 + " beats " + bot1 + "! BotTwo Wins!")
} else {
    console.log("It's a tie!")
}