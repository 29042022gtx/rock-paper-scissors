// playGame()
let humanScore = 0
let computerScore = 0
const results = document.querySelector('.results')
const buttons = document.querySelector('.buttons')
buttons.onclick = clickBtn

function clickBtn(event) {
  let computerChoice = getComputerChoice()
  let humanChoice = event.target.id
  let tr = document.createElement('tr')
  let td1 = document.createElement('td')
  td1.textContent = humanChoice
  let td2 = document.createElement('td')
  td2.textContent = playRound(computerChoice, humanChoice)
  let td3 = document.createElement('td')
  td3.textContent = computerChoice
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  results.appendChild(tr)
  if (humanScore >= 5 || computerScore >= 5) {
    tr = document.createElement('tr')
    let td = document.createElement('td')
    td.textContent = 'Final results'
    td.colSpan = '3'
    td.style.textAlign = 'left'
    tr.appendChild(td)
    results.appendChild(tr)
    tr = document.createElement('tr')
    td = document.createElement('td')
    td.textContent = 'Human'
    tr.appendChild(td)
    results.appendChild(tr)
    td = document.createElement('td')
    td.textContent = '|'
    tr.appendChild(td)
    results.appendChild(tr)
    td = document.createElement('td')
    td.textContent = 'Computer'
    tr.appendChild(td)
    results.appendChild(tr)
    tr = document.createElement('tr')
    td = document.createElement('td')
    td.textContent = humanScore
    tr.appendChild(td)
    results.appendChild(tr)
    td = document.createElement('td')
    let winner = 'Human'
    if (humanScore > computerScore)
      td.textContent = '>'
    else {
      td.textContent = '<'
      winner = 'Computer'
    }
    tr.appendChild(td)
    results.appendChild(tr)
    td = document.createElement('td')
    td.textContent = computerScore
    tr.appendChild(td)
    results.appendChild(tr)
    tr = document.createElement('tr')
    td = document.createElement('td')
    td.textContent = winner + ' is the winner!'
    td.colSpan = '3'
    td.style.textAlign = 'left'
    tr.appendChild(td)
    results.appendChild(tr)
    buttons.onclick = null
    buttons.removeEventListener('click', clickBtn)
  }
}

function playRound(computerChoice, humanChoice) {
  computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1)
  humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1)
  if (computerChoice == humanChoice)
      // return 'Tie! ' + humanChoice + ' equals to ' + computerChoice
    return '='
  else if ((computerChoice == 'Rock' && humanChoice == 'Paper')
      || (computerChoice == 'Paper' && humanChoice == 'Scissors')
      ||(computerChoice == 'Scissors' && humanChoice == 'Rock')) {
    humanScore++
    // return 'You win! ' + humanChoice + ' beats ' + computerChoice
    return '>'
  }
  computerScore++    
  // return 'The computer win! ' + computerChoice + ' beats ' + humanChoice
  return '<'
}

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
