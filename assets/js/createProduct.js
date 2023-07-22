import { capitalizeFirstLetter, capitalizeWords } from "./checkCapitalize.js";
import checkPreco from "./checkPreco.js";
import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

function criaMensagemErro(elemento, mensagem) {
  elemento.innerHTML = "";

  if (mensagem) {
    const mensagemErroElemento = document.createElement("p");
    mensagemErroElemento.textContent = mensagem;
    elemento.appendChild(mensagemErroElemento);
  }
}

function validatePreco(preco) {
  const regex = /^\d+[\d.,]*$/;
  return regex.test(preco);
}

function validateImageUrl(url) {
  const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  return regex.test(url);
}

async function createProduct(event) {
  event.preventDefault();

  const titulo = document.querySelector("[data-titulo]").value;
  const preco = document.querySelector("[data-preco]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const descricao = document.querySelector("[data-descricao]").value;
  const imagemError = document.getElementById("urlError");
  const categoriaError = document.getElementById("categoriaError");
  const tituloError = document.getElementById("tituloError");
  const precoError = document.getElementById("precoError");
  const descricaoError = document.getElementById("descricaoError");

  criaMensagemErro(tituloError, "");
  criaMensagemErro(precoError, "");
  criaMensagemErro(imagemError, "");
  criaMensagemErro(categoriaError, "");
  criaMensagemErro(descricaoError, "");

  if (titulo.trim() === "") {
    criaMensagemErro(tituloError, "O campo titulo não pode ser vázio.");
    return;
  }
  if (preco.trim() === "") {
    criaMensagemErro(precoError, "O campo preço não pode ser vázio.");
    return;
  }
  if (imagem.trim() === "") {
    criaMensagemErro(imagemError, "O campo url não pode ser vázio.");
    return;
  }
  if (categoria.trim() === "") {
    criaMensagemErro(categoriaError, "O campo categoria não pode ser vázio.");
    return;
  }
  if (descricao.trim() === "") {
    criaMensagemErro(descricaoError, "O campo descrição não pode ser vázio.");
    return;
  }
  if (!validateImageUrl(imagem)) {
    criaMensagemErro(
      imagemError,
      "A url não é válida - `https://example.com/images/picture.type`."
    );
    return;
  }
  if (!validatePreco(preco)) {
    criaMensagemErro(precoError, "O preço não é válido.");
    return;
  }

  const tituloTemp = capitalizeWords(titulo);
  const precoTemp = checkPreco(preco);
  const imagemTemp = imagem;
  const categoriaTemp = capitalizeWords(categoria);
  const descricaoTemp = capitalizeFirstLetter(descricao);

  await connectApi.createProducts(
    tituloTemp,
    precoTemp,
    imagemTemp,
    categoriaTemp,
    descricaoTemp
  );

  window.location.href = "./all-products.html";
}

form.addEventListener("submit", (event) => createProduct(event));
