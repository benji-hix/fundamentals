//* recreate the .map() function without using built-in methods
//~ the map method creates a new array populated
//~ with the results of calling a provided function
//~ on every element in the calling array 

function rawMap(fn, arr) {
    const newArr = [];
    for (const item of arr) {
            newArr.push(fn(item));
    }
    return newArr;
}

function addTwo(n) {
    return (n + 2)
}

const testArr = [1, 2, undefined, 3];

console.log(rawMap(addTwo, testArr));

const changedArr = testArr.map((n) => n + 2)

console.log(changedArr);

console.log(testArr.map(addTwo));