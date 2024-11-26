const title = document.getElementById("input-title");
const author = document.getElementById("input-author");
const pages = document.getElementById("input-pages");
const checkbox = document.getElementById("input-check");
const button = document.getElementById("input-btn");

const table = document.getElementById("table-library");

const myLibrary = [];

// Book constructor function
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

// Add a book to the library
function addBookToLibrary(title, author, pages, hasRead) {
  myLibrary.push(new Book(title, author, pages, hasRead));
}

// Display only the newly added book to the table
function displayBookToTable(book, index) {
  const row = document.createElement("tr");
  row.id = `book-${index}`;
  row.className = "row";

  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>
        <input id="input-${index}" class="check-button" type="checkbox" ${
    book.hasRead ? "checked" : ""
  } />
    </td>
    <td><button id="remove-${index}" class="remove-book">Remove</button></td>
  `;

  table.appendChild(row);

  // Add event listener to the "Remove" button
  const removeButton = row.querySelector(".remove-book");
  removeButton.addEventListener("click", () => {
    removeBookFromLibrary(index);
  });
  // Add event listener to the "Check" button
  const checkButton = row.querySelector(".check-button");
  checkButton.addEventListener("click", () => {
    checkReadStatus(index);
  });
}

// Remove a book from the library
function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1); // Remove the book from the array

  // Remove all rows and re-render
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => row.remove());

  // Re-render the table
  myLibrary.forEach((book, i) => {
    displayBookToTable(book, i); // Update the table with correct indices
  });
}

function checkReadStatus(index) {
  if (myLibrary[index].hasRead) {
    myLibrary[index].hasRead = false;
  } else {
    myLibrary[index].hasRead = true;
  }
}

// Event listener for the "Add Book" button
button.addEventListener("click", () => {
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookPages = pages.value;
  const bookHasRead = checkbox.checked;

  if (!bookTitle || !bookAuthor || !bookPages) {
    alert("Please fill in all fields!");
    return;
  }

  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookHasRead);
  const newBookIndex = myLibrary.length - 1; // Get the index of the newly added book
  displayBookToTable(myLibrary[newBookIndex], newBookIndex);

  // Clear the form fields after adding
  title.value = "";
  author.value = "";
  pages.value = "";
  checkbox.checked = false;
});
