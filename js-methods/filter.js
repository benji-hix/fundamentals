//* recreate the .filter() function without using built-in methods
//~ .filter() method creates a shallow copy of a portion of a given array,
//~ filtered to ONLY th elements from said array that pass a test
//~ implemented by the provided function 

function rawFilter (fn, arr) {
    const newArr = [];
    for (element of arr) {
        if (fn(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}

function divisibleBy2(n) {
    return (n % 2 === 0);
}

const testArr = [1, 2, 3, 4];

console.log(rawFilter(divisibleBy2, testArr));

const changedArr = testArr.filter(divisibleBy2);

console.log(changedArr);

console.log(testArr.filter((n) => n % 2 === 0));