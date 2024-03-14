//~ Implement a funciton that, given a number, sums the numbers digits
//~ repeatedly until the sum is only one digit. Return sum.

function addDigits(number) {
    let digitString = number.toString();
    let sum = 0;
    for (const digit in digitString) {
        sum += parseInt(digitString[digit]);
    }
    return sum
}

function sumToOne(number) {
    if (number < 10) {
        return number;
    }

    let sum = number

    do {
        sum = addDigits(sum);
    } while (sum >= 10);

    return sum

}

console.log(sumToOne(123457));