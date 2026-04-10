let arr = [1, 2, 4, 5, 6]; // missing 3
let n = arr.length + 1;     // total numbers including missing one

let sum = (n * (n + 1)) / 2;               // sum of 1..n
let actualSum = arr.reduce((a, b) => a + b, 0);

let missingNumber = sum - actualSum;

console.log(missingNumber); // Output: 3

