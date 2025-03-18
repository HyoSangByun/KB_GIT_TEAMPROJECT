const books = [
  {
    title: '해리 포터와 마법사의 돌',
    author: 'J.K. 롤링',
    price: '12,000원',
    link: 'https://www.yes24.com/Product/Goods/1234567', // Yes24 상품 URL
  },
  {
    title: '반지의 제왕',
    author: 'J.R.R. 톨킨',
    price: '15,000원',
    link: 'https://www.yes24.com/Product/Goods/7654321',
  },
  // ... 추가 책 정보 ...
];

const bookList = document.getElementById('book-list');

books.forEach((book) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <a href="${book.link}" target="_blank">
      <h2>${book.title}</h2>
      <p class="author">${book.author}</p>
      <p class="price">${book.price}</p>
    </a>
  `;
  bookList.appendChild(listItem);
});
