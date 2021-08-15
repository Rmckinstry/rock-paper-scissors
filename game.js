/*
"computer" decides between rock, paper, or scissors

prompt asks player for their answer
will accept any variation of rock paper scissors
    will be case insensitive, and will accept scissor/scissors

compare computer answer to player answer:
    if comp = rock =>       player: rock == tie, player: paper == win, player: scissor == lose
    if comp = paper =>      player: rock == lose, player: paper == tie, player: scissor == win
    if comp == scissor =>   player: rock == win, player == paper == lose, player == scissor == tie
returns result who wins

counter tracks computer wins and player wins
best of 5 rounds win the game
Displays winner
    (possibly asks the user to play again)
*/

function computerPlay () {
    let number = Math.round((Math.random()*2));

    if (number == 0){
        return("rock")
    }
    else if (number == 1){
        return ("paper")
    }
    else{
        return ("scissor")
    }
}

function compareAnswers(playerSelection, computerSelection){

    if(computerSelection == "rock"){
        if (playerSelection == "rock"){

        }

        else if (playerSelection == "paper"){

        }

        else {

        }
    }

    else if (computerSelection == "paper"){
        if (playerSelection == "rock"){

        }

        else if (playerSelection == "paper"){

        }

        else {
            
        }
    }

    else {
        if (playerSelection == "rock"){

        }

        else if (playerSelection == "paper"){

        }

        else {
            
        }
    }
}

const computerAnswer = computerPlay();
const playerAnswer = "rock";