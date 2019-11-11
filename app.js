console.log('ready|set|javascript');

// Game Values
let      min = 1;
let      max = 5;
let   winNum = 5; // Create Rand Number
let    turns = 3;


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
showMessage(`You have ${turns} turns left.`, 'green');


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
        showMessage(`You have ${turns} turns left.`, 'green');
        resetInput(); 

        if ( winNum === guess) {
            disableBtnAndInput();
            showMessage(`You Won`, 'blue');


        }

    }  else {
        showMessage(`Game Over`, 'red');
        disableBtnAndInput();
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
    message.innerHTML = `<h2>${text}</h2>`;
    message.style.color = color;
}

function disableBtnAndInput() {
    guessBtn.disabled = true;
    guessInput.disabled = true;
}