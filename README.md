Rock Paper Scissors for JavaScript Console.

Game is going to play against the computer, so function called computerPlay  will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

users input will be asked for, case insensitive. Will compare the computers and users answers and declare the round winner.

Game will last best of 5 rounds, tracking who wins per round and who wins the game.

peudo code:
/*
"computer" decides between rock, paper, or scissors

prompt asks player for their answer
will accept any variation of rock paper scissors
    will be case insensitive, and will accept scissor/scissors
    needs answer checking or answer validation

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