function detailsProduct(event) {
  event.preventDefault();
  const element = event.target.closest("[data-product-id]");
  if (!element) return;

  const selectedId = element.parentNode.getAttribute("data-id");
  const url = new URL(`pages/product.html?id=${selectedId}`, location.origin);
  
  window.location.href = url.href;
}

document.addEventListener("click", detailsProduct);