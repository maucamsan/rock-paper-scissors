let roundButton = document.querySelectorAll(".optionButton");
const optionsDiv = document.querySelector("#options");

const playerPanel = document.querySelector(".selectionPanelDisplay");

const enemyPanel = document.querySelector(".enemySelectionPanelDisplay");

const nextRoundButton = document.querySelector("#nextRoundButton");
const roundWinner = document.querySelector("#roundWinner");
const gameState = document.querySelector("#gameState");
gameState.innerText = "Start!"


// For the enemy
const enemyPaperImageString = "/static/Images/Paper.png";
const enemyRockImageString = "/static/Images/Rock.png";
const enemyScissorsImageString = "/static/Images/Scissors.png";

// For the player
const paperImageString = "/static/Images/Paper.png";
const rockImageString = "/static/Images/Rock.png";
const scissorsImageString = "/static/Images/Scissors.png";


const restart = document.querySelector("#restartButton");
restart.addEventListener("click", function(){
    playerNumberOfVictories = 0;
    pcNumberOfVictories = 0;
    roundNumber = 1;
    startButton.style.cssText = "display:block";
    window.clearInterval(interval);
    window.clearInterval(opacityInterval);
    gameState.innerText = `Choose!`;
    roundButton.forEach(b =>{
            b.style.cssText = "display:none";
        });
    roundWinner.style.cssText = "display:none";
    hasSelection = false;
    timer.innerText = "4";
    nextRoundButton.style.cssText = "display:none";
    playerPanel.style.cssText ="display:none;";
    enemyPanel.style.cssText = "display:none;";
    optionsDiv.style.cssText = "display:none;"
    gameState.innerText = "Start!";
    restart.style.cssText = "display:none";
    
    
});

let hasSelection = false;


// Remeber not to display this element

// Images "caching" for the player
const paperImage = document.createElement("img");
paperImage.setAttribute("src", paperImageString);
paperImage.setAttribute("alt", "Paper image");
paperImage.setAttribute("data-key", "paper");



const rockImage = document.createElement("img");
rockImage.setAttribute("src", rockImageString);
rockImage.setAttribute("alt", "Rock image");
rockImage.setAttribute("data-key", "rock");


const scissorsImage = document.createElement("img");
scissorsImage.setAttribute("src", scissorsImageString);
scissorsImage.setAttribute("alt", "Scissors image");
scissorsImage.setAttribute("data-key", "scissors");

const imagesArray = [paperImage, rockImage, scissorsImage];


// Images "caching" for the Enemy
const enemyPaperImage = document.createElement("img");
enemyPaperImage.setAttribute("src", enemyPaperImageString);
enemyPaperImage.setAttribute("alt", "Paper image");
enemyPaperImage.setAttribute("data-key", "paper");



const enemyRockImage = document.createElement("img");
enemyRockImage.setAttribute("src", enemyRockImageString);
enemyRockImage.setAttribute("alt", "Rock image");
enemyRockImage.setAttribute("data-key", "rock");


const enemyScissorsImage = document.createElement("img");
enemyScissorsImage.setAttribute("src", enemyScissorsImageString);
enemyScissorsImage.setAttribute("alt", "Scissors image");
enemyScissorsImage.setAttribute("data-key", "scissors");

const enemyImagesArray = [enemyPaperImage, enemyRockImage, enemyScissorsImage];

/////////////////////////////

// async for the player

let roundOnCourse = false;

const startButton = document.querySelector("#startButton");

let gameStarted = false;
let optionImage = document.createElement("img");

const imagePaper = new Image();
const imageRock = new Image();
const imageScissors = new Image();
const imgArr = [imagePaper, imageRock, imageScissors];

imagePaper.onload = function(){
    imagesArray[0] = this;
}
imageRock.onload = function(){
    imagesArray[1] = this;
}
imageScissors.onload = function(){
    imagesArray[2] = this;
}

////////////////////////////
// Async for the enemy

const imageEnemyPaper = new Image();
const imageEnemyRock = new Image();
const imageEnemyScissors = new Image();
const imgEnemyArr = [imageEnemyPaper, imageEnemyRock, imageEnemyScissors];

imageEnemyPaper.onload = function(){
    enemyImagesArray[0] = this;
}
imageEnemyRock.onload = function(){
    enemyImagesArray[1] = this;
}
imageEnemyScissors.onload = function(){
    enemyImagesArray[2] = this;
}


// Next round button functionality
nextRoundButton.addEventListener("click", function(){
    ++roundNumber;
    gameState.innerText = `Choose!`;
    roundButton.forEach(b =>{
        b.style.cssText = "display:block";
    });
    roundWinner.style.cssText = "display:none";
    hasSelection = false;

    RandomImagesDisplay();
    nextRoundButton.style.cssText = "display:none";
});


startButton.addEventListener("click", function(){
    restart.style.cssText = "display:block";
    playerPanel.style.cssText ="display:flex; flex-wrap:wrap;";
    enemyPanel.style.cssText = "display:flex; flex-wrap:wrap;";
    optionsDiv.style.cssText = "display:flex; flex-wrap:wrap; margin-bottom: 20px; flex-direction:row; justify-content: space-evenly; width: auto;"
    gameState.innerText = "Choose!";
    
    roundButton.forEach(b =>{
        b.style.cssText = "display:block";
    });
    
    for (let j = 0; j < imagesArray.length; j++){
        imagesArray[j].setAttribute("class", "displayedOption");
        playerPanel.appendChild(imagesArray[j])
    }
    
    for (let k = 0; k < enemyImagesArray.length; k++){
        enemyImagesArray[k].setAttribute("class","displayedOption");
        enemyPanel.appendChild(enemyImagesArray[k]);
    }
    
    RandomImagesDisplay();
    
    startButton.style.cssText = 'display: none;'

});

// Better approach: have the images instatiated, but disable two of them and enable the other one;
let timer = document.createElement("p");
timer.innerText = "4";

let previousTime = Date.now();
let imageNodeList;
let imagesArrFromNode;

function RandomImagesDisplay(){

    let i = 0;
    timer.style.cssText = "margin-left:auto; margin-right:auto;"
    playerPanel.appendChild(timer);

    while (i < 3)
    {
        imgArr[i] = imgArr[i];
      
        i++;
    }
    imageNodeList = document.querySelectorAll(".displayedOption");
    
    
   
    timerSelection();                                                          

}



let interval;
let opacityInterval;
const timerSelection = function() {
    let timerSecs = 4;
    hasSelection = false;
    let currentTime = Date.now();

    let starter = new Date()
 
        interval = setInterval(() => {
        timerSecs -= 1;
        timer.innerHTML = timerSecs;
        if (hasSelection)
        {
            window.clearInterval(interval);
            window.clearInterval(opacityInterval);
        }
        if (timerSecs <= 0){
            window.clearInterval(interval);
            game("paper", "scissors");
            nextRoundButton.style.cssText = "display:block;text-align:center;width:auto";
            // Automatically lose round
        }
        else{
            let timerOpacity = 4;
            opacityInterval = setInterval(() => {
                if (hasSelection)
                {
                    window.clearInterval(opacityInterval);   
                }
                timerOpacity -= 1;

                imagesArrFromNode[Math.floor(Math.random() * 3)].style.cssText = "opacity:1";
                imagesArrFromNode[Math.floor((Math.random() * 3) + 3)].style.cssText = "opacity:1";
                if (timerOpacity <= 0) window.clearInterval(opacityInterval);
                else{
                    imagesArrFromNode[Math.floor(Math.random() * 3)].style.cssText = "opacity:0";
                    imagesArrFromNode[Math.floor((Math.random() * 3) + 3)].style.cssText = "opacity:0";
                }
            }, 90);
           

        }
    }, 1000);


    
    imagesArrFromNode = Array.from(imageNodeList);

}


roundButton.forEach(but => but.addEventListener("click", function() {
        hasSelection = true;
        
        window.clearInterval(opacityInterval);
        window.clearInterval(interval);
        
        let playerSelectionButton = but.innerText.toLowerCase();
        game(playerSelectionButton, computerPlay())

        roundButton.forEach(b => {
            b.style.cssText = "display:none";
        });
        nextRoundButton.style.cssText = "display:block;text-align:center;width:auto";
        if (playerNumberOfVictories >= 3 || pcNumberOfVictories >= 3){
            nextRoundButton.style.cssText = "display:none"; 
        }

    })
);



// Put images inside computer's panel and display selection

function computerPlay(){
    const actions = ["Rock", "Paper", "Scissors"];
    return actions[Math.floor(Math.random() * (3))].toLowerCase();
}

function playRound(playerSelection, computerSelection){
    const pSelection = playerSelection.toLowerCase()
    const cSelection = computerSelection.toLowerCase()
    // Rock -> scissors, Scissors -> Paper, Paper -> Rock
    imagesArrFromNode[0].style.cssText = "opacity: 0";
    imagesArrFromNode[1].style.cssText = "opacity: 0";
    imagesArrFromNode[2].style.cssText = "opacity: 0";
    imagesArrFromNode[3].style.cssText = "opacity: 0";
    imagesArrFromNode[4].style.cssText = "opacity: 0";
    imagesArrFromNode[5].style.cssText = "opacity: 0";
    gameState.innerText = `Round ${roundNumber}`;
    if (pSelection === "rock"){
        imagesArrFromNode[1].style.cssText = "opacity: 1";
        
        
        if (cSelection === "rock"){
            imagesArrFromNode[4].style.cssText = "opacity: 1";
            
            return 0
        }
        else if (cSelection === "paper"){
            imagesArrFromNode[3].style.cssText = "opacity: 1";
            
            return -1
        }
        else{
            imagesArrFromNode[5].style.cssText = "opacity: 1";
            
            return 1
        }
    }
    else if (pSelection === "paper"){
        imagesArrFromNode[0].style.cssText = "opacity: 1";
        
        if (cSelection === "rock"){
            imagesArrFromNode[4].style.cssText = "opacity: 1";
            
            return 1
        }
        else if (cSelection === "paper"){
            imagesArrFromNode[3].style.cssText = "opacity: 1";
            
            return 0
        }
        else{
            imagesArrFromNode[5].style.cssText = "opacity: 1";
            
            return -1
        }
    }
    else if (pSelection === "scissors"){
        imagesArrFromNode[2].style.cssText = "opacity: 1";
        
        if (cSelection === "rock"){
            imagesArrFromNode[4].style.cssText = "opacity: 1";
            
            return -1
        }
        else if (cSelection === "paper"){
            imagesArrFromNode[3].style.cssText = "opacity: 1";
            
            return 1
        }
        else{
            imagesArrFromNode[5].style.cssText = "opacity: 1";
            
            return 0
        }
    }
    
}

let pcNumberOfVictories = 0;
let playerNumberOfVictories = 0;
let roundNumber = 1;

function game(playerSelectionBut, computerSelectionB){

    let roundResult = playRound(playerSelectionBut, computerSelectionB);
    
    if (roundResult > 0){
        playerNumberOfVictories++;
        roundWinner.style.cssText = "display:block";
        roundWinner.innerText = "Round Winner: Player";
        console.log(computerSelectionB);
    }
    else if (roundResult < 0){
        pcNumberOfVictories++;
        roundWinner.style.cssText = "display:block";
        roundWinner.innerText = "Round Winner: Machine";
        console.log(computerSelectionB);

    }
    else{
        roundWinner.style.cssText = "display:block";
        roundWinner.innerText = "It's a Tie!";
        console.log(computerSelectionB);

    }
    
    

    if (playerNumberOfVictories >= 3 || pcNumberOfVictories >= 3){

        if (pcNumberOfVictories > playerNumberOfVictories){
            nextRoundButton.style.cssText = "display:none";
            roundWinner.innerText = "Computer wins the game";
            
            //console.log("Computer wins the game");
        }
        if (playerNumberOfVictories > pcNumberOfVictories){
            nextRoundButton.style.cssText = "display:none";
            roundWinner.innerText = "Player wins the game";
            nextRoundButton.style.cssText = "display:none";
            //console.log("You win the game")
        }
    }
    
    
}

    
