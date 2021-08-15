/*
"computer" decides between rock, paper, or scissors

prompt asks player for their answer
will accept any variation of rock paper scissors
    will be case insensitive, and will accept scissor/scissors
    **needs answer checking or answer validation

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
        return("rock");
    }
    else if (number == 1){
        return ("paper");
    }
    else{
        return ("scissor");
    }
}

function playerPlay (){
    let selection =""
    selection = window.prompt("Please choose your answer: Rock, Paper, Scissors");
    selection = selection.toLowerCase();
    
}

function compareAnswers(playerSelection, computerSelection){

    if(computerSelection == "rock"){
        if (playerSelection == "rock"){
            return (0);  //0 = tie
        }

        else if (playerSelection == "paper"){
            return (1);  //human win
        }

        else {
            return(2);   //computer win
        }
    }

    else if (computerSelection == "paper"){
        if (playerSelection == "rock"){
            return(2);
        }

        else if (playerSelection == "paper"){
            return(0);
        }

        else {
            return(1);
        }
    }

    else { //scissor
        if (playerSelection == "rock"){
            return (1);
        }

        else if (playerSelection == "paper"){
            return (2);
        }

        else {
            return (0);
        }
    }
}

const computerAnswer = computerPlay();
console.log(computerAnswer);
const playerAnswer = playerPlay();
console.log(playerAnswer);

console.log(compareAnswers(playerAnswer,computerAnswer));