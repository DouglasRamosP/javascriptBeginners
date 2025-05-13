let frutas = ["banana", "maçã", "uva"];

function altera(frutas) {
  const mostra = document.getElementById("mostra");

  frutas.push("kiwi");
  frutas.shift();

  mostra.innerHTML = `
  <p>Seu array foi alterado:</p>
  <ul>
    <li>1º: ${frutas[0]}</li>
    <li>2º: ${frutas[1]}</li>
    <li>3º: ${frutas[2]}</li>   
  </ul>
`;
}
