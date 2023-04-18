
// 1. Отримати посилання на список інгрідієнтів
const ingredientsList = document.querySelector('#ingredients');
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 2. Створити новий массив
const ingredientsItems = ingredients.map(ingredient => {
  // 3. Створити новий елемент Li з тесктом і класом item
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

// 4. Добавити всі лішки в список інгридієнтів
ingredientsList.append(...ingredientsItems);