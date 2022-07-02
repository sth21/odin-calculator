// Global Variables
let operationOne;
let operationTwo;
let bottomDisplay = document.querySelector('#bottom-display');
let topDisplay = document.querySelector('#top-display');
let errorDisplay = document.querySelector('.error');
let valueOne = bottomDisplay.textContent;
let valueTwo;
let firstClick = true;
let firstOperation = true;

// Event Listeners
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', click);
});

// Function Declarations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
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

function exponentiation(a, b) {
    return a ** b;
}

function operate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation === '+') {
        return add(a, b);
    } else if (operation === '-') {
        return subtract(a, b);
    } else if (operation === '/') {
        return divide(a, b);
    } else if (operation === '*') {
        return multiply(a, b);
    } else if (operation === '^') {
        return exponentiation(a, b);
    }
}

function allClear() {
    operationOne = undefined;
    operationTwo = undefined;
    bottomDisplay.textContent = 0;
    topDisplay.textContent = "";
    errorDisplay.textContent = "";
    valueOne = undefined;
    valueTwo = undefined;
    firstClick = true;
    firstOperation = true;
}

function clear() {
    let length = bottomDisplay.textContent.length - 1;
    if (bottomDisplay.textContent.length === 22) {
        errorDisplay.textContent = '';
        bottomDisplay.textContent = bottomDisplay.textContent.slice(0, length);
    } else if (bottomDisplay.textContent.length === 1) {
        bottomDisplay.textContent = '';
    } else if (bottomDisplay.textContent.length === 0) {
        return;
    } else {
        bottomDisplay.textContent = bottomDisplay.textContent.slice(0, length);
    }
}


function click(event) {
    if (event.target.classList.contains('clear-all')) {
        allClear();
    } else if (bottomDisplay.textContent.includes('.') && event.target.classList.contains('decimal') && firstClick === false) {
        return;
    } else if (firstClick === false && event.target.classList.contains('negative')) {
        return;
    } else if (event.target.classList.contains('operation')) {
        if (firstOperation === true) {
            valueOne = bottomDisplay.textContent;
            operationOne = event.target.textContent;
            topDisplay.textContent = `${valueOne} ${operationOne}`;
            firstClick = true;
            firstOperation = false;
        } else {
            operationTwo = event.target.textContent;
            valueTwo = bottomDisplay.textContent;
            firstClick = true;
            if (operationTwo === '=') {
                topDisplay.textContent = `${topDisplay.textContent} ${valueTwo} =`;
                bottomDisplay.textContent = operate(valueOne, valueTwo, operationOne);
                firstOperation = true;
            } else {
                topDisplay.textContent = `${operate(valueOne, valueTwo, operationOne)} ${operationTwo}`;
                bottomDisplay.textContent = operate(valueOne, valueTwo, operationOne);
                valueOne = bottomDisplay.textContent;
                operationOne = event.target.textContent;
                firstOperation = false;
            }
        }
    } else if (event.target.classList.contains('clear')) {
        clear();
    } else if (bottomDisplay.textContent.length === 22) {
        if (firstClick === true) {
            bottomDisplay.textContent = event.target.textContent;
        } else {
            errorDisplay.textContent = 'ERROR - DISPLAY LIMIT MET';
        }
    } else if (event.target.classList.contains('negative')) {
        bottomDisplay.textContent = event.target.textContent.slice(2, 3);
        firstClick = false;
    } else if (firstClick === true) {
        bottomDisplay.textContent = event.target.textContent;
        firstClick = false;
    } else {
        bottomDisplay.textContent = bottomDisplay.textContent + event.target.textContent;
    }
    if (bottomDisplay.textContent.length !== 22) {
        errorDisplay.textContent = "";
    }
}