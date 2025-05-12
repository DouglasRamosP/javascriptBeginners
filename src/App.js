let estudante = {
  nome: "Douglas",
  idade: 27,
  curso: "Sistemas de Informação",
};

function altera(estudante) {
  const mostra = document.getElementById("mostra");

  estudante.idade = 28;

  mostra.innerHTML = `
  <p>Seu objeto foi alterado:</p>
  <ul>
    <li>Nome: ${estudante.nome}</li>
    <li>Idade: ${estudante.idade}</li>
    <li>Curso: ${estudante.curso}</li>
  </ul>
`;
}
