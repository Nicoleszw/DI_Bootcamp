"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookDetails(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }
    getBooks() {
        return this.books;
    }
}
exports.Library = Library;
