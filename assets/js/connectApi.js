async function showVideos() {
  const conexao = await fetch("http://localhost:3000/produtos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
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
    }),
  });
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function searchProducts(id) {
  const conexao = await fetch(`http://localhost:3000/produtos?q=${id}`);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function biid(id) {
  const conexao = await fetch(`http://localhost:3000/produtos/${id}`);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function deleteProducts(id) {
  const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function editProducts(id, titulo, preco, imagem, categoria, descricao) {
  const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      preco: preco,
      imagem: imagem,
      categoria: categoria,
      descricao: descricao,
    }),
  });

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const connectApi = {
  showVideos,
  createProducts,
  searchProducts,
  deleteProducts,
  editProducts,
  biid,
};
