let currentInput = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

function clearDisplay() {
  currentInput = '';
  firstNumber = '';
  secondNumber = '';
  operator = '';
  document.getElementById('display').value = '';
}

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
  if (firstNumber === '') {
    firstNumber = currentInput;
    operator = op;
    currentInput = '';
  } else {
    calculate();
    operator = op;
  }
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    document.getElementById('display').value = currentInput;
  }
}

function calculate() {
  if (firstNumber !== '' && operator !== '' && currentInput !== '') {
    secondNumber = currentInput;
    let result;

    switch (operator) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case '/':
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }

    currentInput = result.toString();
    document.getElementById('display').value = currentInput;
    firstNumber = '';
    operator = '';
    secondNumber = '';
  }
}
