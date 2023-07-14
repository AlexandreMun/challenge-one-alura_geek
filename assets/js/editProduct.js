import { connectApi } from "./connectApi.js";

const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get("id");
const formData = document.querySelector("[data-edit");

// Cria formulario com os dados do produto
function createForm(titulo, preco, imagem, categoria, descricao) {
  const form = document.createElement("form")
  form.className = "form__product"
  form.innerHTML = `
    <h2 class="product__title">Editar produto</h2>
    <div class="product__area">
      <input class="product__area__input" type="text" id="nome" value="${imagem}" data-imagem required />
      <span>URL da imagem</span>
    </div>
    <div class="product__area">
      <input class="product__area__input" type="text" id="nome" value="${categoria}" data-categoria required />
      <span>Categoria</span>
    </div>
    <div class="product__area">
      <input class="product__area__input" type="text" id="nome" value="${titulo}" data-titulo required />
      <span>Nome do produto</span>
    </div>
    <div class="product__area">
      <input class="product__area__input" type="text" id="nome" value="${preco}" data-preco required />
      <span>Preço do produto</span>
    </div>
    <div class="product__area">
      <textarea
        class="product__area__textarea"
        rows="5"
        cols="40"
        id="mensagem"
        name="mensagem"
        data-descricao
        required
      >${descricao}</textarea>
      <span>Descrição do produto</span>
    </div>
    <button class="product__btn" id="product__btn" type="submit">Editar produto</button>
  `
}

// Edita o produto
async function editProduct(event) {
  event.preventDefault();

  const titulo = document.querySelector("[data-titulo]").value;
  const preco = document.querySelector("[data-preco]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const descricao = document.querySelector("[data-descricao]").value;

  // Envia os dados para editar o produto
  await connectApi.editProducts(idUrl, titulo, preco, imagem, categoria, descricao);
  window.location.href = "../../pages/all-products.html";
}

// Carrega os dados e edita o produto
async function loadProduct() {
  const product = await connectApi.selectById(idUrl);
  
  formData.appendChild(createForm(product.titulo, product.preco, product.imagem, product.categoria, product.descricao))

  form.addEventListener("submit", async (event) => editProduct(event));
}

loadProduct();
