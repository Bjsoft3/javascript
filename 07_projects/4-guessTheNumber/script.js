let randomNum = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector("#subt")
const guessedNumInput = document.querySelector("#guessField")

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrhi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(guessedNumInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess < 1) {
        alert("Please enter a number greater than 1")
    } else if (guess > 10) {
        alert("Please enter a number less than 10")
    } else {
        prevGuess.push(guess)
        
        console.log(numGuess);
        
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right`)
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNum) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    guessedNumInput.value = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    guessedNumInput.value = ''
    guessedNumInput.setAttribute('disabled', true)
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e) {
        randomNum = parseInt(Math.random() * 10 + 1);
        prevGuess = [];
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        guessedNumInput.removeAttribute('disabled') 
        this.remove()
        lowOrhi.innerHTML = ""
        playGame = true;
    })
}
