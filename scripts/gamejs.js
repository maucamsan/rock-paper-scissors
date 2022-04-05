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
    let pcNumberOfVictories = 0;
    let playerNumberOfVictories = 0;
    for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection) 
        console.log(roundResult);
        
        if (roundResult.includes("win")){
            playerNumberOfVictories++;
        }
        else{
            pcNumberOfVictories++;
        }
    }
    
    if (pcNumberOfVictories > playerNumberOfVictories){
        console.log("Computer wins the game");
    }
    else if (playerNumberOfVictories > pcNumberOfVictories){
        console.log("You win the game")
    }
    else{
        console.log("It\'s a tie!")
    }
}

    
