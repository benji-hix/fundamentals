//! Do not use built-in array methods 

//* ------------------------------ reverse array ----------------------------- */
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

//* ---------------------------- remove negatives ---------------------------- */
//` Return a given array with all negative
//` values removed 

function removeNegatives(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[j] = arr[i]
            j++
        }
    }
    while (j < arr.length) {
        arr.pop();
    }
    return arr;
}

console.log(removeNegatives([1, -2, 3, -4, 5, 6, -7, -8]));

//* ----------------------------- skyline heights ---------------------------- */
//` given an array of values that represent building heights,
//` return an array of visible buildings

function visibleBuildings(arr) {
    let max = arr[0];
    const visibleValues = [arr[0]];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            visibleValues.push(arr[i])
        }
    }
    return visibleValues
}

console.log(visibleBuildings([1, -1, 5, 2, 7, 3]));