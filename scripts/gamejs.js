function computerPlay(){
    const actions = ["Rock", "Paper", "Scissors"];
    return actions[Math.floor(Math.random() * (3))].toLowerCase();
}

function playRound(playerSelection, computerSelection){
    const pSelection = playerSelection.toLowerCase()
    const cSelection = computerSelection.toLowerCase()
    // Rock -> scissors, Scissors -> Paper, Paper -> Rock
    if (pSelection === "rock"){
        if (cSelection === "rock"){
            return "tie"
        }
        else if (cSelection === "paper"){
            return `You lose! ${cSelection} beats ${pSelection}`
        }
        else{
            return `You win! ${pSelection} beats ${cSelection}`
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));