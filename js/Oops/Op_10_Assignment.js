// ✅ Assignment 1: Class & Object
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
}

const b1 = new Book("Think & Grow Rich", "Napoleon Hill", 300);
console.log(b1.getDetails());





// ✅ Assignment 2: Inheritance
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} Vehicle started...`);
    }
}

class Bike extends Vehicle {
    start() {
        console.log(`${this.brand} Bike started...`);
    }
}

const bike = new Bike("Yamaha");
bike.start();

// ✅ Assignment 3: Encapsulation
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();
acc.deposit(5000);
console.log(acc.getBalance());

// ✅ Assignment 4: Polymorphism
class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const r = new Rectangle(5, 3);
const c = new Circle(4);
console.log("Rectangle Area:", r.area());
console.log("Circle Area:", c.area());

// ✅ Assignment 5: Abstraction
class Employee {
    constructor(name) {
        this.name = name;//danish
    }
    calculateSalary() {
        throw new Error("Method 'calculateSalary()' must be implemented.");
    }
}

class FullTimeEmployee extends Employee {
    constructor(name, monthlySalary) {
        super(name);
        this.monthlySalary = monthlySalary;//500000
    }
    calculateSalary() {
        return this.monthlySalary;//500000
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, hourlyRate, hoursWorked) {
        super(name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}

const full = new FullTimeEmployee("Danish", 50000);
console.log("Full-time salary:", full.calculateSalary());



// ✅ Assignment 6: Static & Utility
class MathUtils {
    static version = "1.0";

    static factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * MathUtils.factorial(n - 1);
    }
}

console.log("Factorial of 5:", MathUtils.factorial(5));
console.log("MathUtils Version:", MathUtils.version);








// ✅ Assignment 7: Getters & Setters
class Student {
  constructor(name) {
    this._name = name;  // asli naam ko store kar raha hai yahan
  }

  get name() {
    return this._name;  // jab tum s.name likhoge, yeh chal jayega
  }

  set name(value) {
    if (value.length < 3) {
      console.log("Name too short");  // agar naam chhota hai to error dikhayega
    } else {
      this._name = value;  // nahi to naam update kar dega
    }
  }
}





const s = new Student("Ali");  // constructor me _name = "Ali"
console.log(s.name);           // getter chala, "Ali" print hua

s.name = "Mo";                 // setter chala, "Name too short" bola
console.log(s.name);           // getter chala, abhi bhi "Ali" print hoga

s.name = "Mohit";              // setter chala, naam update ho gaya
console.log(s.name);           // getter chala, ab "Mohit" print hoga


// ✅ Bonus Assignment: Mini Project - Student Management System

// Bonus Assignment: Mini Project Idea
// 🧠 Project: "Student Management System"

// Features:

// Student class with name, roll no, marks[]

// addMark(), getAverage()

// Create class ClassRoom to manage multiple students

// Show topper, average class performance
class StudentInfo {
    constructor(name, rollNo) {
        this.name = name;///d
        this.rollNo = rollNo;//101
        this.marks = [];
    }

    addMark(mark) {
        this.marks.push(mark);// st1 90  85
    }

    getAverage() {
        if (this.marks.length === 0) return 0;
        const total = this.marks.reduce((a, b) => a + b, 0);
        return total / this.marks.length;
    }
}

class ClassRoom {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);//d
    }

    showTopper() {
        let topper = null;
        let highest = 0;
        this.students.forEach((s) => {
            const avg = s.getAverage();
            if (avg > highest) {
                highest = avg;
                topper = s;
            }
        });
        return topper;
    }
}

const classRoom = new ClassRoom();
const st1 = new StudentInfo("Danish", 101);
st1.addMark(90);
st1.addMark(85);

const st2 = new StudentInfo("Rahul", 102);
st2.addMark(78);
st2.addMark(88);

classRoom.addStudent(st1);
classRoom.addStudent(st2);

console.log("Topper:", classRoom.showTopper());
