import { connectApi } from "./connectApi.js";

const list = document.querySelector("[data-list]");

async function deleteProduct(event) {
  const element = event.target;
  let selectedId;

  if (element.id == "data-delete")
    selectedId =
      element.parentNode.parentNode.parentNode.parentNode.getAttribute(
        "data-id"
      );

  await connectApi.deleteProducts(selectedId);
}

list.addEventListener("click", async (event) => deleteProduct(event));
