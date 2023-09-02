

class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
}


class Library {
  books = [];
  anchor = document.querySelector("#anchor");

  displayAllBooks() {
    for (const book of this.books) {
      this.createCard(book);
    }
  }
  
  resetBookCards() {
    this.anchor.textContent = '';
    this.displayAllBooks();
  }

  
  displayLibrary (){
    myLibrary.forEach(createCard)
  }

  createCard(book) {
    const col = document.createElement("div");
    col.className = "col";
    col.id = String(book.title);

    const card = document.createElement("div")
    if (book.read === "true")  {
      card.className = "card text-center border-info";
    } else {
    card.className = "card text-center border-danger";
    }
    card.appendChild(this.buildCardHeader(book));
    card.appendChild(this.buildCardBody(book));
    card.appendChild(this.buildCardFooter(book));
    col.appendChild(card);
    anchor.appendChild(col);
  }

  buildCardHeader(book) {
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";

    const headerIcon = document.createElement("i");
    headerIcon.className = (book.read === "true") ? "bi bi-check-lg text-info" : "bi bi-x-lg text-danger";

    const headerText = document.createElement("span");
    headerText.innerText = " Read";
    cardHeader.appendChild(headerIcon);
    cardHeader.appendChild(headerText);

    return cardHeader;
  }

  buildCardBody(book)  {
    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h3");
    title.innerText = book.title;
    body.appendChild(title);

    const author = document.createElement("p");
    author.innerText = book.author;
    body.appendChild(author);

    return body;

  }

  buildReadButton(book) {
    const readButton = document.createElement("a");
    readButton.className = "btn btn-dark card-link";
    readButton.innerText = (book.read === "true") ? "Mark Unread" : "Mark Read";
  
    readButton.addEventListener('click', () => {
      const bookIndex = this.findBookIndex(book.title);
      const targetBook = this.books.at(bookIndex)
      targetBook.read = (targetBook.read === "true") ? "false" : "true";
      this.resetBookCards();
    })
  
    return readButton;
  }
  buildCardFooter(book) {
    const footer = document.createElement("div");
    footer.className = "card-footer text-muted";
    footer.innerText = book.pages + " pages";

    return footer

  }

  addBook () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = (document.getElementById("read").checked) ? "true" : "false";

    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    this.books.push(newBook);
    this.createCard(newBook);
  }
}

let modal = document.querySelector("#bookModal")

function openModal() {
  modal.style.display = "flex";

}

function closeModal() {
  modal.style.display = "none";
}



const myLibrary = new Library();


const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "false");
// const Shogun = new Book("Shogun", "James Clavell", 950, "true");
// myLibrary.addBook(theHobbit);
// myLibrary.addBook(Shogun);

const bookForm = document.getElementById("book-form");

bookForm.addEventListener('submit', e => {
  e.preventDefault();
  addBookToLibrary();
  e.target.reset();
  closeModal();
});

const addBookToLibrary = () => {
  myLibrary.addBook();
};




