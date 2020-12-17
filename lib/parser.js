const numberRating = require('./utils/starsToNumber');

module.exports = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => {
    return {
      title: book.querySelector('h3 a').title,
      coverImage: book.querySelector('.image_container a img').src,
      rating: numberRating([...book.querySelector('.star-rating').classList][1]),
      price: book.querySelector('.product_price .price_color').textContent,
      inStock: [...book.querySelector('.availability').classList].includes('instock')
    };
  });
};
