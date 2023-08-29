let myLibrary = []
let newBook





function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  const status = read == "N" ? "not read yet" : "read"

  this.info = function() {
    return title + " by " + author + ", " + pages + " pages, " + status
  }
}

function addBookToLibrary () {
  title = prompt("What is the title of the book?")
  author = prompt("Who is the author?")
  pages = prompt("How long is the book?")
  read = prompt("Have you read this book? ('Y' or 'N'")

  newBook = new Book(title, author, pages, read)
  console.log(newBook)
  myLibrary.push(newBook)
  return this.title + " has been added to the library"
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "N")
const Shogun = new Book("Shogun", "James Clavell", 950, "Y")
console.log(theHobbit.info());
console.log(Shogun.info());
myLibrary.push(theHobbit)
myLibrary.push(Shogun)
