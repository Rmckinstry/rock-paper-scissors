function game() {
    // player and computer score
  let pCount = 0;
  let cCount = 0;

  const rockBtn = document.querySelector("#rockButton");
  const paperBtn = document.querySelector("#paperButton");
  const scissorsBtn = document.querySelector("#scissorsButton");

  rockBtn.addEventListener("click", rockRound);
  paperBtn.addEventListener("click", paperRound);
  scissorsBtn.addEventListener("click", scissorsRound);

  function rockRound() {
    if (pCount < 5 && cCount < 5) {
      playRound("rock");
    }
  }

  function paperRound() {
    if (pCount < 5 && cCount < 5) {
      playRound("paper");
    }
  }

  function scissorsRound() {
    if (pCount < 5 && cCount < 5) {
      playRound("scissors");
    }
  }

  // main play function
  function playRound(playerAnswer) {
    
    function computerPlay() {
      let number = Math.round(Math.random() * 2);

      if (number == 0) {
        return "rock";
      } 
      else if (number == 1) {
        return "paper";
      } 
      else {
        return "scissors";
      }
    }

    // 0 = tie 1 =human win 2 = computer
    function compareAnswers(playerSelection, computerSelection) {
      switch (computerSelection) {
        case "rock":
          switch (playerSelection) {
            case "rock":
              return 'tie';

            case "paper":
              return 'player';

            case "scissors":
              return 'computer';
          }
          break;

        case "paper":
          switch (playerSelection) {
            case "rock":
              return 'computer';

            case "paper":
              return 'tie';

            case "scissors":
              return 'player';
          }
          break;
        case "scissors":
          switch (playerSelection) {
            case "rock":
              return 'player';

            case "paper":
              return 'computer';

            case "scissors":
              return 'tie';
          }
          break;

        default:
          break;
      }
    }

    const computerAnswer = computerPlay();

    const results = document.querySelector("#round-results");
    results.textContent = `${playerAnswer.toUpperCase()} vs ${computerAnswer.toUpperCase()}`;

    

    let winner = compareAnswers(playerAnswer, computerAnswer);
    const roundWin = document.querySelector("#round-win");
    
    if (winner == 'player') {
      pCount++;
      if (pCount < 5) {
        roundWin.textContent = `PLAYER WINS THIS ROUND`;
      } 
      else {
        roundWin.classList.add("player-win");
        roundWin.textContent = `PLAYER WINS THE GAME!!!`;
      }
    } 
    else if (winner == 'computer') {
      cCount++;
      if (cCount < 5) {
        roundWin.textContent = `COMPUTER WINS THIS ROUND`;
      } 
      else {
        roundWin.classList.add("comp-win");
        roundWin.textContent = `COMPUTER WINS THE GAME!!!`;
      }
    } 
    else {
      roundWin.textContent = `TIE!!`;
    }

    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");

    playerScore.textContent = `Player: ${pCount}`;
    computerScore.textContent = `Computer: ${cCount}`;
  }
}

game();
