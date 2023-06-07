const numberButtons = document.querySelectorAll('button.number');
const operationButtons = document.querySelectorAll('button.operation');
const equalsButton = document.querySelector('button.equals');
const clearButton = document.querySelector('button.clear');
const firstNumber = document.querySelector('#first-number');
const operation = document.querySelector('operation');
const secondNumber = document.querySelector('#second-number');
const outputDisplay = document.querySelector('output');

let currentInput = firstNumber;

numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        currentInput.value += button.innerText;
    })
})

operationButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        operation.innerText = button.innerText;
        currentInput = secondNumber;
    })
})

equalsButton.addEventListener('click', function() {
    if (operation.innerText === '?') {
        outputDisplay.innerText = 'Please select operation';
    }
    if (operation.innerText === '+') {
        outputDisplay.innerText = Number(firstNumber.value) + Number(secondNumber.value);
    }
    if (operation.innerText === '-') {
        outputDisplay.innerText = Number(firstNumber.value) - Number(secondNumber.value);
    }
    if (operation.innerText === '*') {
        outputDisplay.innerText = Number(firstNumber.value) * Number(secondNumber.value);
    }
    if (operation.innerText === '/') {
        outputDisplay.innerText = Number(firstNumber.value) / Number(secondNumber.value);
    }
    if (outputDisplay.innerText === 'NaN') {
        outputDisplay.innerText = 'Please enter valid numbers';
    }
})

clearButton.addEventListener('click', function() {
    currentInput = firstNumber;
    firstNumber.value = '';
    secondNumber.value = '';
    operation.innerText = '?';
    outputDisplay.innerText = '0';
})

firstNumber.addEventListener('click', function() {
    currentInput = firstNumber;
})

secondNumber.addEventListener('click', function() {
    currentInput = secondNumber;
})
