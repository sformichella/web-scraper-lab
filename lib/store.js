const Book = require('./models/book');


module.exports = async(books) => {
  const myBooks = await Promise.all(books.map(book => Book.insert(book)));

  return myBooks;
};
