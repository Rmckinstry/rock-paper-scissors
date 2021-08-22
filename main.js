function game(){
    let pCount =0;
    let cCount=0;

    const rockBtn = document.querySelector('#rockButton')
    const paperBtn = document.querySelector('#paperButton')
    const scissorsBtn = document.querySelector('#scissorsButton')

    
    rockBtn.addEventListener('click', rockRound);
    paperBtn.addEventListener('click', paperRound);
    scissorsBtn.addEventListener('click', scissorsRound);
   
    function rockRound(){
       if(pCount < 5 && cCount < 5){
        playRound('rock');
       } 
    }

    function paperRound(){
        if(pCount < 5 && cCount < 5){
            playRound('paper');
        }
        
    }

    function scissorsRound(){
        if(pCount < 5 && cCount < 5){
            playRound('scissors')
        }
        
    }

    function playRound(playerAnswer){
        
        function computerPlay () {
            let number = Math.round((Math.random()*2));
        
            if (number == 0){
                return("rock");
            }
            else if (number == 1){
                return ("paper");
            }
            else{
                return ("scissors");
            }
        }

        // 0 = tie 1 =human win 2 = computer
        function compareAnswers(playerSelection, computerSelection){
    
            if(computerSelection == "rock"){
                switch (playerSelection){
                    case 'rock':
                        return (0);
                    
                    case 'paper':
                        return(1);
                    
                    case 'scissors':
                        return(2);
                }
            }
        
            else if (computerSelection == "paper"){
                switch (playerSelection){
                    case 'rock':
                        return (2);
                    
                    case 'paper':
                        return(0);
                    
                    case 'scissors':
                        return(1);
                }
            }
        
            else { //scissor
                switch (playerSelection){
                    case 'rock':
                        return (1);
                    
                    case 'paper':
                        return(2);
                    
                    case 'scissors':
                        return(0);
                }
            }
        }

        let pAnswer = playerAnswer;
        const computerAnswer = computerPlay();
        let winner = (compareAnswers(pAnswer,computerAnswer));
        
        
        const results = document.querySelector('#round-results');
        results.textContent= `${pAnswer.toUpperCase()} vs ${computerAnswer.toUpperCase()}`;

        const roundWin = document.querySelector('#round-win');
        

        if (winner==1){
            pCount++;
            if(pCount<5){
                roundWin.textContent = `PLAYER WINS THIS ROUND`;
            }
            else{
                roundWin.classList.add("player-win");
                roundWin.textContent = `PLAYER WINS THE GAME!!!`;
            }
            
        }
        else if (winner==2){
            cCount++;
            if(cCount<5){
                roundWin.textContent = `COMPUTER WINS THIS ROUND`;
            }
            else{
                roundWin.classList.add("comp-win");
                roundWin.textContent = `COMPUTER WINS THE GAME!!!`;
            }
            
        }
        else{
            roundWin.textContent = `TIE!!`
        }

        const playerScore = document.querySelector('#playerScore');
        const computerScore = document.querySelector('#computerScore');

        playerScore.textContent = `Player: ${pCount}`;
        computerScore.textContent=`Computer: ${cCount}`;
    }
}

game();