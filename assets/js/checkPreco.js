export default function checkPreco(preco) {
  // Substituir vírgula por ponto
  preco = preco.replace(".", ",");

  // Adicionar ponto decimal, caso não tenha sido adicionado
  if (preco.indexOf(",") === -1) {
    preco += ",00";
  }

  return preco;
}