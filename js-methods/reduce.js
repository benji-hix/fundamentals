//* recreate the .reduce() function without using built-in methods
//~ the reduce() method executes a callback function on each element 
//~ of the array in order, passing in the return value from the 
//~ calculation on the preceding element.
//~ The final result of running the reducer across all elements of the
//~ array is a single value.

//~ for the first invocation of the callback function, an initial value
//~ may be used, or the array element at index 0 will be used
//~ with iteration starting from element at index 1

function rawReduce(fn, arr, value) {
    let reducedValue;
    if (!value) {
        reducedValue = arr[0];
        for (let i = 1; i < arr.length; i++) {
            reducedValue = fn(arr[i], reducedValue)
        }
    }
    else {
        reducedValue = value;
        for (let i = 0; i < arr.length; i++) {
            reducedValue = fn(arr[i], reducedValue)
        }
    }
    return reducedValue;
}

function add(x, y) {
    return x + y
}

const testArr = [1, 2, 3, 4]

console.log(rawReduce(add, testArr, 5));

const changedArr = testArr.reduce(((nextElement, reducedValue) => nextElement * reducedValue));

console.log(changedArr);