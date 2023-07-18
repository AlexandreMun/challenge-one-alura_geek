import { connectApi } from "./connectApi.js";

const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get("id");
const productSection = document.querySelector("[data-details]")

function createDiv(titulo, preco, imagem, descricao) {
  const productDiv = document.createElement("div");
  productDiv.className = "product__details";

  productDiv.innerHTML = `
    <img src="${imagem}" alt="" class="details__img" />
    <div class="details__info">
      <h2 class="info__title">${titulo}</h2>
      <p class="info__price">R$ ${preco}</p>
      <p class="info__desc">
        ${descricao}
      </p>
    </div>
  `;

  return productDiv;
}

async function loadProduct() {
  const product = await connectApi.selectById(idUrl)

  const div = createDiv(product.titulo, product.preco, product.imagem, product.descricao)

  productSection.appendChild(div);
}

loadProduct();