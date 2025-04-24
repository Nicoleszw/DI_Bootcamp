"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalLibrary = void 0;
const Library_1 = require("./Library");
class DigitalLibrary extends Library_1.Library {
    constructor(website) {
        super();
        this.website = website;
    }
    listBooks() {
        return this.getBooks().map(book => book.title);
    }
}
exports.DigitalLibrary = DigitalLibrary;
