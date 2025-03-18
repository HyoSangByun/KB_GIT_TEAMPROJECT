const books = [
  // 전민희 작가 - 룬의 아이들 윈터러 (권별)
  {
    title: '룬의 아이들 - 윈터러 1',
    author: '전민희',
    price: '13,500원',
    link: 'https://www.yes24.com/Product/Goods/...', // 실제 URL
  },
  {
    title: '룬의 아이들 - 윈터러 2',
    author: '전민희',
    price: '13,500원',
    link: 'https://www.yes24.com/Product/Goods/...', // 실제 URL
  },
  // ... 윈터러 나머지 권 ...

  // 전민희 작가 - 룬의 아이들 데모닉 (권별)
  {
    title: '룬의 아이들 - 데모닉 1',
    author: '전민희',
    price: '14,000원',
    link: 'https://www.yes24.com/Product/Goods/...', // 실제 URL
  },
  {
    title: '룬의 아이들 - 데모닉 2',
    author: '전민희',
    price: '14,000원',
    link: 'https://www.yes24.com/Product/Goods/...', // 실제 URL
  },
  // ... 데모닉 나머지 권 ...
  {
    title: '룬의 아이들 - 블러디드 1',
    author: '전민희',
    price: '14,500원',
    link: 'https://www.yes24.com/Product/Goods/...', // 실제 URL
  },
  {
    title: '룬의 아이들 - 블러디드 2',
    author: '전민희',
    price: '14,500원',
    link: 'https://www.yes24.com/Product/Goods/...', // 실제 URL
  },
  // 기존 도서
  {
    title: '해리 포터와 마법사의 돌',
    author: 'J.K. 롤링',
    price: '12,000원',
    link: 'https://www.yes24.com/Product/Goods/1234567', // 실제 Yes24 URL로 변경
  },
  {
    title: '반지의 제왕',
    author: 'J.R.R. 톨킨',
    price: '15,000원',
    link: 'https://www.yes24.com/Product/Goods/7654321', // 실제 Yes24 URL로 변경
  },
  // 이영도 작가 - 드래곤 라자 (Yes24 검색 후 URL 추가)
  {
    title: '드래곤 라자',
    author: '이영도',
    price: '13,000원',
    link: 'https://www.yes24.com/Product/Goods/...', // 실제 URL
  },
  //추가
  {
    title: '눈물을 마시는 새',
    author: '이영도',
    price: '16,000원',
    link: 'https://www.yes24.com/Product/Goods/...',
  },
  {
    title: '피를 마시는 새',
    author: '이영도',
    price: '16,000원',
    link: 'https://www.yes24.com/Product/Goods/...',
  },
  {
    title: '오버 더 초이스',
    author: '전민희',
    price: '16,000원',
    link: 'https://www.yes24.com/Product/Goods/...',
  },
  {
    title: '세월의 돌',
    author: '전민희',
    price: '16,000원',
    link: 'https://www.yes24.com/Product/Goods/...',
  },
  {
    title: '태양의 탑',
    author: '전민희',
    price: '16,000원',
    link: 'https://www.yes24.com/Product/Goods/...',
  },

  // 다른 판타지 소설 추가 (선택)
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
