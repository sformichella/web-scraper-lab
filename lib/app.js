const express = require('express');
const app = express();

const Book = require('./models/book');

const scraper = require('./scraper');

app.use(express.json());

app.post('/api/books', async(req, res) => {
  const numberOfBooks = await scraper();

  res.send(numberOfBooks);
});

app.delete('/api/books', (req, res) => {
  Book.blowUpData();

  res.send({ message: 'No more data!' });
});

module.exports = app;
