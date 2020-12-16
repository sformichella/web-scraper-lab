const request = require('./request');
const store = require('./store');
const parser = require('./parser');

module.exports = () => {
  return request()
    .then(document => parser(document))
    .then(books => store(books));
};
