import { connectApi } from "./connectApi.js";
import createCard from "./showProducts.js";

const btnSearch = document.querySelector("[data-btn-search]");

async function searchVideo(event) {
  event.preventDefault();

  const dataSearch = document.querySelector("[data-search]").value;
  const search = await connectApi.searchProducts(dataSearch);

  const list = document.querySelector("[data-list]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach((element) => {
    if (element.titulo.includes(dataSearch)) {
      list.appendChild(
        createCard(element.id, element.titulo, element.preco, element.imagem)
      );
    }
  });
}

btnSearch.addEventListener("click", (event) => searchVideo(event)); 
