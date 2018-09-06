'use strict';

import { Bookshelf } from './bookshelf';
import { Book } from './book';

// Create a Book class, that has an author, a title and a release year
// Create a constructor for setting those values
// Book should have an toString() method that returns a string in this format:
// Douglas Adams : The Hitchhiker's Guide to the Galaxy (1979)
// Create a Bookshelf class that has a list of books in it
// We should be able to add and remove books
// We should be able to query the favourite author (who has written the most books in the shelf)
// We should be able to query the earliest published books.
// We should be able to query the latest published books.
// Bookshelf should have an toString() method which give us information about the number of books, the earliest and the latest released books, and the favourite author 
let myShelf = new Bookshelf();
console.log(myShelf.toString());
// Should print out:
// You have no books here.
myShelf.add("Douglas Adams", "The Hitchhiker's Guide to the Galaxy", 1979);
myShelf.add("Douglas Adams", "Mostly Harmless", 1992);
myShelf.add("Frank Herbert", "Dune", 1965);
myShelf.add("Frank Herbert", "The Dragon in the Sea", 1957);
console.log(myShelf.remove("The Dragon in the Sea"));

console.log(myShelf.toString());
// Should print out:
// You have 3 books.
// Earliest released: Frank Herbert : Dune (1965)
// Latest released: Douglas Adams : Mostly Harmless (1992)
// Favourite author: Douglas Adams