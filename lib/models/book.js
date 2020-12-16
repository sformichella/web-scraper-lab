const pool = require('../utils/pool');
const fileSystem = require('fs').promises;

module.exports = class Book {
  id;
  title;
  coverImage;
  rating;
  price;
  inStock;

  constructor({ id, title, coverImage, rating, price, inStock }) {
    this.id = id;
    this.title = title;
    this.coverImage = coverImage;
    this.rating = rating;
    this.price = price;
    this.inStock = inStock;
  }

  static async insert(book) {
    const { title, coverImage, rating, price, inStock } = book;

    const { rows } = await pool.query(`
      INSERT INTO books (title, cover_image, rating, price, in_stock)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `, [title, coverImage, rating, price, inStock]);

    return new Book(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query(`
      SELECT * FROM books
    `);

    return rows.map(book => new Book(book));
  }

  static async findById(id) {
    const { rows } = await pool.query(`
      SELECT * FROM books
      WHERE id = $1
    `, [id]);

    return new Book(rows[0]);
  }

  static async blowUpData() {
    const setupSQL = await fileSystem.readFile('./sql/setup.sql', 'utf-8');

    await pool.query(setupSQL);
  }
};
