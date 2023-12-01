/* 
PSEUDOCODE

STEP I: Global Variable Init
Create array with rock, paper, scissors [DONE]
Create variable for computer score [DONE]
Create variable for player score [DONE]

On initial start... ask player if they want to play a game?
    If yes, proceed with new game
    Initialize while loop asking "Do you want to play a game now?" while the answer is not yes, stay in loop
    When yes, proceed with new game

Step II: Play a new game
Create a variable for computer choice
Create a variable for player choice
Randomly assign rock, paper, scissors to the computer
    Generate a random number from 0-1
    Look up number in array
    Return array postion as choice
Ask player for choice
    Check if choice is valid
    If valid, return choice
    Else, ask again
Determine winner
    If computer wins, increment their score by 1
    If player wins, increment their score by 1
Print message with win state and score

STEP II.I: Determine winner function
Take computer choice and player choice
If player player choice === computer choice then tie and start a new game
    If player choice === rock and computer choice === scissors then increment player score by 1
        else increment computer score by 1
    Else if player choice === scissors and computer choice === paper then increment player score by 1
        else increment computer score by 1
    If player choice === paper and computer choice === rock then increment player score by 1
        else increment computer score by 1

Step III: Wanna play again?
Ask player if they want to play again
    If yes, start a new game
    If no, ask if it's because they're losing
        If they answer yes, reset score and ask if they want to play again
            If they say yes, new game
            Else initialize a while loop with "How about a new game now?" until answer is yes
        Else initialize while loop with "Are you sure you don't want to play?" until answer is no

NOTE: Read the Odin Project instructions and they suggested not to overcomplicate this one... save the work for portfolio projects
With that in mind, just gonna follow the instructions but I'll leave the pseudocode in case I come back to this
*/

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice]
}

function playRound () {
    // Change player choice to lower case for matching
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        console.log("Tie game, you'll need to play again.");
        return computerScore, playerScore;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You win! Rock beats scissors.");
        return ++playerScore;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! Paper beats rock.");
        return ++computerScore;
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win! Paper beats rock.");
        return ++playerScore;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lose! Scissors beats paper.");
        return ++computerScore;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        console.log("You win! Scissors beats paper.");
        return ++playerScore;
    } else {
        console.log("You lose! Rock beats scissors.")
        return ++computerScore; 
    }
}

let computerScore = 0;
let playerScore = 0;

function game() {
    while (!(computerScore >= 5 || playerScore >= 5)) {
        playRound()
        console.log("Computer score: " + computerScore)
        console.log("Player score: " + playerScore)
    }
    if (computerScore > playerScore) {
        console.log("The computer won the game with a score of " + computerScore + " to " + playerScore)
    } else {
        console.log("You won the game with a score of " + playerScore + " to " + computerScore)
    }
}