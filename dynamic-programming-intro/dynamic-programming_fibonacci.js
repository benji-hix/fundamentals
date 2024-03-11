//* utilize dynamic programming to solve the fibonacci sequence algo

//~ ----------------------------- naive approach ----------------------------- */

function fibonnaci(n) {
    return (n <= 2) ? 1 : fibonnaci(n-1) + fibonnaci(n - 2);
}

console.log(fibonnaci(5));

//! issue: current recursive solution is extremely slow and will not 
//! work for even double digit numbers

//` solution: memoization

const memo = {}

function fibonacciV2(n) {
    if (n in memo) {
        return memo[n]
    }

    let result;
    if (n <= 2) {
        result = 1;
    }
    else {
        result = fibonacciV2(n-1) + fibonacciV2(n - 2)
    }

    memo[n] = result;
    return result;
}

console.log(fibonacciV2(50));

//` this solution utilizes memoization for a linear time complexity