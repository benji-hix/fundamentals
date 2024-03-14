function addDigits(number) {
    let digitString = number.toString();
    let sum = 0;
    for (const digit in digitString) {
        sum += parseInt(digitString[digit]);
    }
    return sum
}

console.log(addDigits(567));