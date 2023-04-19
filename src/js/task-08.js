
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formObject = Object.fromEntries(formData.entries());

  if (!formObject.email || !formObject.password) {
    alert('All fields must be filled!');
    return;
  }

  console.log(formObject);
  loginForm.reset();
});
