// Exercise 1:
let message: string = "Hello, World!";
console.log(message);

// Exercise 2:
let userName: string = "Alice";
let age: number = 30;
console.log("Name:", userName);
console.log("Age:", age);

// Exercise 3:
let id: string | number;

id = 101;             
console.log("ID as number:", id);

id = "ABC123";       
console.log("ID as string:", id);

// Exercise 4:
function checkNumber(num: number): string {
    if (num > 0) {
      return "The number is positive.";
    } else if (num < 0) {
      return "The number is negative.";
    } else {
      return "The number is zero.";
    }
  }
  
  console.log(checkNumber(10));   
  console.log(checkNumber(-5));   
  console.log(checkNumber(0));    

// Exercise 5: 
function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
  }
  
  const details = getDetails("Alice", 25);
  console.log(details); 
  
// Exercise 6: 

type Person = {
    name: string;
    age: number;
  };
  
  function createPerson(name: string, age: number): Person {
    return { name, age };
  }
  
  const person = createPerson("Alice", 25);
  console.log(person); 
    
// Exercise 7: 

function setInputValue() {
    const inputElement = document.getElementById("username") as HTMLInputElement;
    if (inputElement) {
      inputElement.value = "Hello from TypeScript!";
      console.log("Input value set successfully.");
    } else {
      console.log("Element not found.");
    }
  }
  if (typeof window !== "undefined") {
    window.onload = () => {
      setInputValue();
    };
  }
  
// Exercise 8: 

function getAction(role: string): string {
    switch (role) {
      case "admin":
        return "Manage users and settings";
      case "editor":
        return "Edit content";
      case "viewer":
        return "View content";
      case "guest":
        return "Limited access";
      default:
        return "Invalid role";
    }
  }
  
  console.log(getAction("admin"));   
  console.log(getAction("editor"));  
  console.log(getAction("viewer"));  
  console.log(getAction("guest"));   
  console.log(getAction("unknown")); 
  
// Exercise 9: 

function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello, stranger!";
  }
}

console.log(greet("Alice")); 
console.log(greet());        
