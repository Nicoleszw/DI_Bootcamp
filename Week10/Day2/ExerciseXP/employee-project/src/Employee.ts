// --- Exercise 1 ---
class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;
  
    constructor(name: string, salary: number, position: string, department: string) {
      this.name = name;
      this.salary = salary;
      this.position = position;
      this.department = department;
    }
  
    public getEmployeeInfo(): string {
      return `Name: ${this.name}, Position: ${this.position}`;
    }
  }
  
  // --- Exercise 2 ---
  class Product {
    public readonly id: number;
    public name: string;
    public price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    public getProductInfo(): string {
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
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public makeSound(): string {
      return "Some generic animal sound";
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    public makeSound(): string {
      return "bark";
    }
  }
  
  // --- Test Exercise 3 ---
  const myDog = new Dog("Buddy");
  console.log(`${myDog.name} says: ${myDog.makeSound()}`);

// --- Exercise 4 ---
class Calculator {
    static add(a: number, b: number): number {
      return a + b;
    }
  
    static subtract(a: number, b: number): number {
      return a - b;
    }
  }
  
  // --- Test Exercise 4 ---
  console.log("Sum:", Calculator.add(10, 5));        
  console.log("Difference:", Calculator.subtract(10, 5)); 

// --- Exercise 5 ---
interface User {
    readonly id: number;
    name: string;
    email: string;
  }
  
  interface PremiumUser extends User {
    membershipLevel?: string; 
  }
  
  function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    
    if (user.membershipLevel) {
      console.log(`Membership Level: ${user.membershipLevel}`);
    } else {
      console.log("Membership Level: Standard");
    }
  }
  
  // --- Test Exercise 5 ---
  const regularUser: PremiumUser = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  };
  
  const goldUser: PremiumUser = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    membershipLevel: "Gold"
  };
  
  printUserDetails(regularUser);
  printUserDetails(goldUser);
  
  
  
  