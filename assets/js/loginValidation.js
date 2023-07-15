const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const emailError = document.getElementById("emailError");
const senhaError = document.getElementById("senhaError");
const loginBtn = document.getElementById("login__btn");

// Cria mensagem de erro
function criaMensagemErro(elemento, mensagem) {
  elemento.innerHTML = "";

  if (mensagem) {
    const mensagemErroElemento = document.createElement("p");
    mensagemErroElemento.textContent = mensagem;
    elemento.appendChild(mensagemErroElemento);
  }
}

// Valida email com regex
function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

// Valida formulario
function validarFormulario(event) {
  event.preventDefault();

  const email = emailInput.value;
  const senha = senhaInput.value;

  criaMensagemErro(emailError, "");
  criaMensagemErro(senhaError, "");

  // Verifica se o email é valido
  if (!validarEmail(email)) {
    criaMensagemErro(
      emailError,
      "Por favor, insira um endereço de e-mail válido."
    );
    return;
  }

  // Verifica se a senha é valida
  if (senha.trim() === "") {
    criaMensagemErro(senhaError, "Por favor, insira sua senha.");
    return;
  }

  // Verifica se o email esta correto
  if (email !== "test@test.com") {
    criaMensagemErro(senhaError, "Usuário não cadastrado.");
    return;
  }

  // Verifica se a senha esta correto
  if (senha !== "test") {
    criaMensagemErro(senhaError, "Senha incorreta.");
    return;
  }

  window.location.href = "./all-products.html";
}

loginBtn.addEventListener("click", validarFormulario);
