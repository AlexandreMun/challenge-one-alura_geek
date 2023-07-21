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

    const url = new URL(`pages/edit-product.html?id=${selectedId}`, location.origin);
    
    window.location.href = url.href;
  }
}

list.addEventListener("click", async (event) => editProduct(event));
