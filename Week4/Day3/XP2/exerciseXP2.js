function myMove() {
    const animateDiv = document.getElementById("animate");
    const container = document.getElementById("container");
    
    let position = 0; 
    const containerWidth = container.clientWidth - animateDiv.clientWidth; 

    const intervalId = setInterval(() => {
        if (position >= containerWidth) {
            clearInterval(intervalId); 
        } else {
            position++; 
            animateDiv.style.left = position + "px"; 
        }
    }, 1); 
}
