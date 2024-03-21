//* recreate the .map() function without using built-in methods
//~ the map method creates a new array populated
//~ with the results of calling a provided function
//~ on every element in the calling array 

function rawMap(fn, arr) {
    const newArr = [];
    for (const item of arr) {
        if (item) {
            newArr.push(fn(item));
        }
    }
    return newArr;
}

function addTwo(n) {
    return (n + 2)
}

console.log(rawMap(addTwo, [1, 2, 3]));