async function showVideos() {
  const conexao = await fetch("http://localhost:3000/produto")
  const conexaoConvertida = await conexao.json()
  
  // console.table(conexaoConvertida);

  return conexaoConvertida
}

export const connectApi = {
  showVideos,
}