async function showProducts() {
  const conexao = await fetch("https://64b1905c062767bc482662cb.mockapi.io/produto");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function createProducts(titulo, preco, imagem, categoria, descricao) {
  const conexao = await fetch("https://64b1905c062767bc482662cb.mockapi.io/produto", {
    method: "POST",
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

async function searchProducts(id) {
  const conexao = await fetch(`https://64b1905c062767bc482662cb.mockapi.io/produto?q=${id}`);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function selectById(id) {
  const conexao = await fetch(`https://64b1905c062767bc482662cb.mockapi.io/produto/${id}`);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function deleteProducts(id) {
  const conexao = await fetch(`https://64b1905c062767bc482662cb.mockapi.io/produto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function editProducts(id, titulo, preco, imagem, categoria, descricao) {
  const conexao = await fetch(`https://64b1905c062767bc482662cb.mockapi.io/produto/${id}`, {
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
  showProducts,
  createProducts,
  searchProducts,
  deleteProducts,
  editProducts,
  selectById,
};
