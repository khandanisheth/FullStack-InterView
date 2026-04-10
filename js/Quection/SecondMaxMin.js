const numbers = [10, 5, 20, 5, 25, 3, 20];

// unique values
const uniqueNumbers = [...new Set(numbers)];

// sort karke second min/max
uniqueNumbers.sort((a, b) => a - b);

console.log("Second Min:", uniqueNumbers[1]); // 5
console.log("Second Max:", uniqueNumbers[uniqueNumbers.length - 2]); // 20
