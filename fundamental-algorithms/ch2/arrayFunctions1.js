//! Do not use any built-in functions for these algorithms

//~ pushFront: Insert value at beginning of array 

function pushFront(arr, value) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = value;
    return arr;
}

// console.log(pushFront([3, 2, 1], 4));

//~ popFront: remove and return value at beginning of array

function popFront(arr) {
    const value = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return value;
}

const testArr1 = [4, 3, 2, 1]
console.log(popFront(testArr1));
console.log(testArr1);

//~ insertAt: Given array, index, value, insert value 
//~ into array at given index 

function insertAt(arr, index, value) {
    arr.length = arr.length + 1;
    for (let i = index + 1; i < arr.length; i++) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
    return arr;
}

const testArr2 = [1, 2, 3, 5]
console.log(insertAt(testArr2, 3, 4));

//~ removeAt: Given array and index,
//~ remove and return array value at given index

function removeAt(arr, index) {
    const value = arr[index];
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop()
    return value
}

const testArr3 = [1, 2, 3, 4, 5]
console.log(removeAt(testArr3, 0));
console.log(testArr3);