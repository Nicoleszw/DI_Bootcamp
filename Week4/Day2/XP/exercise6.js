const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const ulElement = navDiv.querySelector("ul");

const newLi = document.createElement("li");

const newLink = document.createElement("a");
newLink.href = "#";  
newLink.textContent = "Logout";

newLi.appendChild(newLink);

ulElement.appendChild(newLi);

const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;

console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);
