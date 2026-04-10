/* =====================================================
HOF (Higher Order Function)
-------------------------------------------------------
Definition:
A Higher Order Function is a function that:
1) Takes another function as an argument
OR
2) Returns a function as a result

Reason:
In JavaScript, functions are treated as values.
===================================================== */

// Example of Higher Order Function
function greet(callback) {     // callback = function as argument
    console.log("Hello!");
    callback();                  // calling the passed function
}

function sayBye() {
    console.log("Goodbye!");
}

greet(sayBye);// output: Hello! Goodbye!



/* =====================================================
MAP()
-------------------------------------------------------
Definition:
map() is a Higher Order Function that:
- Iterates over an array
- Applies a callback function to each element
- Returns a NEW array with modified values
- Does NOT change the original array
===================================================== */

const numbers1 = [1, 2, 3, 4];

// map() transforms each element
const squares = numbers1.map((num) => {
    return num * num;   // return is compulsory in map
});

console.log(squares); // [1, 4, 9, 16]



/* =====================================================
FILTER()
-------------------------------------------------------
Definition:
filter() is a Higher Order Function that:
- Iterates over an array
- Returns a NEW array
- Includes only those elements which satisfy a condition
===================================================== */

const numbers2 = [1, 2, 3, 4, 5];

// filter() selects elements based on condition
const evenNumbers = numbers2.filter((num) => {
    return num % 2 === 0;   // true → element included
});

console.log(evenNumbers); // [2, 4]



/* =====================================================
REDUCE()
-------------------------------------------------------
Definition:
reduce() is a Higher Order Function that:
- Reduces an array to a SINGLE value
- Uses an accumulator to store result
- Can return number, object, array, or string
===================================================== */

const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce((acc, curr) => {
    return acc + curr;   // acc = accumulated result
}, 0);                 // initial value of acc

console.log(sum);      // 15



/* =====================================================
FOREACH()
-------------------------------------------------------
Definition:
forEach() is a Higher Order Function that:
- Iterates over an array
- Executes a function for each element
- Does NOT return anything (undefined)
- Used for side effects (print, update, etc.)
===================================================== */

const numbers4 = [1, 2, 3];

// forEach() only performs action
numbers4.forEach((num) => {
    console.log(num * 2);   // prints doubled value
});

// return value of forEach → undefined



/* =====================================================
FIND()
-------------------------------------------------------
Definition:
find() is a Higher Order Function that:
- Returns the FIRST element that matches a condition
- Stops searching after first match
- Returns undefined if no match is found
===================================================== */

const numbers5 = [1, 2, 3, 4, 5];

const firstEven = numbers5.find((num) => {
    return num % 2 === 0;
});

console.log(firstEven); // 2



/* =====================================================
SOME()
-------------------------------------------------------
Definition:
some() is a Higher Order Function that:
- Checks if AT LEAST ONE element satisfies a condition
- Returns true or false
===================================================== */

const numbers6 = [1, 2, 3, 4, 5];

const hasNegative = numbers6.some((num) => {
    return num < 0;
});

console.log(hasNegative); // false



/* =====================================================
EVERY()
-------------------------------------------------------
Definition:
every() is a Higher Order Function that:
- Checks if ALL elements satisfy a condition
- Returns true only if all conditions are true
===================================================== */

const numbers7 = [2, 4, 6, 8];

const allEven = numbers7.every((num) => {
    return num % 2 === 0;
});

console.log(allEven); // true


// =====================================================\
// End of js/Core/10_HOF.js
/*
| Method  | Returns          | Purpose         |
| ------- | ---------------- | --------------- |
| map     | New Array        | Transform data  |
| filter  | New Array        | Select elements |
| reduce  | Single Value     | Combine all     |
| forEach | undefined        | Side effects    |
| find    | One Element      | First match     |
| some    | Boolean          | Any match?      |
| every   | Boolean          | All match?      |
| HOF     | Function / Value | Reusable logic  |
*/