


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