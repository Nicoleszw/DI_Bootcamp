// Exercise 1:
var message = "Hello, World!";
console.log(message);
// Exercise 2:
var userName = "Alice";
var age = 30;
console.log("Name:", userName);
console.log("Age:", age);
// Exercise 3:
var id;
id = 101;
console.log("ID as number:", id);
id = "ABC123";
console.log("ID as string:", id);
// Exercise 4:
function checkNumber(num) {
    if (num > 0) {
        return "The number is positive.";
    }
    else if (num < 0) {
        return "The number is negative.";
    }
    else {
        return "The number is zero.";
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
// Exercise 5: 
function getDetails(name, age) {
    var greeting = "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    return [name, age, greeting];
}
var details = getDetails("Alice", 25);
console.log(details);
function createPerson(name, age) {
    return { name: name, age: age };
}
var person = createPerson("Alice", 25);
console.log(person);
// Exercise 7: 
function setInputValue() {
    var inputElement = document.getElementById("username");
    if (inputElement) {
        inputElement.value = "Hello from TypeScript!";
        console.log("Input value set successfully.");
    }
    else {
        console.log("Element not found.");
    }
}
if (typeof window !== "undefined") {
    window.onload = function () {
        setInputValue();
    };
}
// Exercise 8: 
function getAction(role) {
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
function greet(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    else {
        return "Hello, stranger!";
    }
}
console.log(greet("Alice"));
console.log(greet());
