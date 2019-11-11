console.log('ready|set|javascript');

// Game Values
let      min = 1;
let      max = 10;
let   winNum = randomWinningNumber(min,max);
let    turns = 5;

console.log(winNum); 


// UI Elements
const       gameUI = document.querySelector('#game');
const       minNum = document.querySelector('.min-num');
const       maxNum = document.querySelector('.max-num');
const     guessBtn = document.querySelector('#guess-btn');
const   guessInput = document.querySelector('#guess-input');
const      message = document.querySelector('.message');



// Assign UI MIN and MAX
minNum.textContent = min;
maxNum.textContent = max;

// EventListener: handle button click
guessBtn.addEventListener('click', playGame);


// Show Players Initial Turn
showMessage(`You have ${turns} turns.`, 'green');


// Play Game on Button Click
function playGame() {
    gameLogic();
}

/*********************************
    FUNCTIONS
*********************************/

function gameLogic() {
    let guess = parseInt(guessInput.value);

    if ( checkIfHaveInput(guess, min, max) ) {
        checkTurnsLeft(guess);
    } else {
        showMessage(`Please Eneter a number between ${min} and ${max}`, 'red');
        resetInput(); 
    }
}

function checkTurnsLeft(guess) {
    if ( turns > 1 ) {
        turns--;
        showMessage(`${guess} is not the right number. You have ${turns} turns left.`, 'red');
        resetInput(); 

        if ( winNum === guess) {
            disableInput();
            playAgain();
            showMessage(`You Won`, 'blue');


        }

    }  else {
        showMessage(`Game Over`, 'red');
        disableInput();
        playAgain();
        resetInput(); 
    }
}

function checkIfHaveInput(input, min, max) {
    console.log(input < min, input, min);

    return !(isNaN(input) || input < min || input > max);
}

function resetInput() {
    guessInput.value = '';
}

function showMessage(text, color) {
    message.innerHTML = `<h5>${text}</h5>`;
    message.style.color = color;
}

function disableInput() {
    guessInput.disabled = true;
}

function playAgain() {
    guessBtn.value = 'Play Again';
    guessBtn.classList.add('reset-game');

    document.querySelector('.reset-game').addEventListener('mousedown', () => {
        window.location.reload();
    });
}

function randomWinningNumber(min,max) {
    return Math.floor( Math.random()*(max-min+1)+min );
}