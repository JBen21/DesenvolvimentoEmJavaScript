function enviarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && mensagem) {
      alert("Formulário enviado com sucesso!");
  } else {
      alert("Por favor, preencha todos os campos.");
  }
}
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
