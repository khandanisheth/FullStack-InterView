/*************************************************
 * JAVASCRIPT DESTRUCTURING - COMPLETE DEMO
 ************************************************
 
 Destructuring allows extracting values from arrays and properties from objects into variables 
 in a clean and readable way, reducing repetitive code.
 
 */

/* ========= 1. ARRAY DESTRUCTURING ========= */

// Ek array banaya
const numbers = [10, 20, 30, 40, 50];

// Array destructuring
// a = first index value (10)
// b = second index value (20)
// c = third index value (30)
let [a, b, c] = numbers;

console.log("Array values:", a, b, c);// 10 20 30   

/* ========= 2. ARRAY DESTRUCTURING WITH SKIP ========= */

// yahan second value skip ki ja rahi hai
let [first, , third] = numbers;

// first = 10
// third = 30
console.log("Skip example:", first, third); //  10 30

/* ========= 3. ARRAY DESTRUCTURING WITH REST ========= */

// firstNum = 10
// restNums = remaining values as array [20,30,40,50]
let [firstNum, ...restNums] = numbers;

console.log("First:", firstNum);// 10
console.log("Rest:", restNums);// [20,30,40,50]

/* ========= 4. OBJECT DESTRUCTURING ========= */

// Ek object banaya
const user = {
    name: "Aman",
    age: 22,
    city: "Jaipur",
    country: "India"
};

// Object destructuring (key name match hona chahiye) 
let { name, age } = user;

// name = "Aman"
// age  = 22
console.log("User:", name, age);

/* ========= 5. OBJECT DESTRUCTURING WITH RENAME ========= */

// key ko new variable name diya
let { city: userCity, country: userCountry } = user;

// userCity = "Jaipur"
// userCountry = "India"
console.log("Renamed:", userCity, userCountry);// Jaipur India

/* ========= 6. OBJECT DESTRUCTURING WITH DEFAULT VALUE ========= */

// salary key object me nahi hai
// isliye default value use hogi
let { salary = 30000 } = user;

console.log("Salary:", salary);

/* ========= 7. OBJECT DESTRUCTURING WITH REST ========= */

// name alag nikala
// baaki sab details me aa gaye
let { name: userName, ...otherDetails } = user;

/*
  userName = "Aman"
  otherDetails = { age:22, city:"Jaipur", country:"India" }
*/
console.log("Name:", userName);
console.log("Other Details:", otherDetails);

/* ========= 8. DESTRUCTURING IN FUNCTION PARAMETER ========= */

// Function jisme direct destructuring ho rahi hai
function printUser({ name, age, city }) {
    console.log("Function Output:");    // Function ke andar values print kar raha hai
    console.log("Name:", name);//   Aman
    console.log("Age:", age);//   22
    console.log("City:", city);//   Jaipur
}

// Object pass kiya function me
printUser(user);// Function Output: Name: Aman Age: 22 City: Jaipur

/* ========= 9. NESTED DESTRUCTURING ========= */

const employee = {
    id: 101,
    profile: {
        role: "Developer",
        experience: 2
    }
};

// Nested object destructuring
let {
    id,
    profile: { role, experience }
} = employee;

/*
  id = 101
  role = "Developer"
  experience = 2
*/

console.log("Employee ID:", id);
console.log("Role:", role);
console.log("Experience:", experience);//out

/*************************************************
 * END OF PROGRAM
 *************************************************/
