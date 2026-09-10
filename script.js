const library = document.querySelector("#library");
const form = document.querySelector("#form");

const newBook = document.createElement("button");
const title = document.createElement("h1");
const popUp = document.createElement("dialog");

library.classList.add("library");
newBook.classList.add("new-book");
title.classList.add("title");
popUp.classList.add("pop-up");

title.textContent = "Ella's Library";
newBook.textContent = "New Book!";

form.appendChild(title);
form.appendChild(newBook);
form.appendChild(popUp);

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if(this.read) {
        return `${this.title} by ${this.author}, ${this.pages}, read`;
    } else {
        return `${this.title} by ${this.author}, ${this.pages}, not yet read`;
    }
  };
}

function AddBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

function DisplayBooks() {
    for(let i=0; i<myLibrary.length; i++) {
        const book = myLibrary[i];

        const bookDisplay = document.createElement("div");

        bookDisplay.innerHTML = `
        <p>${book.info()}</p>
        `;

        bookDisplay.classList.add("book-card");
        library.appendChild(bookDisplay);
    }
}

const myLibrary = [];

AddBook("The Hobbit", "J.R.R. Tolkien", 295, false);
AddBook("Harry Potter", "J.K. Rowling", 400, true);
AddBook("Red Rising", "Pierce Brown", 600, true);

DisplayBooks();