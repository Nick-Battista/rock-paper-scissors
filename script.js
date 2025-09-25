// Getting the computer's choice
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

// Getting the player's choice
function getHumanChoice() {
    let playerChoice = prompt("Enter in rock, paper, or scissors...");
    return playerChoice;
}

// This function is the logic for a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase()
    let winner = "";

    if (humanChoice == computerChoice) {
        console.log("It's a DRAW! Well played!");
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You LOSE! Paper beats Rock!");
        winner = "computer";
        return winner;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You WIN! Rock beats Scissors!");
        winner = "human";
        return winner;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You WIN! Paper beats Rock!");
        winner = "human";
        return winner;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You LOSE! Scissors beats Paper!");
        winner = "computer";
        return winner;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You LOSE! Rock beats Scissors");
        winner = "computer";
        return winner;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You WIN! Scissors beats Paper!");
        winner = "human";
        return winner;
    }
}

// This function plays the game for 5 rounds and declares a winner
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let player = getHumanChoice();
        let computer = getComputerChoice();
        console.log(`-----Round #${i + 1}-----`)
        console.log(`You threw out: ${player}`);
        console.log(`The computer threw out: ${computer}`);

        let round = playRound(player, computer);

        if (round == "human") {
            humanScore += 1;
        }
        else if (round == "computer") {
            computerScore += 1;
        }
    }
    
    if (humanScore > computerScore) {
        console.log(`Congrats! You WON! ${humanScore} - ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`Nice try! You LOST! ${humanScore} - ${computerScore}`);
    }
    else {
        console.log(`Almost! It was a DRAW! ${humanScore} - ${computerScore}`);
    }
}

// Call the game to start
playGame();