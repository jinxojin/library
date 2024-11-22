const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.hasRead ? "finished reading." : "hasn't read yet."
    }`;
  };
}

function addBookToLibrary(title, author, pages, hasRead) {
  myLibrary.push(new Book(title, author, pages, hasRead));
}

addBookToLibrary("The Alchemist", "Paulu Coelho", "84", true);
console.log(myLibrary[0].info());
