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
    else if (pSelection === "paper"){
        if (cSelection === "rock"){
            return `You win! ${pSelection} beats ${cSelection}`
        }
        else if (cSelection === "paper"){
            return "tie"
        }
        else{
            return `You lose! ${cSelection} beats ${pSelection}`
        }
    }
    else{
        if (cSelection === "rock"){
            return `You lose! ${cSelection} beats ${pSelection}`
        }
        else if (cSelection === "paper"){
            return `You win! ${pSelection} beats ${cSelection}`
        }
        else{
            return "tie"
        }
    }
}

function game(){
    const pcNumberOfVictories = 0;
    const playerNumberOfVictories = 0;
    for (let i = 0; i < 5; i++) {
        
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        const computerSelection = computerPlay();
        
        console.log(playRound(playerSelection, computerSelection));
        
        
    }
}

const playerSelection = "rock";