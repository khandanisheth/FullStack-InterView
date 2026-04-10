/***************************************************
 * JAVASCRIPT OBJECT – ALL CODING PROBLEMS
 * (Basic + Interview Tricky)
 ***************************************************/


/* =================================================
   1. Object ke values ka SUM aur MAX nikalna
================================================= */

let marks = { math: 80, eng: 90, sci: 70 };

// MAX value using reduce
let maxMarks = Object.values(marks).reduce((x, acc) => {
  return x > acc ? x : acc;
}, 0);

// SUM of values using reduce
let sumMarks = Object.values(marks).reduce((x, acc) => {
  return x + acc;
}, 0);

console.log("Max Marks:", maxMarks); // 90
console.log("Sum Marks:", sumMarks); // 240


/* =================================================
   2. Object ki key aur value SWAP karna
================================================= */

let obj1 = { a: 1, b: 2 };

let swapped = {};

for (let key in obj1) {
  swapped[obj1[key]] = key; // value -> key
}

console.log("Swapped Object:", swapped);
// { '1': 'a', '2': 'b' }


/* =================================================
   3. Object ki sabhi KEYS uppercase me karna
================================================= */

let user = { name: "Danish", city: "Jaipur" };

let upperKeysObj = {};

for (let key in user) {
  upperKeysObj[key.toUpperCase()] = user[key];
}

console.log("Uppercase Keys:", upperKeysObj);
// { NAME: 'Danish', CITY: 'Jaipur' }


/* =================================================
   4. Object ke sabhi VALUES ko STRING me convert karna
================================================= */

let obj2 = { a: 1, b: true, c: null };

let stringValues = {};

for (let key in obj2) {
  stringValues[key] = String(obj2[key]);
}

console.log("String Values:", stringValues);
// { a: '1', b: 'true', c: 'null' }


/* =================================================
   5. Object me HIGHEST value find karna (loop se)
================================================= */

let scores = { a: 40, b: 90, c: 70 };

let maxScore = -Infinity;

for (let key in scores) {
  if (scores[key] > maxScore) {
    maxScore = scores[key];
  }
}

console.log("Highest Score:", maxScore); // 90


/* =================================================
   6. Nested Object ko FLAT object me convert karna
================================================= */

let nestedObj = {
  name: "Danish",
  address: {
    city: "Jaipur",
    pin: 302001
  }
};

let flatObj = {};

for (let key in nestedObj) {
  if (typeof nestedObj[key] === "object" && nestedObj[key] !== null) {
    for (let subKey in nestedObj[key]) {
      flatObj[subKey] = nestedObj[key][subKey];
    }
  } else {
    flatObj[key] = nestedObj[key];
  }
}

console.log("Flat Object:", flatObj);
// { name: 'Danish', city: 'Jaipur', pin: 302001 }


/* =================================================
   7. Object me DUPLICATE values find karna
================================================= */

let dupObj = { a: 1, b: 2, c: 1, d: 2, e: 3 };

let values = Object.values(dupObj);
let duplicates = [];

for (let i = 0; i < values.length; i++) {
  if (values.indexOf(values[i]) !== i && !duplicates.includes(values[i])) {
    duplicates.push(values[i]);
  }
}

console.log("Duplicate Values:", duplicates); // [1, 2]


/* =================================================
   🔥 EXTRA INTERVIEW TRICKY PROBLEMS
================================================= */


/* 8. Object EMPTY hai ya nahi */
let emptyObj = {};

let isEmpty = Object.keys(emptyObj).length === 0;
console.log("Is Object Empty:", isEmpty); // true


/* 9. Shallow Copy vs Deep Copy problem */

let original = {
  name: "Danish",
  skills: { frontend: "React" }
};

// Shallow copy
let shallowCopy = { ...original };
shallowCopy.skills.frontend = "Angular";

console.log("Original after shallow copy:", original.skills.frontend);//output Angular
// Angular (Problem)

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.skills.frontend = "Vue";

console.log("Original after deep copy:", original.skills.frontend);
// Angular (Safe from deep copy changes)


/* 10. Object me PROPERTY exist karti hai ya nahi */

let checkObj = { x: 10 };

console.log("x" in checkObj); // true
console.log(checkObj.hasOwnProperty("y")); // false


/* 11. Object ke total KEYS count karna */

let countObj = { a: 1, b: 2, c: 3 };

let keyCount = Object.keys(countObj).length;
console.log("Total Keys:", keyCount); // 3


/* 12. Object se specific property DELETE karna */

let delObj = { name: "Danish", age: 24, city: "Jaipur" };

delete delObj.age;
console.log("After Delete:", delObj);


/***************************************************
 * END OF PROGRAM
 ***************************************************/
