
let counterValue = 0;
  const valueEl = document.getElementById('value');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const decrementButton = document.querySelector('[data-action="decrement"]');

  incrementButton.addEventListener('click', () => {
    counterValue+=1;
    valueEl.textContent = counterValue;
  });

  decrementButton.addEventListener('click', () => {
    counterValue-=1;
    valueEl.textContent = counterValue;
  });