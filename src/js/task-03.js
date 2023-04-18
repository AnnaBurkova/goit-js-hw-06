// 1. Отримати посилання на список галереї
const galleryList = document.querySelector('.gallery');
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=320',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=320',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=320',
    alt: 'Group of Horses Running',
  },
];

// 2.Створюємо розмітку для зображень (лішку для кожного)
const galleryItems = images.map(({ url, alt }) => {
  return `
    <li class="gallery__item">
      <img src="${url}" alt="${alt}" class="gallery__image">
    </li>
  `;
  // 3.Робимо одну строку
}).join('') 

// 4.Добавляємо розмітку в список галереї
galleryList.insertAdjacentHTML(`beforeend`, galleryItems);