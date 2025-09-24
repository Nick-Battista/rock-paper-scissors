let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase()

    if (humanChoice == computerChoice) {
        console.log("It's a DRAW! Well played!");
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You LOSE! Paper beats Rock!");
        computerScore += 1;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You WIN! Rock beats Scissors!");
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You WIN! Paper beats Rock!");
        humanScore += 1;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You LOSE! Scissors beats Paper!");
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You LOSE! Rock beats Scissors");
        computerScore += 1;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You WIN! Scissors beats Paper!");
        humanScore += 1;
    }
}

let computer = getComputerChoice()
let player = getHumanChoice()

console.log(`The computer threw out: ${computer}`);
console.log(`You threw out: ${player}`);

playRound(player, computer);