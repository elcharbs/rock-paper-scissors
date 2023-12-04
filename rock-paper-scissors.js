function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice]
}

function playRound (buttonClicked) {
    // Change player choice to lower case for matching
    let playerChoice = buttonClicked
    let computerChoice = getComputerChoice();
    let outcome = '';
    if (playerChoice === computerChoice) {
        console.log("Tie game, you'll need to play again.");
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You win! Rock beats scissors.");
        return ++playerScore;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! Paper beats rock.");
        return ++computerScore;
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win! Paper beats rock.");
        return ++computerScore;
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
        let outcome = playRound();
        if (outcome === 'tie') {
            console.log('Tie game, play again');
        } else if (outcome === 'computerWin') {    
            ++computerScore;
            console.log(`Computer score is ${computerScore} and player score is ${playerScore}`);
        } else {
            ++playerScore;
            console.log(`Computer score is ${computerScore} and player score is ${playerScore}`);
        };
    };
    if (computerScore > playerScore) {
        console.log("The computer won the game with a score of " + computerScore + " to " + playerScore);
        return computerScore = 0, playerScore = 0;
    } else {
        console.log("You won the game with a score of " + playerScore + " to " + computerScore);
        return computerScore = 0, playerScore = 0;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent.toLowerCase());
        console.log(`Computer score is ${computerScore} and player score is ${playerScore}`);
    });
});