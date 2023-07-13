import { connectApi } from "./connectApi.js";

const list = document.querySelector("[data-list]");

async function editProduct(event) {
  const element = event.target;
  let selectedElement;
  let selectedId;
  // let selectedTitulo;
  // let selectedPreco;
  // let selectedImagem;


  if (element.id == "data-edit") {
    selectedElement = element.parentNode.parentNode.parentNode.parentNode;
    selectedId = selectedElement.getAttribute("data-id");
    // selectedTitulo = selectedElement.querySelector('.product__title').textContent
    // selectedPreco = selectedElement.querySelector('.product__price').textContent
    // selectedImagem = selectedElement.querySelector('.product__image').getAttribute("src")

    console.log(selectedId);
  }

  const url = `../../pages/edit-product.html?id=${selectedId}`

  window.location.href = url

  // await connectApi.editProducts(selectedId);
}

list.addEventListener("click", async (event) => editProduct(event));

//
