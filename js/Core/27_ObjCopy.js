/***********************
 * ORIGINAL OBJECT
 ***********************/
const originalObj = {
    name: "Danish",
    age: 23,
    address: {
        city: "Jaipur",
        pin: 302001
    }
};

console.log("Original Object:", originalObj);


/***********************
 * 1️⃣ REFERENCE COPY
 ***********************/
// Yahan sirf reference copy hota hai (same memory)

const referenceCopy = originalObj;

// Change nested value
referenceCopy.name = "Ali";
referenceCopy.address.city = "Delhi";

console.log("\n--- Reference Copy ---");
console.log("Original:", originalObj.name); // Ali ❌
console.log("Reference:", referenceCopy.name); // Ali
console.log("Original:", originalObj.address.city); // Delhi ❌
console.log("Reference:", referenceCopy.address.city); // Delhi

// ❌ Dono change ho gaye (problem)

/***********************
 * 2️⃣ ES6 SPREAD COPY (Shallow Copy)
 ***********************/
// First level copy hota hai
const spreadCopy = { ...originalObj };

// Change top-level property
spreadCopy.name = "Ali";

// Change nested property
spreadCopy.address.city = "Mumbai";

console.log("\n--- ES6 Spread Copy (Shallow) ---");
console.log("Original Name:", originalObj.name); // Danish ✅
console.log("Spread Name:", spreadCopy.name);   // Ali

console.log("Original City:", originalObj.address.city); // Mumbai ❌
console.log("Spread City:", spreadCopy.address.city);   // Mumbai

// ⚠️ Nested object me problem aayi


/***********************
 * 3️⃣ DEEP COPY
 ***********************/
// Poora object naya ban jata hai (nested ke saath)
const deepCopy = JSON.parse(JSON.stringify(originalObj));
// Change nested value
deepCopy.address.city = "Pune";

console.log("\n--- Deep Copy ---");
console.log("Original City:", originalObj.address.city); // Mumbai ✅
console.log("Deep Copy City:", deepCopy.address.city);   // Pune



let obj = { a: 10, b: 20, c: 30 };
console.log(Object.values(obj));// ye 
console.log(Object.keys(obj));
console.log(Object.entries(obj));
let sum = Object.values(obj).reduce((acc, v) => {return acc + v});
console.log(sum); // 60

// ✅ Original safe hai


/***********************
 * FINAL SUMMARY
 ***********************/
/*
Reference Copy:
- Same memory
- Ek change = dono change ❌

ES6 Spread Copy:
- First level safe
- Nested object unsafe ⚠️

Deep Copy:
- Poora object alag
- Nested bhi safe ✅

🏆 Interview One-Line Revision
Reference copy → same memory
Spread copy → shallow copy
Deep copy → completely independent




Object.keys(user);    // ["name", "city"]
Object.values(user); // ["Danish", "Jaipur"]
Object.entries(user);


*/
