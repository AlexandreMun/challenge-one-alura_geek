import { connectApi } from "./connectApi.js";

const starWars = document.getElementById("star-wars");
const consoles = document.getElementById("consoles");
const diversos = document.getElementById("diversos");

// Armazena produtos em cada categoria
const categorias = {
  "Star Wars": [],
  "Consoles": [],
  "Diversos": [],
};

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
    // Adiciona cada produto à categoria correspondente
    if (product.categoria === "Star Wars") {
      categorias["Star Wars"].push(product);
    } else if (product.categoria === "Consoles") {
      categorias["Consoles"].push(product);
    } else if (product.categoria === "Diversos") {
      categorias["Diversos"].push(product);
    }
  });

  // Adicione os produtos na pagina
  categorias["Star Wars"].forEach((product) => {
    starWars.appendChild(
      createCard(product.id, product.titulo, product.preco, product.imagem)
    );
  });

  categorias["Consoles"].forEach((product) => {
    consoles.appendChild(
      createCard(product.id, product.titulo, product.preco, product.imagem)
    );
  });

  categorias["Diversos"].forEach((product) => {
    diversos.appendChild(
      createCard(product.id, product.titulo, product.preco, product.imagem)
    );
  });
}

listProduct();
