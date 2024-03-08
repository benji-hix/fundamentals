//~ Learn/Understand how various boolean operators and 
//~ logic gates function.

const test1 = true;

const test2 = false;

//* -------------------------------- not gates ------------------------------- */

function notGate(a) {
    return !a ? true : false;
}

//* -------------------------------- or gates -------------------------------- */

function orGate(a, b) {
    return (a || b) ? true : false;
}

//* -------------------------------- and gate -------------------------------- */

function andGate(a, b) {
    return (a && b) ? true : false;
}

//* -------------------------------- xor gate -------------------------------- */

function xorGate(a, b) {
    return (!a != !b) ? true : false;
}

console.log(notGate(test1));
console.log(orGate(test1, test2));
console.log(andGate(test1, test2));
console.log(xorGate(test1, test2));
