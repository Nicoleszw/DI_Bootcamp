// Exercise 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

// Exercise 2
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    let pos = index + 1;
    let suffix = (pos === 1) ? ordinal[1] :
                 (pos === 2) ? ordinal[2] :
                 (pos === 3) ? ordinal[3] : ordinal[0];

    console.log(`${pos}${suffix} choice is ${color}.`);
});

// Exercise 3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//The final array will be:
['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

const country = "USA";
console.log([...country]);

//The final array will be:
["U", "S", "A"]

let newArray = [...[,,]];
console.log(newArray);

//The final array will be:
[undefined, undefined]

// Exercise 4 
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

console.log(welcomeStudents);

const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");

console.log(fullStackResidents);

//Bonus
const fullStackLastNames = users
    .filter(user => user.role === "Full Stack Resident")
    .map(user => user.lastName);

console.log(fullStackLastNames);

// Exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

console.log(combinedString);

// Exercise 6 
const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

const passedStudents = students.filter(student => student.isPassed);

console.log(passedStudents);

// Bonus 
students
    .filter(student => student.isPassed)
    .forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}!`));

