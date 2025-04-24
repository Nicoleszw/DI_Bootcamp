import { Library } from "./Library";
import { Book } from "../models/Book";

export class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.getBooks().map(book => book.title);
  }
}
