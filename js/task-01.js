// 1.Зробити список категорій і список елементів querySelectorAll()
const categorieslist = document.querySelector('#categories');
const categoriesItems = categorieslist.querySelectorAll('.item');
// 2. Вивести кількість елементів в списку категорій
console.log(`Number of categories: ${categoriesItems.length}`);
// 3. Використати forEach() щоб знайти заголовок і кількість елементів
categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;
    // 4. Вивести в консоль
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
});
