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

    return (selection)
    
}
// 0 = tie 1 =human win 2 = computer
function compareAnswers(playerSelection, computerSelection){

    if(computerSelection == "rock"){
        switch (playerSelection){
            case 'rock':
                return (0);
            
            case 'paper':
                return(1);
            
            case 'scissor':
                return(2);
            
            case 'scissors':
                return(2);
            
            default:
                console.log('Invalid Answer');
                return(3);
        }
    }

    else if (computerSelection == "paper"){
        switch (playerSelection){
            case 'rock':
                return (2);
            
            case 'paper':
                return(0);
            
            case 'scissor':
                return(1);
            
            case 'scissors':
                return(1);
            
            default:
                console.log('Invalid Answer');
                return(3);
        }
    }

    else { //scissor
        switch (playerSelection){
            case 'rock':
                return (1);
            
            case 'paper':
                return(2);
            
            case 'scissor':
                return(0);
            
            case 'scissors':
                return(0);
            
            default:
                console.log('Invalid Answer');
                return(3);
        }
    }
}

const computerAnswer = computerPlay();
console.log("Computer plays " + computerAnswer);
const playerAnswer = playerPlay();
console.log(playerAnswer);

console.log(compareAnswers(playerAnswer,computerAnswer));