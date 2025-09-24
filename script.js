function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    let move = "";
    if (num == 1) {
        move = "rock";
    }
    else if (num == 2) {
        move = "paper";
    }
    else if (num == 3) {
        move = "scissors";
    }
    return move;
}

function getHumanChoice() {
    let playerChoice = prompt("Enter in rock, paper, or scissors...");
    return playerChoice;
}

let computer = getComputerChoice()
let player = getHumanChoice()

console.log(computer);
console.log(player);