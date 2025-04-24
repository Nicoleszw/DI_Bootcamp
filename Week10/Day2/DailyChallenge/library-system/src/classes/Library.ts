import { Book } from "../models/Book";

export class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }

  protected getBooks(): Book[] {
    return this.books;
  }
}
