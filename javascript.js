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