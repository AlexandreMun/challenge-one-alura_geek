function detailsProduct(event) {
  event.preventDefault();
  const element = event.target.closest("[data-product-id]");
  if (!element) return;

  const selectedId = element.parentNode.getAttribute("data-id");
  const url = `../../pages/product.html?id=${selectedId}`;

  window.location.href = url;
}

document.addEventListener("click", detailsProduct);
