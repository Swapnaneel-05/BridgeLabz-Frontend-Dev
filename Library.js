class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log("Book already issued!");
    } else {
      this.isIssued = true;
      console.log(`Book "${this.title}" issued successfully.`);
    }
  }

  returnBook() {
    if (!this.isIssued) {
      console.log("Book was not issued.");
    } else {
      this.isIssued = false;
      console.log(`Book "${this.title}" returned successfully.`);
    }
  }
}
const library = [
  new Book("Atomic Habits", "James Clear", "ISBN001"),
  new Book("Clean Code", "Robert Martin", "ISBN002"),
  new Book("The Alchemist", "Paulo Coelho", "ISBN003"),
  new Book("DSA Handbook", "Narasimha Karumanchi", "ISBN004")
];


console.log("Available Books:");
library
  .filter(book => !book.isIssued)
  .forEach(book => console.log(`${book.title} (${book.isbn})`));


function issueByISBN(isbn) {
  const book = library.find(b => b.isbn === isbn);

  if (!book) {
    console.log("Book not found.");
  } else {
    book.issueBook();
  }
}

// Example:
issueByISBN("ISBN002");
