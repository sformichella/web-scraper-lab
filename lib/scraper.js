const request = require('./request');
const store = require('./store');
const parser = require('./parser');



request()
  .then(document => parser(document))
  .then(books => store(books))
  .then(res => console.log(res));
