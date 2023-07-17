const urlInput = document.querySelector("[data-imagem]");
const categoriaInput = document.querySelector("[data-categoria]");
const tituloInput = document.querySelector("[data-titulo]");
const precoInput = document.querySelector("[data-preco]");
const descricaoInput = document.querySelector("[data-descricao]");
const urlError = document.getElementById("urlError");
const categoriaError = document.getElementById("categoriaError");
const tituloError = document.getElementById("tituloError");
const precoError = document.getElementById("precoError");
const descricaoError = document.getElementById("decricaoError");
const createProductBtn = document.getElementById("product__btn");

// Cria mensagem de erro
function criaMensagemErro(elemento, mensagem) {
  elemento.innerHTML = "";

  if (mensagem) {
    const mensagemErroElemento = document.createElement("p");
    mensagemErroElemento.textContent = mensagem;
    elemento.appendChild(mensagemErroElemento);
  }
}

// Valida o campo de preço para aceitar apenas números, pontos ou vírgulas
function validarPreco(valor) {
  const precoRegex = /^[0-9,.]+$/;
  return precoRegex.test(valor);
}

// Valida o formulário
function validarFormulario(event) {
  event.preventDefault();

  // Limpa mensagens de erro anteriores
  criaMensagemErro(urlError, "");
  criaMensagemErro(categoriaError, "");
  criaMensagemErro(tituloError, "");
  criaMensagemErro(precoError, "");
  criaMensagemErro(descricaoError, "");

  // Validação do campo de URL (imagem)
  if (urlInput.value.trim() === "") {
    criaMensagemErro(urlError, "O campo URL não pode ficar vazio.");
  }

  // Validação do campo de categoria
  if (categoriaInput.value.trim() === "") {
    criaMensagemErro(categoriaError, "O campo Categoria não pode ficar vazio.");
  }

  // Validação do campo de título
  if (tituloInput.value.trim() === "") {
    criaMensagemErro(tituloError, "O campo Título não pode ficar vazio.");
  }

  // Validação do campo de preço
  const precoValue = precoInput.value.trim();
  if (precoValue === "") {
    criaMensagemErro(precoError, "O campo Preço não pode ficar vazio.");
  } else if (!validarPreco(precoValue)) {
    criaMensagemErro(precoError, "O campo Preço deve conter apenas números, pontos (.) ou vírgulas (,).");
  }

  // Validação do campo de descrição
  if (descricaoInput.value.trim() === "") {
    criaMensagemErro(descricaoError, "O campo Descrição não pode ficar vazio.");
  }

  // Se todos os campos estiverem preenchidos corretamente, redireciona para a página de produtos
  if (urlError.innerHTML === "" && categoriaError.innerHTML === "" && tituloError.innerHTML === "" && precoError.innerHTML === "" && descricaoError.innerHTML === "") {
    return true; // Retorna true para indicar que o formulário é válido
  }

  return false; // Retorna false se houver algum erro no formulário
}

createProductBtn.addEventListener("click", () => {
  if (validarFormulario()) {
    createProduct();
  }
});
