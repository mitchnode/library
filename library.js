const cards = document.getElementById("cards");
const container = document.getElementById("container");
const addButton = document.getElementById("addBook");

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const dialog = document.createElement("dialog");
    dialog.id = "addDialog";
    const heading = document.createElement("h5");
    heading.textContent = "Add a book to the library";

    const titleSpan = document.createElement("span");
    const titleInput = document.createElement("input");
    titleInput.name = "title";
    titleInput.id = "title";
    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title";
    titleLabel.textContent = "Title";
    const authorSpan = document.createElement("span");
    const authorInput = document.createElement("input");
    authorInput.name = "author";
    authorInput.id = "author";
    const authorLabel = document.createElement("label")
    authorLabel.htmlFor = "author"
    authorLabel.textContent = "Author";
    const pagesSpan = document.createElement("span");
    const pagesInput = document.createElement("input");
    pagesInput.name = "pages";
    pagesInput.id = "pages";
    const pagesLabel = document.createElement("label")
    pagesLabel.htmlFor = "pages";
    pagesLabel.textContent = "Pages";
    const readSpan = document.createElement("span");
    const readInput = document.createElement("input");
    readInput.name = "read";
    readInput.id = "read";
    const readLabel = document.createElement("label")
    readLabel.htmlFor = "read";
    readLabel.textContent = "Read?";
    readInput.type = "checkbox";
    const add = document.createElement("button");
    add.textContent = "Add";
    add.addEventListener("click", (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const author = authorInput.value;
        const pages = pagesInput.value;
        const read = readInput.checked;
        addBookToLibrary(title,author,pages,read);
        getBooks();
        dialog.remove();
    });

    dialog.appendChild(heading);
    dialog.appendChild(titleSpan);
    titleSpan.appendChild(titleLabel);
    titleSpan.appendChild(titleInput);
    dialog.appendChild(authorSpan);
    authorSpan.appendChild(authorLabel);
    authorSpan.appendChild(authorInput);
    dialog.appendChild(pagesSpan);
    pagesSpan.appendChild(pagesLabel);
    pagesSpan.appendChild(pagesInput);
    dialog.appendChild(readSpan);
    readSpan.appendChild(readLabel);
    readSpan.appendChild(readInput);
    dialog.appendChild(add);
    
    container.appendChild(dialog);

    dialog.showModal();
})

const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._read = read;
    }

    get read() {
        return this._read;
    }

    set read(value) {
        this._read = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get pages() {
        return this._pages;
    }

    set pages(value) {
        this._pages = value;
    }
    
    

    
   

    addToLibrary() {
        myLibrary.push(this);
    }

    generateCard() {
        const card = document.createElement("div");
        
        card.className = "card";
        cards.appendChild(card);
        const titletext = document.createElement("p");
        const authortext = document.createElement("p");
        const pagestext = document.createElement("p");
        const readtext = document.createElement("p");
        const titlespan = document.createElement("span");
        const authorspan = document.createElement("span");
        const pagespan = document.createElement("span");
        const readspan = document.createElement("span");
        const deleteButton = document.createElement("button");
        const readButton = document.createElement("button");
        deleteButton.id = "delete";
        deleteButton.textContent = "Delete";
        readButton.id = "read";
        readButton.textContent = "Read";
        card.id = myLibrary.map(e => e.title).indexOf(this.title);

        deleteButton.addEventListener("click", (e) => {
            myLibrary.splice(card.id, 1);
            getBooks();
        })

        readButton.addEventListener("click", (e) => {
            if(this.read){
                this.read = false;
                readtext.textContent = this.read;
                readButton.textContent = "Read";
                console.log(myLibrary);
            } else {
                this.read = true;
                readtext.textContent = this.read;
                readButton.textContent = "Unread";
                console.log(myLibrary);
            }
        })


        titlespan.className = "field_name";
        authorspan.className = "field_name";
        pagespan.className = "field_name";
        readspan.classList = "field_name read_flag";
        titlespan.textContent = "Title: ";
        authorspan.textContent = "Author: ";
        pagespan.textContent = "Pages: ";
        titletext.textContent = this.title;
        authortext.textContent = this.author;
        pagestext.textContent = this.pages;
        readtext.textContent = ((this.read) ? "Read" : "Unread");
        card.appendChild(titlespan);
        card.appendChild(titletext);
        card.appendChild(authorspan);
        card.appendChild(authortext);
        card.appendChild(pagespan);
        card.appendChild(pagestext);
        card.appendChild(readspan);
        readspan.appendChild(readtext);
        card.appendChild(deleteButton);
        card.appendChild(readButton);
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);
    console.log(book);
}

function getBooks() {
    // Need to clear books to refresh them
    cards.innerHTML = "";
    myLibrary.forEach(book => {
          book.generateCard();
    });
}



addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hitchhikers Guide to the Galaxy", "Douglas Adams", 342, true);
addBookToLibrary("The Magician", "Raymond E. Fiest", 580, true);

getBooks();