function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if (num == 1) {
        computerChoice = "rock";
    }
    else if (num == 2) {
        computerChoice = "paper";
    }
    else if (num == 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
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


// function throwMoves() {
//     let computer = getComputerChoice();
//     let player = getHumanChoice();

//     console.log(`The computer threw out: ${computer}`);
//     console.log(`You threw out: ${player}`);

//     return player, computer;
// }



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let computer = getComputerChoice();
        let player = getHumanChoice();
        console.log(`The computer threw out: ${computer}`);
        console.log(`You threw out: ${player}`);

        playRound(player, computer);
    }
    
}

playGame();