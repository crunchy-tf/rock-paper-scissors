//change the game so the code is only executed and the DOM changed on click from the player (on a separate branch)

const playGame = () => {
    let playerScore = 0
    let compScore = 0

    rockBtn = document.querySelector('.rock')
    paperBtn = document.querySelector('.paper')
    scissorsBtn = document.querySelector('.scissors')
    playerChoices = [rockBtn, paperBtn, scissorsBtn]
    compChoices = ["rock", "paper", "scissors"]

    const compChoice = () => {
        return compChoices[(Math.floor(Math.random() * 3))]
    }

    const playerChoice = () => {
        playerChoices.forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault()
                return playerChoices[(element.classList[0])]
            })
        });
    }


    const addScore = () => {
        const decideTurnWinner = (playerChoice, compChoice) => {
            if (playerChoice == compChoice) {
                return { playerScoreAdd: 0, computerScoreAdd: 0 }
            } else if (playerChoice == "rock" && compChoice == "paper") {
                return { playerScoreAdd: 0, computerScoreAdd: 1 }
            } else if (playerChoice == "paper" && compChoice == "rock") {
                return { playerScoreAdd: 1, computerScoreAdd: 0 }
            } else if (playerChoice == "rock" && compChoice == "scissors") {
                return { playerScoreAdd: 1, computerScoreAdd: 0 }
            } else if (playerChoice == "scissors" && compChoice == "rock") {
                return { playerScoreAdd: 0, computerScoreAdd: 1 }
            } else if (playerChoice == "paper" && compChoice == "scissors") {
                return { playerScoreAdd: 0, computerScoreAdd: 1 }
            } else if (playerChoice == "scissors" && compChoice == "paper") {
                return { playerScoreAdd: 1, computerScoreAdd: 0 }
            }
        }

        playerScore += (decideTurnWinner().playerScoreAdd)
        compScore += (decideTurnWinner().computerScoreAdd)

        
    }

    const decideGameWinner = () => {
        if (playerScore == 3) {
            return { winner: "player" }
        } else if (compScore == 3) {
            return { winner: "computer" }
        }
    }



}

playGame()