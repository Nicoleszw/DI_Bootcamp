"use strict";
// --- Exercise 1 ---
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo() {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}
// --- Exercise 2 ---
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `${this.name} costs $${this.price}`;
    }
}
// --- Test Exercise 1 ---
const emp = new Employee("Alice Johnson", 85000, "Developer", "Engineering");
console.log(emp.getEmployeeInfo());
// --- Test Exercise 2 ---
const prod = new Product(101, "Smartphone", 699);
console.log(prod.getProductInfo());
// ❌ Uncommenting this will cause a TypeScript error
// prod.id = 202;
// --- Exercise 3 ---
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "Some generic animal sound";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        return "bark";
    }
}
// --- Test Exercise 3 ---
const myDog = new Dog("Buddy");
console.log(`${myDog.name} says: ${myDog.makeSound()}`);
// --- Exercise 4 ---
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
// --- Test Exercise 4 ---
console.log("Sum:", Calculator.add(10, 5));
console.log("Difference:", Calculator.subtract(10, 5));
function printUserDetails(user) {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
    else {
        console.log("Membership Level: Standard");
    }
}
// --- Test Exercise 5 ---
const regularUser = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};
const goldUser = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    membershipLevel: "Gold"
};
printUserDetails(regularUser);
printUserDetails(goldUser);
