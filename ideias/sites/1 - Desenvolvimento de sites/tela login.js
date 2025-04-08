
const toggleBox = document.querySelector('.toggle-box');
const loginBox = document.querySelector('.login-box');
const signupBox = document.querySelector('.signup-box');

toggleBox.addEventListener('click', () => {
  toggleBox.classList.toggle('active');
});