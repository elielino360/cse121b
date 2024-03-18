function add(number1, number2) {
    return Number(number1) + Number(number2);
}

function addNumbers() {
    let addNumber1 = document.querySelector('#add1').value;
    let addNumber2 = document.querySelector('#add2').value;

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = document.querySelector('#subtract1').value;
    let subtractNumber2 = document.querySelector('#subtract2').value;

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = document.querySelector('#factor1').value;
    let multiplyNumber2 = document.querySelector('#factor2').value;

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let divideNumber1 = document.querySelector('#dividend').value;
    let divideNumber2 = document.querySelector('#divisor').value;

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

document.getElementById('getTotal').addEventListener('click', function() {
    
    let subtotal = parseFloat(document.getElementById('subtotal').value);


    let isMember = document.getElementById('member').checked;

   
    if (isMember) {
        subtotal *= 0.8;
    }
    let totalSpan = document.getElementById('total');
    totalSpan.textContent = `$${subtotal.toFixed(2)}`;
});




/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let NumberArray=[1, 2, 3,4,5,6,7,8,9,10,11,12,13];

/* Output Odds Only Array */

document.getElementById('array').innerText = "Array: " + NumberArray.join(', ');

let oddNumbers = NumberArray.filter(num => num % 2 !== 0);

document.getElementById('odds').innerText = "Odd Numbers: " + oddNumbers.join(', ');
/* Output Evens Only Array */

let evenNumbers = NumberArray.filter(num => num % 2 === 0);
document.getElementById('evens').innerText = "Even Numbers: " + evenNumbers.join(', ');

/* Output Sum of Org. Array */

let sum = NumberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').innerText = "Sum of Array: " + sum;

/* Output Multiplied by 2 Array */
let multipliedArray = NumberArray.map(num => num * 2);
document.getElementById('multiplied').innerText = "Multiplied by 2: " + multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfMultiplied').innerText = "Sum of Multiplied: " + sumOfMultiplied;

