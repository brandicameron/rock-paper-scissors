//computer random choice
        function computerPlay() {
            let choices = ["rock", "paper", "scissors"];
            let randomChoice = choices[Math.floor(Math.random() * choices.length)];
            return randomChoice;
        }

        
        //grab player selection and play round
        let playerChoiceBtn = document.querySelectorAll('.player-choice');
        
        playerChoiceBtn.forEach(function(btn) {
            btn.addEventListener('click', () => {
                playerSelection = btn.id;
                playRound();
            });
        })
        

        function playRound() {
            const computerSelection = computerPlay();
            const displayWinnerBanner = document.getElementById('winner');
            let resultImgComputer = document.querySelector('#computer');
            let resultImgPlayer = document.querySelector('#player');
            
            //display selections
            switch(computerSelection) {
                case "rock":
                    resultImgComputer.className = "result-img rock-position";
                    break;
                case "paper":
                    resultImgComputer.className = "result-img paper-position";
                    break;
                case "scissors":
                    resultImgComputer.className = "result-img scissors-position";
                    break;
            }

            switch(playerSelection) {
                case "rock":
                    resultImgPlayer.className = "result-img rock-position";
                    break;
                case "paper":
                    resultImgPlayer.className = "result-img paper-position";
                    break;
                case "scissors":
                    resultImgPlayer.className = "result-img scissors-position";
                    break;
            }
    
            
            //winner display
            if (computerSelection === playerSelection) {
                displayWinnerBanner.className = "winner winner-tie";
                displayWinnerBanner.textContent = "TIE!";
            } else if (
                computerSelection === 'paper' && playerSelection === 'rock' ||
                computerSelection === 'rock' && playerSelection === 'scissors' ||
                computerSelection === 'scissors' && playerSelection === 'paper') {
                displayWinnerBanner.className = "winner";
                displayWinnerBanner.textContent = "WINNER!";
  
            } else if (
                computerSelection === 'paper' && playerSelection === 'scissors' ||
                computerSelection === 'rock' && playerSelection === 'paper' ||
                computerSelection === 'scissors' && playerSelection === 'rock') {
                displayWinnerBanner.className = "winner winner-player";
                displayWinnerBanner.textContent = "WINNER!";
            };
        };
        