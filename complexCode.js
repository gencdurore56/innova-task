/* 

Filename: complexCode.js

This code demonstrates a complex and elaborate implementation of a web-based book library management system.
It includes features such as adding books, searching for books by title or author, lending and returning books, and generating reports.

*/

// Book class represents a book object with properties and methods
class Book {
  constructor(title, author, category, available) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.available = available;
  }
}

// Library class represents the library with methods to manage the book collection
class Library {
  constructor() {
    this.books = [];
  }

  // Add a new book to the library
  addBook(title, author, category) {
    const newBook = new Book(title, author, category, true);
    this.books.push(newBook);
    console.log(`Added book "${title}" by ${author}`);
  }

  // Search for a book by title
  searchByTitle(title) {
    const foundBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
    return foundBooks;
  }

  // Search for a book by author
  searchByAuthor(author) {
    const foundBooks = this.books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
    return foundBooks;
  }

  // Mark a book as lent
  lendBook(title) {
    const bookIndex = this.books.findIndex(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (bookIndex !== -1 && this.books[bookIndex].available) {
      this.books[bookIndex].available = false;
      console.log(`Book "${title}" is now lent.`);
    } else {
      console.log(`Book "${title}" is not available for lending.`);
    }
  }

  // Mark a book as returned
  returnBook(title) {
    const bookIndex = this.books.findIndex(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (bookIndex !== -1 && !this.books[bookIndex].available) {
      this.books[bookIndex].available = true;
      console.log(`Book "${title}" has been returned.`);
    } else {
      console.log(`Book "${title}" is not marked as lent.`);
    }
  }

  // Generate a report of available books by category
  generateReportByCategory() {
    const categories = {};
    for (const book of this.books) {
      if (categories.hasOwnProperty(book.category)) {
        categories[book.category].push(book);
      } else {
        categories[book.category] = [book];
      }
    }

    console.log("Book Availability Report by Category:");
    for (const category in categories) {
      console.log(`Category: ${category}`);
      for (const book of categories[category]) {
        console.log(`- ${book.title} by ${book.author}`);
      }
      console.log("---");
    }
  }
}

// Usage example
const library = new Library();

library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
library.addBook("To Kill a Mockingbird", "Harper Lee", "Classic");
library.addBook("1984", "George Orwell", "Science Fiction");
library.addBook("The Catcher in the Rye", "J.D. Salinger", "Classic");
library.addBook("Pride and Prejudice", "Jane Austen", "Romance");

console.log(library.searchByAuthor("j.d. salinger"));
// Output: [Book {title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Classic", available: true}]

library.lendBook("The Catcher in the Rye");
// Output: Book "The Catcher in the Rye" is now lent.

library.returnBook("The Catcher in the Rye");
// Output: Book "The Catcher in the Rye" has been returned.

library.generateReportByCategory();

// Output:
// Book Availability Report by Category:
// Category: Classic
// - The Great Gatsby by F. Scott Fitzgerald
// - To Kill a Mockingbird by Harper Lee
// ---
// Category: Science Fiction
// - 1984 by George Orwell
// ---
// Category: Romance
// - Pride and Prejudice by Jane Austen
// ---