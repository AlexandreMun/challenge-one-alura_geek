async function showVideos() {
  const conexao = await fetch("http://localhost:3000/produtos")
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

async function createProducts(titulo, preco, imagem, categoria, descricao) {
  const conexao = await fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      preco: `R$ ${preco}`,
      imagem: imagem,
      categoria: categoria,
      descricao: descricao,
    })
  })
  const conexaoConvertida = await conexao.json()

  return conexaoConvertida
}

export const connectApi = {
  showVideos,
  createProducts,
}