const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

function calculateVolume(event) {
    event.preventDefault(); 

    const radius = parseFloat(radiusInput.value); 

    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for radius.");
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    volumeInput.value = volume.toFixed(2); 
}

form.addEventListener("submit", calculateVolume);
