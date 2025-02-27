// Exercise 1

const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg" from the people array.
people.shift(); 

// 2. Replace "James" with "Jason".
const indexJames = people.indexOf("James");
if (indexJames !== -1) {
  people[indexJames] = "Jason"; 
}

// 3. Add your name to the end of the people array.
people.push("Nicole"); 

// 4. Log Mary's index.
console.log("Mary's index:", people.indexOf("Mary")); 

// 5. Make a copy of the people array using slice, excluding "Mary" (first element) and your name (last element).
const peopleCopy = people.slice(1, 3);
console.log("Copied array (without Mary and your name):", peopleCopy);

// 6. Write code that gives the index of "Foo".
console.log("Index of 'Foo':", people.indexOf("Foo"));

// 7. Create a variable called last that holds the last element of the array.
const last = people[people.length - 1];
console.log("Last element of the array:", last);

// Part II: Loops 

// 8. Using a loop, iterate through the people array and console.log each person.
console.log("Iterating through all people:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 9. Using a loop, iterate through the people array and exit the loop after console.logging "Devon".
console.log("Iterating until 'Devon' is found:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

// Exercise 2

// Create an array with five favorite colors
const colors = ["blue", "red", "green", "yellow", "purple"];

// Loop through the array and log the message for each color
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Exercise 3

let number;

do {
  let userInput = prompt("Please enter a number (at least 10):");
  console.log("Data type of userInput:", typeof userInput);
  number = Number(userInput);
} while (number < 10);

// Exercise 4 

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
// 2. Console.log the number of floors in the building.
console.log("Number of floors:", building.numberOfFloors);
  
// 3. Console.log how many apartments are on floors 1 and 3.
console.log("Apartments on the first floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on the third floor:", building.numberOfAptByFloor.thirdFloor);
  
// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenant = building.nameOfTenants[1]; 
const roomsForSecondTenant = building.numberOfRoomsAndRent.dan[0]; 
console.log("Second tenant:", secondTenant, "has", roomsForSecondTenant, "rooms.");
  
// 5. Check if the sum of Sarah's and David's rent is bigger than Dan's rent. If it is, increase Dan's rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1]; 
const davidRent = building.numberOfRoomsAndRent.david[1]; 
const danRent = building.numberOfRoomsAndRent.dan[1]; 
  
  if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been updated to:", building.numberOfRoomsAndRent.dan[1]);
  } else {
    console.log("Dan's rent remains unchanged:", danRent);
  }

// Exercise 5
  
const family = {
    father: "John",
    mother: "Jane",
    son: "Chris",
    daughter: "Anna"
  };
  
//2. Using a for...in loop to log the keys of the object.
  console.log("Family keys:");
  for (let key in family) {
    console.log(key);
  }
  
//3. Using a for...in loop to log the values of the object.
  console.log("Family values:");
  for (let key in family) {
    console.log(family[key]);
  }

// Exercise 6 
  
  const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };
  
  let sentence = "";
  for (let key in details) {
    sentence += key + " " + details[key] + " ";
  }
  
  console.log(sentence.trim());
  
// Exercise 7 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Extract the first letter of each name, sort them alphabetically, and join into a string.
const secretSocietyName = names
  .map(name => name[0])
  .sort()
  .join('');

console.log(secretSocietyName); 
