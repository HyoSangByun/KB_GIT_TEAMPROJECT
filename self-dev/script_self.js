document.addEventListener('DOMContentLoaded', function () {
  const books = [
    {
      title: '듀얼 브레인',
      author: '이선 몰릭',
      price: '16,000원',
      image: 'https://image.yes24.com/goods/142876017/XL.jpg',
      url: 'https://www.yes24.com/product/goods/142876017',
    },
    {
      title: '행동하지 않으면 인생은 바뀌지 않는다',
      author: '브라이언 트레이시',
      price: '14,400원',
      image: 'https://image.yes24.com/goods/138282792/XL.jpg',
      url: 'https://www.yes24.com/product/goods/138282792',
    },
    {
      title: '어른의 품격을 채우는 100일 필사 노트',
      author: '김종원',
      price: '13,500원',
      image: 'https://image.yes24.com/goods/142687238/XL.jpg',
      url: 'https://www.yes24.com/product/goods/142687238',
    },
    {
      title: '살아갈 날들을 위한 괴테의 시',
      author: '김종원',
      price: '12,800원',
      image: 'https://image.yes24.com/goods/141253984/XL.jpg',
      url: 'https://www.yes24.com/product/goods/141253984',
    },
    {
      title: '이호선의 나이 들수록 : 관계편',
      author: '이호선',
      price: '15,000원',
      image: 'https://image.yes24.com/goods/142570394/XL.jpg',
      url: 'https://www.yes24.com/product/goods/142570394',
    },
  ];

  const bookContainer = document.getElementById('book-list');

  books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>🖋 저자: ${book.author}</p>
            <p>💰 가격: ${book.price}</p>
            <a href="${book.url}" target="_blank">Yes24에서 구매</a>
        `;
    bookContainer.appendChild(bookElement);
  });
});
