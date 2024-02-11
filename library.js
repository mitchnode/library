const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + ((read) ? "Read" : "not read yet");
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function getBooks() {
    myLibrary.forEach(book => {
        // return book object as array of strings
        //(Format for display on page)
    });
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());