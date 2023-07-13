import { connectApi } from "./connectApi.js";

const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get("id");
const formData = document.querySelector("[data-edit");

async function getProduct() {
  const product = await connectApi.selectById(idUrl);
  
  const form = document.createElement("form")
  form.className = "form__product"
  form.innerHTML = `
    <h2 class="product__title">Editar produto</h2>
    <div class="product__area">
      <input class="product__area__input" type="text" id="nome" value="${product.imagem}" data-imagem required />
      <span>URL da imagem</span>
    </div>
    <div class="product__area">
      <input class="product__area__input" type="text" id="nome" value="${product.categoria}" data-categoria required />
      <span>Categoria</span>
    </div>
    <div class="product__area">
      <input class="product__area__input" type="text" id="nome" value="${product.titulo}" data-titulo required />
      <span>Nome do produto</span>
    </div>
    <div class="product__area">
      <input class="product__area__input" type="text" id="nome" value="${product.preco}" data-preco required />
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
      >${product.descricao}</textarea>
      <span>Descrição do produto</span>
    </div>
    <button class="product__btn" id="product__btn" type="submit">Editar produto</button>
  `

  formData.appendChild(form)

  console.table(product);

}

getProduct();
