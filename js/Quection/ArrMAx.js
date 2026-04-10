let nums = [10, 25, 3, 45, 7];
//nums.sort((a,b)=>a-b);//

// num[0]  min
//max[nums.length - 1]


let max = nums.reduce((acc, curr) => acc > curr ? acc : curr);

console.log(max); // 45

//let min = nums.reduce((acc, curr) => acc < curr ? acc : curr);
//console.log(min); // 3   


// One-line final answer

// Har iteration me acc change hota hai (return value ke basis par), curr sirf next array element hota hai.