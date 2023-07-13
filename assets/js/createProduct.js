import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]")

async function createProduct(event) {
  event.preventDefault()

  const titulo = document.querySelector("[data-titulo]").value
  const preco = document.querySelector("[data-preco]").value
  const imagem = document.querySelector("[data-imagem]").value
  const categoria = document.querySelector("[data-categoria]").value
  const descricao = document.querySelector("[data-descricao]").value

  await connectApi.createProducts(titulo, preco, imagem, categoria, descricao)
  window.location.href = "../../pages/all-products.html"
}

form.addEventListener("submit", (event) => createProduct(event))