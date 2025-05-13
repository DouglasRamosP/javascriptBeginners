let numeros = [1, 4, 6, 11];

function altera(numeros) {
  const mostra = document.getElementById("mostra");

  let multi = numeros.map(numeros => numeros * numeros);

  mostra.innerHTML = `
  <p>Seu array foi alterado:</p>
  <ul>
    <li>1º: ${multi[0]}</li>
    <li>2º: ${multi[1]}</li>
    <li>3º: ${multi[2]}</li>
    <li>4º: ${multi[3]}</li>     
  </ul>
`;
}
