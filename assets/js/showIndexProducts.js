import { connectApi } from "./connectApi.js";

const mainContainer = document.querySelector(".container");

// Armazena as categorias
const categorias = {};

// Cria o card do produto
function createCard(id, titulo, preco, imagem) {
  const product = document.createElement("div");

  product.className = "product";
  product.setAttribute("data-id", id);

  product.innerHTML = `
    <img src="${imagem}" alt="" class="product__image" />
    <h2 class="product__title">${titulo}</h2>
    <p class="product__price">R$ ${preco}</p>
    <a href="" class="product__view" id="view-product" data-product-id>Ver produto</a>
  `;

  return product;
}

async function listProduct() {
  const listApi = await connectApi.showProducts();

  listApi.forEach((product) => {
    // Verifica se a categoria existe no objeto
    if (!categorias[product.categoria]) {
      categorias[product.categoria] = [];
    }

    // Adiciona a categoria
    categorias[product.categoria].push(product);
  });

  // Adiciona os produtos nas categorias criando o html
  for (const categoria in categorias) {
    const categoriaContainer = document.createElement("section");
    categoriaContainer.className = "products-container";

    const categoriaHeader = document.createElement("div");
    categoriaHeader.className = "products__header";

    const categoriaTitle = document.createElement("h2");
    categoriaTitle.className = "products__header__title";
    categoriaTitle.textContent = categoria;
    categoriaHeader.appendChild(categoriaTitle);

    const categoriaMore = document.createElement("div");
    categoriaMore.className = "products__header__more";

    const categoriaLink = document.createElement("a");
    categoriaLink.href = "";
    categoriaLink.className = "products__header__more__text";
    categoriaLink.textContent = "Ver Mais";
    categoriaMore.appendChild(categoriaLink);

    const categoriaArrow = document.createElement("i");
    categoriaArrow.className = "fa-sharp fa-solid fa-arrow-right";
    categoriaMore.appendChild(categoriaArrow);

    categoriaHeader.appendChild(categoriaMore);
    categoriaContainer.appendChild(categoriaHeader);

    const categoriaProducts = document.createElement("div");
    categoriaProducts.className = "products";
    categoriaProducts.id = categoria.toLowerCase().replace(" ", "-");
    categoriaContainer.appendChild(categoriaProducts);

    // Chama a função de criar o card do produto e junta ao html
    categorias[categoria].forEach((product) => {
      categoriaProducts.appendChild(
        createCard(product.id, product.titulo, product.preco, product.imagem)
      );
    });

    mainContainer.appendChild(categoriaContainer);
  }

  console.table(categorias);
}

listProduct();