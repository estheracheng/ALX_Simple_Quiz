// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Get elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultSpan = document.getElementById('calculation-result');

// Add Event Listeners
document.getElementById('add').addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultSpan.textContent = add(num1, num2);
});

document.getElementById('subtract').addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultSpan.textContent = subtract(num1, num2);
});

document.getElementById('multiply').addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultSpan.textContent = multiply(num1, num2);
});

document.getElementById('divide').addEventListener('click', () => {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultSpan.textContent = divide(num1, num2);
});
