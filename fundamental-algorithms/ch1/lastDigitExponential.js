//~ Implement a function that accepts two positive integers as arguments
//~ Return the last digit of the first number 
//~ raised to an exponent of the second number

function lastDigitAtoB(a, b) {
    let lastDigitA = a.toString()[a.toString().length - 1];
    return lastDigitA ** b;
}

console.log(lastDigitAtoB(12345, 3));