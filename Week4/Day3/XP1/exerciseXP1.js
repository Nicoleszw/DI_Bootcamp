const h1Element = document.querySelector("article h1");
console.log(h1Element);

const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");
if (paragraphs.length > 0) {
    article.removeChild(paragraphs[paragraphs.length - 1]);
}

const h2Element = document.querySelector("article h2");
h2Element.addEventListener("click", function () {
    h2Element.style.backgroundColor = "red";
});

const h3Element = document.querySelector("article h3");
h3Element.addEventListener("click", function () {
    h3Element.style.display = "none";
});

const button = document.createElement("button");
button.textContent = "Make Text Bold";
document.body.appendChild(button); 

button.addEventListener("click", function () {
    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});
