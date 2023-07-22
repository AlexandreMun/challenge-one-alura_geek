import { connectApi } from "./connectApi.js";

const list = document.querySelector("[data-list]");

async function editProduct(event) {
  const element = event.target;
  let selectedId;

  if (element.id == "data-edit") {
    selectedId =
      element.parentNode.parentNode.parentNode.parentNode.getAttribute(
        "data-id"
      );

    const url = `./edit-product.html?id=${selectedId}`;
    
    window.location.href = url;
  }
}

list.addEventListener("click", async (event) => editProduct(event));
