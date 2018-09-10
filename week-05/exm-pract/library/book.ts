import { Bookshelf } from "./bookshelf";

export class Book {
  protected author: string;
  protected title: string;
  protected releaseYear: number;

  constructor(author, title, releaseYear) {
    this.author = author;
    this.title = title;
    this.releaseYear = releaseYear;
  }

  toString(): string {
    return `${this.author} : ${this.title} (${this.releaseYear})`;
  }
}
