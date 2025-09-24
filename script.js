function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    let move = "";
    if (num == 1) {
        move = "Rock";
    }
    else if (num == 2) {
        move = "Paper";
    }
    else if (num == 3) {
        move = "Scissors";
    }
    return move;
}

let result = getComputerChoice()
console.log(result);