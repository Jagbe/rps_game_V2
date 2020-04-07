


let computerPlay = () => {
    let computerNumberChoice = Math.floor(Math.random() *  3) + 1;
    let computerSelection = null;
    if (computerNumberChoice == 1) {
        computerSelection = 'rock';
    } else if (computerNumberChoice == 2) {
        computerSelection = 'paper';
    } else if (computerNumberChoice == 3) {
        computerSelection = 'scissors'; 
    }
    return computerSelection;
    
}

/* let playerPlay = () => {
    let playerChoice = '';

    
        playerChoice = prompt('What do you choose? Rock, Paper, or Scissors.');
        playerChoice = playerChoice.toLowerCase();
    
    while ((playerChoice != 'rock') && (playerChoice != 'paper') && (playerChoice != 'scissors')) {
        console.log('That isn\'t an option!');
        playerChoice = prompt('What do you choose? Rock, Paper, or Scissors. ', '');
        playerChoice =  playerChoice.toLowerCase();
    }
        
        return playerChoice;
    }
    */


let gameRound = (playerChoice, computerChoice) => {
    let playerWin = false;
    let computerWin = false;

    if (playerChoice === computerChoice) {
        console.log('Ah! It was a tie.');

    } else if ((playerChoice == 'rock') && (computerChoice == 'scissors')) {
        console.log('Nice one! The computer chose scissors!');
        playerWin = true;

    } else if ((playerChoice == 'paper') && (computerChoice == 'rock')) {
        console.log('Got em. The computer chose rock!');
        playerWin = true;
        
    } else if ((playerChoice == 'scissors') && (computerChoice == 'paper')) {
        console.log('Yay! The computer chose paper!');
        playerWin = true;

    } else if ((playerChoice == 'rock') && (computerChoice == 'paper')) {
        console.log('Oh no! The computer chose paper.');
        computerWin = true;

    } else if ((playerChoice == 'paper') && (computerChoice == 'scissors')) {
        console.log('Aww man. The computer chose scissors.');
        computerWin = true;

    }  else if ((playerChoice == 'scissors') && (computerChoice == 'rock')) {
        console.log('It got you! The computer chose rock.');
        computerWin = true;
    }

    if (playerWin === false && computerWin === false) {
        return null;
    } else if (playerWin === true) {;
        return true;
    } else if (computerWin === true) {
        return false;
    }
    
    
}
        



let playGame = () => {
    const gameMessage = document.querySelector('.gameMessage');
    gameMessage.textContent = '5 rounds of rock paper scissors incoming!.'

    const playerScore = document.querySelector('#playerScore');

    const computerScore = document.querySelector('#computerScore');

    let gameOn = true;
    let currentRound = 1;
    console.log(currentRound);
    let playerWins = 0; playerScore.textContent = playerWins;
    let computerWins = 0; computerScore.textContent = computerWins;

    let rockChoice = () => {
        if (gameOn) {
            let playerChoice = 'rock';
            let computerChoice = computerPlay();
            let roundResult = gameRound(playerChoice, computerChoice);

            if (roundResult === null) {
            console.log(`Round Over! Round ${currentRound} was a tie.`);
        } else if (roundResult === true) {
            console.log(`Round over! You won round ${currentRound}.`);
            playerWins++;
            playerScore.textContent = playerWins;
        } else if (roundResult === false) {
            console.log(`Round over! You lost round ${currentRound}.`);
            computerWins++;
            computerScore.textContent = computerWins;
        }
            currentRound++;

    } else { gameMessage.textContent = 'The game is over or hasn\'t started yet!'};

        if (currentRound > 5 && gameOn) {
            gameOn = false;
            console.log(`gameOn is now ${gameOn}`);
        
                if (playerWins > computerWins) { 
                        gameMessage.textContent = `Game Over! Congratulations! You won the game by coming out on top in ${playerWins} rounds!`;
                        
                    } 
                    else if (computerWins > playerWins) {
                        gameMessage.textContent = `Game Over! Oh no! You lost! The computer came out on top in ${computerWins} rounds!`;
                    } 
                    else if (playerWins === computerWins) {
                        gameMessage.textContent = 'Game Over! The computer and you tied the game. What are the chances?!';
                }
            }
}
    
    let paperChoice = () => {
        if (gameOn) {
            let playerChoice = 'paper';
            let computerChoice = computerPlay();
            let roundResult = gameRound(playerChoice, computerChoice);

                if (roundResult === null) {
                console.log(`Round Over! Round ${currentRound} was a tie.`);
            } else if (roundResult === true) {
                console.log(`Round over! You won round ${currentRound}.`);
                playerWins++;
                playerScore.textContent = playerWins;
            } else if (roundResult === false) {
                console.log(`Round over! You lost round ${currentRound}.`);
                computerWins++;
                computerScore.textContent = computerWins;
            }
            currentRound++;

    } else { gameMessage.textContent = 'The game is over or hasn\'t started yet!' };
    
        if (currentRound > 5 && gameOn) {
            gameOn = false;
            console.log(`gameOn is now ${gameOn}`);
        
                if (playerWins > computerWins) { 
                        gameMessage.textContent = `Game Over! Congratulations! You won the game by coming out on top in ${playerWins} rounds!`;
                        
                    } 
                    else if (computerWins > playerWins) {
                        gameMessage.textContent = `Game Over! Oh no! You lost! The computer came out on top in ${computerWins} rounds!`;
                    } 
                    else if (playerWins === computerWins) {
                        gameMessage.textContent = 'Game Over! The computer and you tied the game. What are the chances?!';
                }
            }
}
    
    let scissorsChoice = () => {
        if (gameOn) {
                let playerChoice = 'scissors';
                let computerChoice = computerPlay();
                let roundResult = gameRound(playerChoice, computerChoice);
    
                if (roundResult === null) {
                console.log(`Round Over! Round ${currentRound} was a tie.`);
            } else if (roundResult === true) {
                console.log(`Round over! You won round ${currentRound}.`);
                playerWins++;
                playerScore.textContent = playerWins;
            } else if (roundResult === false) {
                console.log(`Round over! You lost round ${currentRound}.`);
                computerWins++;
                computerScore.textContent = computerWins;
            }
                currentRound++;
    
        } else { gameMessage.textContent = 'The game is over or hasn\'t started yet!' }
        
            if (currentRound > 5 && gameOn) {
                gameOn = false;
                console.log(`gameOn is now ${gameOn}`);
                    if (playerWins > computerWins) { 
                            gameMessage.textContent = `Game Over! Congratulations! You won the game by coming out on top in ${playerWins} rounds!`;
                            
                        } 
                        else if (computerWins > playerWins) {
                            gameMessage.textContent = `Game Over! Oh no! You lost! The computer came out on top in ${computerWins} rounds!`;
                        } 
                        else if (playerWins === computerWins) {
                            gameMessage.textContent = 'Game Over! The computer and you tied the game. What are the chances?!';
                    }
                }
    }

    
    
   

    const rockButton = document.querySelector('#rockButton');
    rockButton.addEventListener('click', rockChoice);

    const paperButton = document.querySelector('#paperButton');
    paperButton.addEventListener('click', paperChoice);

    const scissorsButton = document.querySelector('#scissorsButton');
    scissorsButton.addEventListener('click', scissorsChoice);



    
}

const startButton = document.querySelector('.startGame');
    startButton.addEventListener('click', playGame);









