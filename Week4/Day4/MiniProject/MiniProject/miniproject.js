const colors = [
    "red", "orange", "yellow",
    "green", "lightgreen", "cyan",
    "darkgreen", "turquoise", "lightblue",
    "blue", "deepskyblue", "navy",
    "darkblue", "purple", "magenta",
    "pink", "lightpink", "gray",
    "darkgray", "black", "white"
];

let selectedColor = "black"; 
let isMouseDown = false; 

const colorPalette = document.getElementById("color-palette");
colors.forEach(color => {
    const btn = document.createElement("div");
    btn.classList.add("color-btn");
    btn.style.backgroundColor = color;
    btn.addEventListener("click", () => {
        selectedColor = color;
    });
    colorPalette.appendChild(btn);
});

const grid = document.getElementById("grid");
const numColumns = Math.floor(window.innerWidth / 20);
const numRows = Math.floor(window.innerHeight / 20);
for (let i = 0; i < numColumns * numRows; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mousedown", () => {
        isMouseDown = true;
        cell.style.backgroundColor = selectedColor;
    });

    cell.addEventListener("mouseover", () => {
        if (isMouseDown) {
            cell.style.backgroundColor = selectedColor;
        }
    });

    grid.appendChild(cell);
};

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function clearGrid() {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

