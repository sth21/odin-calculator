// Global Variables
let topDisplayValue;
let bottomDisplayValue;
let bottomDisplay = document.querySelector('#bottom-display');
let topDisplay = document.querySelector('#top-display');
let errorDisplay = document.querySelector('.error');
let firstClick = 0;


// Event Listeners
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', click);
});


// Function Declarations
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return 'ERROR';
    } else {
        return a / b;
    }
}

function multiply(a, b) {
    return a * b;
}

function operate(a, b, operation) {
    if (operation === '+') {
        return add(a, b);
    } else if (operation === '-') {
        return subtract(a, b);
    } else if (operation === '/') {
        return divide(a, b);
    } else if (operation === '*') {
        return multiply(a, b);
    }
}

function clear() {

}

function click(event) {
    if (bottomDisplay.textContent.length == 22) {
        errorDisplay.textContent = 'ERROR - DISPLAY LIMIT MET';
        return;
    }
    if (firstClick === 0) {
        bottomDisplay.textContent = event.target.textContent;
        bottomDisplayValue = bottomDisplay.textContent;
        ++firstClick;
    } else {
        bottomDisplay.textContent = bottomDisplay.textContent + event.target.textContent;
        bottomDisplayValue = bottomDisplay.textContent;
    }
}