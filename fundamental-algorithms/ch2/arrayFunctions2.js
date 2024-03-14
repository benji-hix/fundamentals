//! Do not use built-in array methods 

//~ Reverse array

function reverseArr(arr) {
    const lastIndex = arr.length - 1

    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = temp;
    }

    return arr;

}

console.log(reverseArr([1, 2, 3, 4, 5]));

//~ Remove negatives: return a given array with all negative
//~ values removed 

function removeNegatives(arr) {
    while (arr.length && arr[arr.length - 1] < 0) {
        arr.pop();
    }

    for (let i = arr.length - 1; i >= 0; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[arr.length - 1];
            arr.pop();
        }
    }

    return arr;
}

console.log(removeNegatives(1, -2, 3, -4, 5, 6, -7, -8));