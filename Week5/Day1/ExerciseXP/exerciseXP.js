// Exercise 1
// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); // Prediction: 3, since "a" is reassigned inside the function.
}

// #1.1 - Running funcOne() will display an alert with "inside the funcOne function 3".
// #1.2 - If "a" were declared with "const", an error would occur because "const" values cannot be reassigned.

// #2
let a = 0;
function funcTwo() {
    a = 5; // Global "a" is modified.
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); // Prediction: 0 before funcTwo() runs, 5 after.
}

// #2.1 - Running the sequence:
funcThree(); // Alerts "inside the funcThree function 0"
funcTwo();   // Changes global "a" to 5
funcThree(); // Alerts "inside the funcThree function 5"

// #2.2 - If "a" were declared with "const", an error would occur when trying to reassign "a" in funcTwo().

// #3
function funcFour() {
    window.a = "hello"; // Creates a global variable "a" on the window object.
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); // Prediction: "hello" after funcFour() is called.
}

// #3.1 - Running the sequence:
funcFour(); // Sets "a" globally on window
funcFive(); // Alerts "inside the funcFive function hello"

// #4
let b = 1;
function funcSix() {
    let b = "test"; // Local variable "a" inside the function.
    alert(`inside the funcSix function ${b}`); // Prediction: "test" since it's scoped within the function.
}

// #4.1 - Running funcSix() will alert "inside the funcSix function test".
// #4.2 - If "a" were declared with "const", it would still work fine because no reassignment occurs.

// #5
let c = 2;
if (true) {
    let c = 5; // Block-scoped variable, doesn't affect outer "a".
    alert(`in the if block ${c}`); // Prediction: 5
}
alert(`outside of the if block ${c}`); // Prediction: 2

// #5.1 - Running this code:
// Alerts "in the if block 5"
// Alerts "outside of the if block 2"

// #5.2 - If "a" were declared with "const", it would still work fine, since no reassignment occurs within the block or globally.

// Exercise 2
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// Exercise 3
const isString = (value) => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false
console.log(isString(123)); // false
console.log(isString({ key: 'value' })); // false
console.log(isString(true)); // false
console.log(isString('JavaScript')); // true

// Exercise 4

const sum = (a, b) => a + b;

console.log(sum(5, 10)); // 15
console.log(sum(3, 7));  // 10
console.log(sum(-2, 8)); // 6

// Exercise 5
// 1
function kgToGrams(weight) {
    return weight * 1000;
}

console.log(kgToGrams(2)); // 2000
console.log(kgToGrams(5)); // 5000

// 2
const kgToGramsExpression = function(weight) {
    return weight * 1000;
};

console.log(kgToGramsExpression(3)); // 3000
console.log(kgToGramsExpression(7)); // 7000

//3 
// Function declarations are hoisted, meaning they can be called before they are defined.
// Function expressions are NOT hoisted, so they must be defined before being used.

// 4
const kgToGramsArrow = (weight) => weight * 1000;

console.log(kgToGramsArrow(4)); // 4000
console.log(kgToGramsArrow(10)); // 10000

// Exercise 6 

(function (numChildren, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    
    const fortuneElement = document.createElement("p");
    fortuneElement.textContent = fortune;
    document.body.appendChild(fortuneElement);

    console.log(fortune);
})(2, 'Emma', 'New York', 'Software Engineer');

// Exercise 8 

// Part 1
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const sentence = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        
        const juiceElement = document.createElement("p");
        juiceElement.textContent = sentence;
        document.body.appendChild(juiceElement);

        console.log(sentence);
    }

    addIngredients("apple", "banana", "orange"); 
}

makeJuice("large");

// Part 2 
function makeJuice(size) {
    let ingredients = []; 

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        
        const juiceElement = document.createElement("p");
        juiceElement.textContent = sentence;
        document.body.appendChild(juiceElement);

        console.log(sentence);
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "strawberry", "pineapple");

    displayJuice();
}

makeJuice("medium");
