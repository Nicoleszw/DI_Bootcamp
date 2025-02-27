// Exercise 1
function displayNumbersDivisible() {
    let sum = 0;
    let numbers = [];

    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            numbers.push(i);
            sum += i;
        }
    }

    console.log(numbers.join(" "));
    console.log("Sum:", sum);
}

displayNumbersDivisible();

// Exercise 2 
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;

    for (let item of shoppingList) {
        if (stock[item] > 0) { 
            total += prices[item]; 
            stock[item]--;
        }
    }

    return total;
}

console.log("Total bill:", myBill());

// Exercise 3 
function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;

    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * coinValues[i];
    }

    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 

// Exercise 4
function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights will you stay at the hotel?");
    } while (isNaN(nights) || nights === "" || nights === null);

    return Number(nights) * 140;
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Enter your travel destination:");
    } while (!destination || !isNaN(destination));

    destination = destination.toLowerCase();
    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days will you rent the car?");
    } while (isNaN(days) || days === "" || days === null);

    let cost = Number(days) * 40;
    if (days > 10) {
        cost *= 0.95; 
    }
    return cost;
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total vacation cost: $${total}`);
}

totalVacationCost();

// Exercise 5

const containerDiv = document.getElementById("container");
console.log(containerDiv);

const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

lists[1].children[1].remove();

lists.forEach(list => {
    list.children[0].textContent = "Your Name"; 
});

lists.forEach(list => {
    list.classList.add("student_list");
});

lists[0].classList.add("university", "attendance");

containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

const allLis = document.querySelectorAll("li");
allLis.forEach(li => {
    if (li.textContent === "Dan") {
        li.style.display = "none";
    }
});

allLis.forEach(li => {
    if (li.textContent === "Richard") {
        li.style.border = "2px solid black";
    }
});

document.body.style.fontSize = "20px";
