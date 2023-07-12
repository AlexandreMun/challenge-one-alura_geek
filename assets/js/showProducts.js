import { connectApi} from "./connectApi.js";

const list = document.querySelector("[data-list")

export default function createCard(id, titulo, preco, imagem) {
  const product = document.createElement("li")
  product.className = "product--all"
  product.innerHTML = `
    <div class="product__image-icons">
    <img src="${imagem}" alt="" class="product__image" />
      <div class="product__icons">
        <img
          src="../assets/img/delete.png"
          alt=""
          class="product__delete"
        />
        <img
          src="../assets/img/edit.png"
          alt=""
          class="product__edit"
        />
      </div>
    </div>
    <h2 class="product__title">${titulo}</h2>
    <p class="product__price">${preco}</p>
    <p class="product__code">#${id}</p>
  `

  return product
}

async function listProduct() {
  const listApi = await connectApi.showVideos()

  listApi.forEach(product => {
    list.appendChild(
      createCard(product.id, product.titulo, product.preco, product.imagem)
    )
  });
}

listProduct()