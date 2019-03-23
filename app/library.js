class Library {
  constructor(books) {
    this.books = books;
  }

  add(title, ISBN, author) {
    const newBook = {name:title, ISBN:ISBN, author:author, available:true };
    this.books.push (newBook)
  }
}

module.exports = Library