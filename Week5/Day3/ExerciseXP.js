// Exercise 1
// OutPut: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2 
function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

// Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1
const usersArray = Object.entries(users);
console.log(usersArray); 

// 2
const updatedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);
console.log(updatedUsersArray); 

// Execise 4
// OutPut: object

// Exercise 5
class Dog {
    constructor(name) {
      this.name = name;
    }
  };

// Correct: option 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  
// Exercise 

// 1
// [2] === [2] // false because they are two different array objects in memory.
// {} === {}   // false because they are two different object instances in memory.

// 2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

// object2 = object1 means object2 is a reference to object1, not a new object.
// object3 = object2 means object3 also points to the same reference.
// object4 = { number: 5 } creates a new object that is independent of object1.
// Changing object1.number = 4 also changes object2.number and object3.number because they reference the same object.
// object4.number remains 5 because it's a completely separate object.

// 3
class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }

  
  class Mammal extends Animal {
    sound(sound) {
      return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));

