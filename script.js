let humanScore = 0
let computerScore = 0


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
    return 'Computer win! ' + computerChoice + ' beats ' + humanChoice
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