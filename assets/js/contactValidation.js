const dataBtn = document.querySelector("[data-form-btn]");
const nomeInput = document.getElementById("nome");
const mensagemInput = document.getElementById("mensagem");
const nomeError = document.getElementById("nomeError");
const mensagemError = document.getElementById("mensagemError");

// Cria elemento da mensagem
function criaMensagemErro(elemento, mensagem) {
  elemento.innerHTML = "";

  if (mensagem) {
    const mensagemErroElemento = document.createElement("p");
    mensagemErroElemento.textContent = mensagem;
    mensagemErroElemento.classList.add("error-message");
    elemento.appendChild(mensagemErroElemento);
  }
}

// Valida o nome
function validarNome() {
  const nome = nomeInput.value;

  criaMensagemErro(nomeError, "");

  if (nome.trim() === "") {
    criaMensagemErro(nomeError, "Por favor, preencha o campo Nome.");
    return false;
  }

  if (nome.length < 3 || nome.length > 40) {
    criaMensagemErro(
      nomeError,
      "O campo Nome deve ter entre 3 e 40 caracteres."
    );
    return false;
  }

  return true;
}

// Valida a mensagem
function validarMensagem() {
  const mensagem = mensagemInput.value;

  criaMensagemErro(mensagemError, "");

  if (mensagem.trim() === "") {
    criaMensagemErro(mensagemError, "Por favor, escreva sua mensagem.");
    return false;
  }

  if (mensagem.length < 5 || mensagem.length > 120) {
    criaMensagemErro(
      mensagemError,
      "O campo Mensagem deve ter entre 5 e 120 caracteres."
    );
    return false;
  }

  return true;
}

function validation(event) {
  event.preventDefault();

  const nomeValido = validarNome();
  const mensagemValida = validarMensagem();

  // Se todas as validações passarem
  if (nomeValido && mensagemValida) {
    alert("Formulário enviado com sucesso!");
    nomeInput.value = "";
    mensagemInput.value = "";
  }
}

nomeInput.addEventListener("blur", validarNome);
mensagemInput.addEventListener("blur", validarMensagem);
dataBtn.addEventListener("click", validation);
