// Program for a simple calculator

const number1 = parseFloat(prompt('Enter first nuber : '));
const operator = prompt('Enter the operator ( either +, -, * or /): ');
const number2 = parseFloat(prompt('Enter second nuber : '));

let result;

if (operator == '+') {
    result = number1 + number2;
    document.write(result);
}

else if (operator == '-'){
    result == number1 - number2;
    document.write(result);
}

else if (operator == '*'){
    result == number1 * number2;
    document.write(result);
}

else {
    result = number1 / number2;
    document.write(result);
}
