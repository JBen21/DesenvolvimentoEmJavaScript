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



