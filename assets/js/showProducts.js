import { connectApi } from "./connectApi.js";

const list = document.querySelector("[data-list");

export default function createCard(id, titulo, preco, imagem) {
  const product = document.createElement("li");
  product.className = "product--all";
  product.innerHTML = `
    <div class="product__image-icons">
      <img src="${imagem}" alt="" class="product__image" />
      <div class="product__icons">
        <button>
          <img
            src="../assets/img/delete.png"
            alt=""
            class="product__delete"
            id="data-delete"
          />
        </button>
        <button>
          <img
            src="../assets/img/edit.png"
            alt=""
            class="product__edit"
            id="data-edit"
          />
        </button>
      </div>
    </div>
    <h2 class="product__title" data-title="${titulo}">${titulo}</h2>
    <p class="product__price">${preco}</p>
    <p class="product__code" value="${id}">#${id}</p>
  `;

  product.setAttribute("data-id", id)

  return product;
}

async function listProduct() {
  const listApi = await connectApi.showVideos();

  listApi.forEach((product) => {
    list.appendChild(
      createCard(product.id, product.titulo, product.preco, product.imagem)
    );
  });
}

listProduct();
