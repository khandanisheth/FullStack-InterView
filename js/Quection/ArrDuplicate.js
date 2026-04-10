// Example array
let arr = [1, 2, 2, 3, 4, 4, 5];

// Using Set
let uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]




let x = [10, 20, 30, 20, 40, 10, 50];

let duplicates = [];
let k = 0;

for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
        if (x[i] === x[j]) {
            duplicates[k] = x[i];
            k++;
        }
    }
}

let uniqueDuplicates = [...new Set(duplicates)];//output 10,20

// Another approach without using Set
let xx = [10, 20, 30, 20, 40, 10, 40, 50];

let d = [];

for (let i of xx) {
    let count = 0;

    for (let j of xx) {
        if (i === j) {
            count++;
        }
    }

    if (count > 1 && !d.includes(i)) {
        console.log(i);// output 10,20,40
        // ye line sirf duplicate value ko print karne ke liye he
        d.push(i); // ⭐ important
    }
}








console.log(uniqueDuplicates); // [20, 10]
//or ye bhi chaiye esi logiv [10, 20, 30, 40, 50];
let y = [10, 20, 30, 20, 40, 10, 50];
let unique = [];

for (let i = 0; i < x.length; i++) {
    if (!unique.includes(x[i])) {
        unique.push(x[i]);
    }
}

console.log(unique);







