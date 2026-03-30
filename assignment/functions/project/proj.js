console.log('The Rock, Paper Scissors Game')
let getInput = document.getElementById('input')
const getPlayButton = document.getElementById('playbutton')
const getContainer = document.querySelector('.container')
const displayChoices = document.getElementById('displaychoices')
const displayResults = document.getElementById('displayresult')

console.log(getContainer)


getPlayButton.addEventListener('click', (e) => {
    e.preventDefault()
    const userInput = getInput.value.toLowerCase()
    getInput.value = ''
    console.log(userInput)

    displayResults.style.display = 'block'
    displayChoices.style.display = 'block'
    

    let computerChoice
    
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    switch(randomNumber){
        case 1:
            computerChoice = 'rock'
        break;
    
        case 2:
            computerChoice = 'paper'
        break;
    
        case 3:
            computerChoice = 'scissors'
    }

    displayChoices.innerText = `Your choice is ${userInput} and the computer choice is ${computerChoice}`
    if((userInput === 'rock' && computerChoice === 'scissors') ||
       (userInput === 'paper' && computerChoice === 'rock') ||
       (userInput === 'scissors' && computerChoice === 'paper')
    ){
        displayResults.innerText = `You the user WIN, yaya!!`
        
    }
    
     else if((userInput === 'rock' && computerChoice === 'paper') ||
            (userInput === 'paper' && computerChoice === 'scissors') ||
            (userInput === 'scissors' && computerChoice === 'rock')
    ){
        displayResults.innerText = 'Oh HO!! the computer win!!'
    }
    else if(userInput === computerChoice){
        displayResults.innerText = 'It is a Tie'
    }
    
    else{

        displayResults.style.color = 'red'

        displayResults.innerText = `We did not understand your input, you entered ${userInput}. Please try again`
    }
    
    // const playAgainPrompt = prompt('Do you want to play again? (yes/no)')
    
    // const playAgainAnswer = playAgainPrompt ? playAgainPrompt.toLowerCase() : 'no'
    
    // if(playAgainAnswer === 'yes'){
    //     rockPaperScissorsGame()
    // }else{
    //     console.log('Thank you for playing! See you again some other time.')
    // }
    
})
