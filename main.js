function game(){

    const rockBtn = document.querySelector('#rockButton')
    const paperBtn = document.querySelector('#paperButton')
    const scissorsBtn = document.querySelector('#scissorsButton')

    rockBtn.addEventListener('click', rockRound);
    paperBtn.addEventListener('click', paperRound);
    scissorsBtn.addEventListener('click', scissorsRound);

    function rockRound(){
        playRound('rock');
    }

    function paperRound(){
        playRound('paper');
    }

    function scissorsRound(){
        playRound('scissors')
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

        const playerResults = document.querySelector('#round-results');
        playerResults.textContent= `${pAnswer.toUpperCase()} vs ${computerAnswer.toUpperCase()}`;

        console.log(pAnswer);
        console.log(computerAnswer)
        console.log(winner);
    }
}

game();