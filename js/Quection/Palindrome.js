function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false


// Without String (Math approach)
function isPalindrome(num) {
    if (num < 0) return false; // negative number never palindrome

    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;         // last digit nikalo
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);   // last digit remove karo
    }

    return original === reversed;
}

console.log(isPalindrome(1221)); // true
console.log(isPalindrome(1234)); // false
