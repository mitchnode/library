const cards = document.getElementById("cards");

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readinfo = function() {
        return ((read) ? "Read" : "Not Read Yet");
    }
    this.generateCard = function() {
        const card = document.createElement("div");
        card.className = "card";
        cards.appendChild(card);
        const titletext = document.createElement("p");
        const authortext = document.createElement("p");
        const pagestext = document.createElement("p");
        const readtext = document.createElement("p");
        titletext.textContent = "Title: " + this.title;
        authortext.textContent = "Author: " + this.author;
        pagestext.textContent = "Pages: " + this.pages;
        readtext.textContent = this.readinfo();
        card.appendChild(titletext);
        card.appendChild(authortext);
        card.appendChild(pagestext);
        card.appendChild(readtext);
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function getBooks() {
    myLibrary.forEach(book => {
          book.generateCard();
    });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hitchhikers Guide to the Galaxy", "Douglas Adams", 342, true);
addBookToLibrary("The Magician", "Raymond E. Fiest", 580, true);

getBooks();