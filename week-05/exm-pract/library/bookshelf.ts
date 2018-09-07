import { Book } from "./book";

export class Bookshelf {
  public books: Book[];

  constructor() {
    this.books = [];
  }

  add(author, title, releaseYear) {
    this.books.push(new Book(author, title, releaseYear));
  }

  remove(title: string) {
    let newList: Book[] = [];
    for (let index = 0; index < this.books.length; index++) {
      if (this.books[index].title !== title) { //ha nem tartalmazza a tömb az xy című könyvet, akkor push newList
        newList.push(this.books[index]);
      }
    } this.books = newList;
    return this.books;
  }

  // We should be able to query the favourite author (who has written the most books in the shelf)

  favouriteAuthor(): string {
    let authorList: string[] = [];
    for (let index = 0; index < this.books.length; index++) {
      authorList.push(this.books[index].author); //authorList a modusznak
    } return this.modusz(authorList);
  }

  private modusz(authorOfBooks): string { //leggyakoribb elem módusszal stringes
    let maxValue: string = '';
    let maxCount: number = 0;
    let n = authorOfBooks.length;
    for (let i = 0; i < n; i++) {
      let count: number = 0;
      for (let j = 0; j < n; j++)
        if (authorOfBooks[j] == authorOfBooks[i])
          count++;
      if (count > maxCount) {
        maxCount = count;
        maxValue = authorOfBooks[i];
      }
    }
    return maxValue;
  }

  yearOfBooks(): number[] {
    let yearOfBooks: number[] = [];
    for (let index = 0; index < this.books.length; index++) {
      yearOfBooks.push(this.books[index].releaseYear);
    } return yearOfBooks;
  }

  findByYear(releaseYear): Book {
    for (let index = 0; index < this.books.length; index++) {
      if (this.books[index].releaseYear === releaseYear) {
        return this.books[index];
      }
    }
  }

  earliestBook(): Book {
    return this.findByYear(Math.min(...this.yearOfBooks()));
  }

  latestBook(): Book {
    return this.findByYear(Math.max(...this.yearOfBooks()));
  }

  toString(): string {
    if (this.books.length === 0) {
      return 'You have no books here';
    }

    return 'You have ' + this.books.length + ' books' + '\n'
      + 'Earliest released: ' + this.earliestBook() + '\n'
      + 'Latest released: ' + this.latestBook() + '\n'
      + 'Favourite author: ' + this.favouriteAuthor();
  }
}
