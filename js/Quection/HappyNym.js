function sumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappy(n) {
  while (n !== 1 && n !== 4) {  // 4 aane ka matlab loop me ghus gaya
    n = sumOfSquares(n);
  }
  return n === 1;
}

console.log(isHappy(19)); // true
console.log(isHappy(2));  // false
