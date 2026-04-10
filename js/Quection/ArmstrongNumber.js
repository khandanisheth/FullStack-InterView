function isArmstrong(num) {
    let str = num.toString();
    let n = str.length;
    let sum = 0;
    for (let digit of str) {
        sum += Math.pow(parseInt(digit), n);
    }
    return sum === num;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false


// what is Armstrong Number? 
// A number equal to the sum of its digits each raised to the power of number of digits.
// Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
// 1234 = 1^4 + 2^4 + 3^4 + 4^4 = 1 + 16 + 81 + 256 = 354 (Not Armstrong Number)

function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** digits; // power
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153));  // true
console.log(isArmstrong(123));  // false




// | **Problem**          | **Definition**                                                                                        | **Example**                            |
// | -------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------- |
// | **Prime Number**     | A number greater than 1 that has no divisors other than 1 and itself.                                 | 2, 3, 5, 7, 11                         |
// | **Armstrong Number** | A number equal to the sum of its digits each raised to the power of number of digits.                 | 153 → 1³ + 5³ + 3³ = 153               |
// | **Happy Number**     | A number which eventually reaches 1 when replaced by the sum of the squares of its digits repeatedly. | 19 → 1²+9²=82 → 8²+2²=68 … → 1 (Happy) |
// | **Factorial**        | Product of all positive integers up to a given number n. Denoted as n!.                               | 5! = 5×4×3×2×1 = 120                   |
// | **Fibonacci Series** | A sequence where each number is the sum of the two preceding ones, starting from 0 and 1.             | 0, 1, 1, 2, 3, 5, 8, 13                |
