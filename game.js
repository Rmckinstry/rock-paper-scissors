function game(){
    let computerWin = 0;
    let playerWin = 0;
    let round = computerWin +playerWin +1;

    while (computerWin < 3 && playerWin < 3){
        const computerAnswer = computerPlay();
        const playerAnswer = playerPlay();
        let winner = (compareAnswers(playerAnswer,computerAnswer));

        if (winner == '1'){
            playerWin++;
            console.log(`PLAYER WINS ROUND ${round}. The computer played: ${computerAnswer.toLocaleUpperCase()}. You played ${playerAnswer.toUpperCase()}.`);
            round++;
        }
        else if (winner == '2'){
            computerWin++;
            console.log(`COMPUTER WINS ROUND ${round}. The computer played: ${computerAnswer.toLocaleUpperCase()}. You played ${playerAnswer.toUpperCase()}.`);
            round++;
        }
        else if (winner == '0'){
            console.log(`TIE ROUND - REDO!. The computer played: ${computerAnswer.toLocaleUpperCase()}. You played ${playerAnswer.toUpperCase()}.`);
        }
        else{
            console.log('Invalid answer! Please try again')
        }

        console.log('Player Wins: '+playerWin + '          '+'Computer Wins: '+computerWin+'          BEST OF 5');
        console.log('------------------------------------------------------------------');
    }

    if (computerWin>playerWin){
        console.log('COMPUTER WINS THE GAME!!!!!');
    }
    else{
        console.log('PLAYER WINS THE GAME!!!!!');
    }

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
        //selection = window.prompt("Please choose your answer: Rock, Paper, Scissors");
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
                    return(3);
            }
        }
    }
}

game()

/*let playAgain = window.prompt("Play again? 1 for YES -- 2 for NO");
if (playAgain == 1){
    console.log('NEW GAME')
    console.log();
    game()
}
else{
    console.log('Goodbye!')
}
*/