module.exports = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => {
    return {
      title: book.querySelector('h3 a').textContent,
      coverImage: book.querySelector('.image_container a img').src,
      rating: [...book.querySelector('.star-rating').classList][1],
      price: book.querySelector('.product_price .price_color').textContent,
      inStock: [...book.querySelector('.availability').classList].includes('instock')
    };
  });
};
