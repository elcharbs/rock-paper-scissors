/* 
PSEUDOCODE

STEP I: Global Variable Init
Create array with rock, paper, scissors
Create variable for computer score
Create variable for player score

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
If player player choice === computer choice then tie
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
*/