
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        console.log(count);
    }
    return innerFunction;
}

const counter = outerFunction(); // innerFunction return hua
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3


// Closure simple words me
// Closure matlab — ek function ke andar dusra function bana ho,
// aur wo andar wala function baahar wale function ke variables ko use kar paaye
// chahe baahar wala function khatam ho chuka ho.

// Matlab, wo variables ko yaad rakhta hai aur unko future me bhi use ya change kar sakta hai.
// Isliye isko “closure” kehte hain — kyunki ye apne scope ko “close” karke saath le leta hai.

// function outer() {
//     let outerVar = "I'm in the outer scope!";
//     function inner() {
//         console.log(outerVar);
//         outerVar = "Updated"
//     }
//     return inner;
// }

// const closure = outer();
// closure();
// closure();
