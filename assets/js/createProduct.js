import { capitalizeFirstLetter, capitalizeWords } from './checkCapitalize.js';
import checkPreco from "./checkPreco.js";
import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function createProduct(event) {
  event.preventDefault();

  const titulo = capitalizeWords(document.querySelector("[data-titulo]").value);
  const preco = checkPreco(document.querySelector("[data-preco]").value);
  const imagem = document.querySelector("[data-imagem]").value;
  const categoria = capitalizeWords(document.querySelector("[data-categoria]").value);
  const descricao = capitalizeFirstLetter(document.querySelector("[data-descricao]").value);

  await connectApi.createProducts(
    titulo,
    preco,
    imagem,
    categoria,
    descricao
  );
  window.location.href = "../../pages/all-products.html";
}

form.addEventListener("submit", (event) => createProduct(event));
