const productBtn = document.querySelector("[data-product]");

async function detailsProduct(event) {
  event.preventDefault();
  const element = event.target;
  let selectedId;

  if (element.id == "view-product") {
    selectedId = element.parentNode.getAttribute("data-id");

    const url = `../../pages/product.html?id=${selectedId}`;

    window.location.href = url;
  }
}

productBtn.addEventListener("click", async (event) => detailsProduct(event));
