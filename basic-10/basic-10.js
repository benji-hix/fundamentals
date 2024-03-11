//* ----------------------- Algo 1: Print Odd Sums 100 ----------------------- */
//* Print all odd integers from 1 to 100, and with 
//* each integer print the sum of all odd integers so far

function oddIntegerSums() {
    let sum = 0;
    for (let i = 1; i <= 100; i += 2) {
        sum += i;
        console.log(i);
        console.log("Current sum: " + sum);
    }
}

oddIntegerSums()

//* ------------------------- Algo 2: Array From Odds ------------------------ */
//* Return an array with all odd integers between 1 and 100

function arrayFromOdds() {
    let newArray = [];
    let i = 1;

    do {
        newArray.push(i);
        i += 2;
    } while (i <= 100);

    return newArray
}

console.log(arrayFromOdds());

//* ------------------------ Algo 3: Iterate and Print ----------------------- */
//* Given an array, iterate through it and print each item

function printItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printItems(['a', 'b', 'c'])

//* ---------------------------- Algo 4: Find Max ---------------------------- */
//* Given an array, find and return its largets element

function findMax(arr) {
    let max = arr[0];
    for (const index in arr) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}

console.log(findMax([1, 8, 3, 5, 7, 0, 2]))

//* ------------------------- Algo 5: Greater Than Y ------------------------- */
//* Given an array and a value Y, count and return the number of items greater than Y

function greaterThan(arr, Y) {
    let count = 0;

    for (const index in arr) {
        if (arr[index] > Y) count++;
    }

    return count;
}

console.log(greaterThan([1, 2, 3, 4, 5], 2));

//* --------------------------- Algo 6: Get Average -------------------------- */
//* Given an array of integers, return the average value

function getAverage(arr) {
    let sum = 0;

    for (const index in arr) {
        sum += arr[index];
    }

    return (sum / arr.length);
}

console.log(getAverage([2, 4, 6, 8]));

//* ------------------------ Algo 7: Min, Max, Average ----------------------- */
//* Given an array, print the Min, Max, and Average for that array's values

function minMaxAverage(arr) {
    let min = arr[0]
    let max = arr[0]
    let sum = 0;

    for (const index in arr) {
        if (arr[index] < min) min = arr[index];
        if (arr[index] > max) max = arr[index];
        sum += arr[index];
    }

    console.log("Min: " + min);
    console.log("Max: " + max);
    console.log("Average: " + (sum/arr.length));
}

minMaxAverage([6, 4, 8, 2])

//* ----------------------- Algo 8: Zero Out Negatives ----------------------- */
//* Given an array of integers, set negative values to 0 then return array (in place)

function zeroOut(arr) {
    for (const index in arr) {
        if (arr[index] < 0) arr[index] = 0;
    }
    return arr;
}

console.log(zeroOut([1, -2, 3, -4, 5]));

//* -------------------------- Algo 9: Square Values ------------------------- */
//* Given an array, square each value and return array (in place)

function squareValues(arr) {
    for (const index in arr) {
        arr[index] = arr[index] ** 2;
    }
    return arr;
}

console.log(squareValues([1, 2, 3, 4]));

//* -------------------------- Algo 10: Shift Values ------------------------- */
//* Given an array, move all values forward by one index.
//* Drop the first value and leave a 0 value at end of array

function shiftArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length-1] = 0;
    return arr;
}

console.log(shiftArray([1, 2, 3, 4, 5]));