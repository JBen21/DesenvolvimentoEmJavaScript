
const toggleBox = document.querySelector('.toggle-box');
const recoverPasswordBtn = document.querySelector('.recover-password-btn');
const backToLoginBtn = document.querySelector('.back-to-login-btn');

recoverPasswordBtn.addEventListener('click', (e) => {
  if (e.target === recoverPasswordBtn) {
    toggleBox.classList.add('active');
  }
});

backToLoginBtn.addEventListener('click', (e) => {
  if (e.target === backToLoginBtn) {
    toggleBox.classList.remove('active');
  }
});
