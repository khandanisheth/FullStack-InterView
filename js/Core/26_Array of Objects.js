// Array of Objects
let students = [
    { id: 1, name: "Amit", age: 22, city: "Jaipur" },
    { id: 2, name: "Rahul", age: 24, city: "Delhi" },
    { id: 3, name: "Neha", age: 21, city: "Mumbai" }
];
//Read Data
console.log(students[0]);// output: { id: 1, name: "Amit", age: 22, city: "Jaipur" }
console.log(students[0].name);     // output: Amit
console.log(students[1].age);      // output: 24
//forEach Loop age
students.forEach(stu => {
    console.log(stu.name + " - " + stu.city);// Amit - Jaipur, Rahul - Delhi, Neha - Mumbai 
});
//3️⃣ ADD (New Object add karna)
students.push({
    id: 4,
    name: "Pooja",
    age: 20,
    city: "Kota"
});
//Update
students[1].age = 25;       // Rahul ki age update
students[2].city = "Pune"; // Neha ki city update

// Delete
students.splice(0, 1);  // First object (Amit) delete ho jayega     

const jaipurStudents = students.filter(
    stu => stu.city === "Jaipur"
);
console.log(jaipurStudents);// Output: [{ id: 1, name: "Amit", age: 22, city: "Jaipur" }]

// Map method to get array of names 

const names = students.map(stu => stu.name);
console.log(names);//   Output: ["Amit", "Rahul", "Neha", "Pooja"]

// Find method to get student with specific id
const studentWithId2 = students.find(stu => stu.id === 2);
console.log(studentWithId2);// Output: { id: 2, name: "Rahul", age: 25, city: "Delhi" }
