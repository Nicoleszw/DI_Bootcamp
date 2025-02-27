// Part I
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II
setTimeout(() => {
    const container = document.getElementById("container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}, 2000);

// Part III
const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

let intervalId = setInterval(() => {
    if (container.childElementCount >= 5) {
        clearInterval(intervalId); 
        return;
    }
    
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
}, 2000);

clearButton.addEventListener("click", () => {
    clearInterval(intervalId);
});
