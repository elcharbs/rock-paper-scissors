function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice]
}

function playRound (buttonClicked) {
    // Change player choice to lower case for matching
    let playerChoice = buttonClicked
    let computerChoice = getComputerChoice();
    let message = '';
    if (playerChoice === computerChoice) {
        message = `Computer chose ${computerChoice}. Tie game, you'll need to play again.`;
        document.querySelector('.outcome').textContent = message;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        message = `Computer chose ${computerChoice}. You win! Rock beats scissors.`;
        document.querySelector('.outcome').textContent = message;
        ++playerScore;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        message = `Computer chose ${computerChoice}. You lose! Paper beats rock.`;
        document.querySelector('.outcome').textContent = message;
        ++computerScore;
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
        message = `Computer chose ${computerChoice}. You win! Paper beats rock.`;
        document.querySelector('.outcome').textContent = message;
        ++computerScore;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        message = `Computer chose ${computerChoice}. You lose! Scissors beats paper.`;
        document.querySelector('.outcome').textContent = message;
        ++computerScore;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        message = `Computer chose ${computerChoice}. You win! Scissors beats paper.`;
        document.querySelector('.outcome').textContent = message;
        ++playerScore;
    } else {
        message = `Computer chose ${computerChoice}. You lose! Rock beats scissors.`;
        document.querySelector('.outcome').textContent = message;
        ++computerScore;
    }
    document.querySelector("#computerScore").textContent = `Computer Score = ${computerScore.toString()}`;
    document.querySelector("#playerScore").textContent = `Player Score = ${playerScore.toString()}`;
    return computerScore, playerScore;
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
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            alert(`Computer won!`);
            computerScore = 0;
            playerScore = 0;
            document.querySelector("#computerScore").textContent = `Computer Score = ${computerScore.toString()}`;
        document.querySelector("#playerScore").textContent = `Player Score = ${playerScore.toString()}`;
        } else {
            alert('You won!');
            computerScore = 0;
            playerScore = 0;
            document.querySelector("#computerScore").textContent = `Computer Score = ${computerScore.toString()}`;
            document.querySelector("#playerScore").textContent = `Player Score = ${playerScore.toString()}`;
        }
        }
    })
});

