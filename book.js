let newBook

class Book {
constructor(title, author, pages, read=False) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  const status = read == False ? "not read yet" : "read"
  }
}
class Library {
  myLibrary = [];
  anchor = document.querySelector(#anchor);

  addBookToLibrary () {
    const title = prompt("What is the title of the book?")
    const author = prompt("Who is the author?")
    const pages = prompt("How long is the book?")
    // read = prompt("Have you read this book? ('Y' or 'N'")

    newBook = new Book(title, author, pages, read)
    console.log(newBook)
    myLibrary.push(newBook)
    return this.title + " has been added to the library"
  }

  const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "N")
  const Shogun = new Book("Shogun", "James Clavell", 950, )
  console.log(theHobbit.info());
  console.log(Shogun.info());
  myLibrary.push(theHobbit)
  myLibrary.push(Shogun)

  function displayLibrary (){
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

  buildCardHeader (book) {
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




}
