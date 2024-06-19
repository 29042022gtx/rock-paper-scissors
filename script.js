// playGame()


function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++)
        console.log(playRound(getComputerChoice(), getHumanChoice()))
    let res = ''
    if (humanScore > computerScore)
        res = 'You are the winner! ' + humanScore + ' - ' + computerScore
    else if (computerScore > humanScore)
        res = 'The computer is the winner! ' + computerScore + ' - ' + humanScore
    else
        res = 'You tie ' + humanScore + ' - ' + computerScore + ' the computer!'
    console.log(res)


    function playRound(computerChoice, humanChoice) {
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1)
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1)
        if (computerChoice == humanChoice)
            return 'Tie! ' + humanChoice + ' equals to ' + computerChoice
        else if ((computerChoice == 'Rock'
                && humanChoice == 'Paper')
            || (computerChoice == 'Paper'
                && humanChoice == 'Scissors')
            ||(computerChoice == 'Scissors'
                && humanChoice == 'Rock')) {
            humanScore++
            return 'You win! ' + humanChoice + ' beats ' + computerChoice
        }
        computerScore++    
        return 'The computer win! ' + computerChoice + ' beats ' + humanChoice
    }
}

function getHumanChoice() {
    let choice = prompt('1: rock 2: paper 3: scissors')
    choice = parseInt(choice)
    if (choice == 3)
        return 'scissors'
    else if (choice == 2)
        return 'paper'
    else
        return 'rock'
}

function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3)
    if (ranNum == 0)
        return 'rock'
    else if (ranNum == 1)
        return 'paper'
    else
        return 'scissors'
}
