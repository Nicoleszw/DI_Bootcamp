import { DigitalLibrary } from "./classes/DigitalLibrary";

const myDigitalLibrary = new DigitalLibrary("https://mydigitallibrary.com");

myDigitalLibrary.addBook({
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt & David Thomas",
  isbn: "9780201616224",
  publishedYear: 1999,
  genre: "Programming"
});

myDigitalLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "9780132350884",
  publishedYear: 2008
});

const bookDetails = myDigitalLibrary.getBookDetails("9780201616224");
console.log("Book Details:", bookDetails);

const titles = myDigitalLibrary.listBooks();
console.log("Book Titles:", titles);
