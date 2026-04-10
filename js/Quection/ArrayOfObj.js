// ===============================
// Question 1:
// Given an array of objects, 
// filter users whose name is "Dk"
// and add gender based on age
// ===============================


// Original data (array of objects)
let x = [
    { id: 1, name: "Dk", age: 24 },//0
    { id: 2, name: "sk", age: 44 },//1
    { id: 3, name: "ck", age: 14 },//2
    { id: 4, name: "Dk", age: 20 }//3
];


// -------------------------------
// Step 1: Print original array
// -------------------------------
console.log("Original Data:", x);// output the original array


// -------------------------------
// Question 1(a):
// Filter users whose name is "Dk"
// filter() array ko condition ke
// basis par chhota karta hai
// -------------------------------
let y = x.filter((item) => item.name === "Dk");
console.log("Filtered (name = Dk):", y);// output   { id: 1, name: "Dk", age: 24 },//0                      

// -------------------------------
// Question 1(b,c):
// Add gender property to each object
// Rule:
// age > 20  → male
// age <= 20 → female
// map() har object ko modify karta hai
// -------------------------------
let z = x.map((item) => ({
    ...item,                    // purane object ki saari properties copy
    gender: item.age > 20       // condition check
        ? "male"                // true case
        : "female"              // false case
}));

console.log("Gender Added:", z);



let users = [
    { name: "Dk", age: 24 },
    { name: "sk", age: 14 },
    { name: "ck", age: 20 }
];

let totalAge = users.reduce((acc, user) => {
    return acc + user.age;
}, 0);

console.log(totalAge); // 58














let obj = {
  a: 40,
  b: 10,
  c: 30,
  d: 20
};
let entries = [];

for (let key in obj) {
  entries.push([key, obj[key]]);
}
console.log(entries);
for (let i = 0; i < entries.length; i++) {
  for (let j = 0; j < entries.length - i - 1; j++) {
    if (entries[j][1] > entries[j + 1][1]) {
      let temp = entries[j];
      entries[j] = entries[j + 1];
      entries[j + 1] = temp;
    }
  }
}
console.log(entries);
let sortedObj = {};

for (let i = 0; i < entries.length; i++) {
  sortedObj[entries[i][0]] = entries[i][1];
}

console.log(sortedObj);


