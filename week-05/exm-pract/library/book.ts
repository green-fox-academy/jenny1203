import { Bookshelf } from "./bookshelf";

export class Book {
  public author: string;
  public title: string;
  public releaseYear: number;

  constructor(author, title, releaseYear) {
    this.author = author;
    this.title = title;
    this.releaseYear = releaseYear;
  }

  toString(): string {
    return `${this.author} : ${this.title} (${this.releaseYear})`;
  }
}
