const request = require('./request');
const store = require('./store');
const parser = require('./parser');

const scraper = () => {
  request()
    .then(document => parser(document))
    .then(books => store(books))
    .then(books => {
      console.log(books.length);
      return books;
    });
};

scraper();

module.exports = scraper;
