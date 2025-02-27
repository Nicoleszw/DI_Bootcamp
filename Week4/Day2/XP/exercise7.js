const allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OdwZ8gBWL.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.style.display = "flex";
    bookDiv.style.alignItems = "center";
    bookDiv.style.marginBottom = "10px";
    bookDiv.style.padding = "10px";
    bookDiv.style.border = "1px solid black";

    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
    img.style.width = "100px";
    img.style.marginRight = "10px";

    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    bookDiv.appendChild(img);
    bookDiv.appendChild(bookDetails);

    section.appendChild(bookDiv);
});
