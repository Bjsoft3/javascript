# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 solution

```Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.getAttribute('data-color')      
    })
})
```

## Project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please give a valid height';
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please give a valid weight';
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)

        let rangeTxt;
        if (bmi > 18.6 && bmi < 24.9) {
            rangeTxt = 'Normal Range.'
        } else {
            rangeTxt = bmi < 18.6 ? 'Under weight' : 'Overwieght'
        }

        // show the result
        result.innerHTML = `<span>${bmi}</span><br></span>${rangeTxt}</span>`
    }
})
```

## Project 3 solution code

```javascript
const clock = document.getElementById('clock')


setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 solution code

```javascript
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

```