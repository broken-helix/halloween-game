// Declare global variables
const buttons = document.getElementsByClassName("game-btn");
const computerChoiceElement = document.getElementById("computer-choice");
const playerChoiceElement = document.getElementById("user-choice");
const winState = document.getElementById("win-state");
const pumpkinSymbol = '<img src="assets/images/icons/3792037_halloween_horror_jack_pumpkin.svg" class="game-icon">';
const ghostSymbol = '<img src="assets/images/icons/3792018_casper_ghost_halloween_evil.svg" class="game-icon">';
const deathSymbol = '<img src="assets/images/icons/3792006_grim_death_halloween_reaper.svg" class="game-icon">';
const defaultSymbol = '<i class="fa-solid fa-question"></i>';
const resetGame = document.getElementById("reset");
let canPlay = true;

/*
Add event listener to Control Area buttons
Disable buttons after selection made
Highlight button pressed by adding .active class
Add selection to gameType variable
Call runGame function
Reset computer choice element to question mark ready for choice to be displayed
Remove highlight of button clicked
Allow player to select a new option and start a new game
Reset colours and symbols for next game, except for scores.
*/
for (let button of buttons) {
    button.addEventListener("click", function() {
        if (canPlay) {
            canPlay = false;
            button.classList.add("active");
            let gameType = this.getAttribute("id");
            runGame(gameType);
            computerChoiceElement.innerHTML = defaultSymbol;
            setTimeout(() => {
                button.classList.remove("active");
                canPlay = true;
            }, 700);
        }
        winState.innerHTML = defaultSymbol;
        winState.classList.remove("win","lose", "draw");
        playerChoiceElement.classList.remove("win", "lose", "draw");
        computerChoiceElement.classList.remove("win", "lose", "draw");
        //computerChoiceElement.style.borderColor = "#000";
        //playerChoiceElement.style.borderColor = "#000";
    });
}

// Displays the player's choice and removes highlights from buttons activated in previous game
function displayUserChoice(gameType) {
    const pumpkinChoice = document.getElementById("pumpkin");
    const deathChoice = document.getElementById("death");
    const ghostChoice = document.getElementById("ghost");
    if (gameType === "pumpkin") {
        playerChoiceElement.innerHTML = pumpkinSymbol;
        ghostChoice.classList.remove("active");
        deathChoice.classList.remove("active");
    } else if (gameType === "ghost") {
        playerChoiceElement.innerHTML = ghostSymbol;
        pumpkinChoice.classList.remove("active");
        deathChoice.classList.remove("active");
    } else if (gameType === "death") {
        playerChoiceElement.innerHTML = deathSymbol;
        ghostChoice.classList.remove("active");
        pumpkinChoice.classList.remove("active");
    }
}

/*
Calculates a random number between 0 and 2
Assigns random number to a game option
Displays the computer choice icon
Stores the result in a string to match player choices
Returns result
*/
function calculateComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoiceElement.innerHTML = pumpkinSymbol;
        computerChoice = "pumpkin";
    } else if (computerChoice === 1) {
        computerChoiceElement.innerHTML = ghostSymbol;
        computerChoice = "ghost";
    } else if (computerChoice === 2) {
        computerChoiceElement.innerHTML = deathSymbol;
        computerChoice = "death";
    }
    return computerChoice;
}

/* 
Runs the game and compares player and computer choices
Sets the text within the WinState element
*/
function runGame(gameType, computerChoice) {
    displayUserChoice(gameType);
    setTimeout(() => {
        computerChoice = calculateComputerChoice();
        if (gameType === computerChoice) {
            winState.innerText = "DRAW";
            winState.classList.add("draw");
        } else if ((gameType === "pumpkin" && computerChoice === "death") || 
            (gameType === "ghost" && computerChoice === "pumpkin") || 
            (gameType === "death" && computerChoice === "ghost")) {
            winState.innerText = "LOSE";
            winState.classList.add("lose");
        } else if ((gameType === "pumpkin" && computerChoice === "ghost") || 
            (gameType === "ghost" && computerChoice === "death") || 
            (gameType === "death" && computerChoice === "pumpkin")) {
            winState.innerText = "WIN";
            winState.classList.add("win");
        }
    incrementScores();
    }, 700);
}

/*
Increments the player and computer scores
Adds and removes classes to change the colours of scores, player and computer choices
*/
function incrementScores() {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    const userScoreElement = document.getElementById("user-score");
    const computerScoreElement = document.getElementById("computer-score");
    if (winState.innerText === "WIN") {
        userScoreElement.innerText = ++userScore;
        playerChoiceElement.classList.add("win");
        computerChoiceElement.classList.add("lose");
    } else if (winState.innerText === "LOSE") {
        computerScoreElement.innerText = ++computerScore;
        playerChoiceElement.classList.add("lose");
        computerChoiceElement.classList.add("win");
    } else if (winState.innerText === "DRAW") {
        playerChoiceElement.classList.add("draw");
        computerChoiceElement.classList.add("draw");
    }

    if (userScore === 9) {
        setTimeout(() => {
            endGameWin();
        }, 200); // Delay showing the alert for 1 second (adjust as needed)
    } else if (computerScore === 9) {
        setTimeout(() => {
            endGameLose();
        }, 200); // Delay showing the alert for 1 second (adjust as needed)
    }

    if ((userScore === computerScore) && (userScore > 0)) {
        userScoreElement.classList.remove("win", "lose");
        computerScoreElement.classList.remove("win", "lose");
        userScoreElement.classList.add("draw");
        computerScoreElement.classList.add("draw");
    } else if (userScore > computerScore) {
        userScoreElement.classList.remove("win", "lose", "draw");
        computerScoreElement.classList.remove("win", "lose", "draw");
        userScoreElement.classList.add("win");
        computerScoreElement.classList.add("lose");
    } else if (computerScore > userScore) {
        userScoreElement.classList.remove("win", "lose", "draw");
        computerScoreElement.classList.remove("win", "lose", "draw");
        userScoreElement.classList.add("lose");
        computerScoreElement.classList.add("win");
    }
}

function endGameWin() {
    Swal.fire({
        titleText:  "You Won!",
        html:       "You Beat Evil!!!<br /><h3>But can you do it again?</h3>",
        confirmButtonColor: "#6E0E0A",
        confirmButtonText: "Play Again",
        background: '#D74E09',
    });
    // Reset the game state
    document.getElementById("user-score").innerText = "0";
    document.getElementById("user-score").classList.remove("win", "lose", "draw");
    document.getElementById("computer-score").innerText = "0";
    document.getElementById("computer-score").classList.remove("win", "lose", "draw");
    winState.innerHTML = defaultSymbol;
    winState.classList.remove("win", "lose", "draw");
    playerChoiceElement.classList.remove("win", "lose", "draw");
    computerChoiceElement.classList.remove("win", "lose", "draw");
    playerChoiceElement.innerHTML = defaultSymbol;
    computerChoiceElement.innerHTML = defaultSymbol;
    canPlay = true; // Reset canPlay to allow the player to start a new game
}

const sweetAlertTextEndGameLost = "You Lost. Evil won. Would you like to try again?";

function endGameLose() {
    Swal.fire({
        titleText:  "You Lost!",
        text:       sweetAlertTextEndGameLost,
        confirmButtonColor: "#6E0E0A",
        confirmButtonText: "Try Again",
        background: '#D74E09',
    });
    // Reset the game state
    document.getElementById("user-score").innerText = "0";
    document.getElementById("user-score").classList.remove("win", "lose", "draw");
    document.getElementById("computer-score").innerText = "0";
    document.getElementById("computer-score").classList.remove("win", "lose", "draw");
    winState.innerHTML = defaultSymbol;
    winState.classList.remove("win", "lose", "draw");
    playerChoiceElement.classList.remove("win", "lose", "draw");
    computerChoiceElement.classList.remove("win", "lose", "draw");
    playerChoiceElement.innerHTML = defaultSymbol;
    computerChoiceElement.innerHTML = defaultSymbol;
    canPlay = true; // Reset canPlay to allow the player to start a new game
}

// Variable to display the text in the alert box
const sweetAlertText = "Select your choice from the 3 buttons, 'Pumpkin', 'Ghost', or 'Death'.\n  The computer will pick a random choice.\n  Death beats Pumpkin.\n  Ghost beats Death.\n  Pumpkin beats Ghost.\n The first to 9 points wins the game and a discount code for the event!";

// Sets the content for the sweetalert2 box
function howToPlay() {
    Swal.fire({
        icon:       "question",
        titleText:  "How to Play",
        text:       sweetAlertText,
        confirmButtonColor: "#6E0E0A",
        confirmButtonText: "Let's Play!",
        background: '#7286A0',
    });
}

// Locks button while game is in progress, resets elements to question marks, scores to 0 and removes classes to return colours to default
resetGame.addEventListener("click", function() {
    if (canPlay) {
        canPlay = false;
        document.getElementById("user-score").innerText = "0";
        document.getElementById("user-score").classList.remove("win", "lose", "draw");
        document.getElementById("computer-score").innerText = "0";
        document.getElementById("computer-score").classList.remove("win", "lose", "draw");
        winState.innerHTML = defaultSymbol;
        winState.classList.remove("win","lose", "draw");
        playerChoiceElement.classList.remove("win", "lose", "draw");
        computerChoiceElement.classList.remove("win", "lose", "draw");
        playerChoiceElement.innerHTML = defaultSymbol;
        computerChoiceElement.innerHTML = defaultSymbol;
    }
    canPlay = true;
});