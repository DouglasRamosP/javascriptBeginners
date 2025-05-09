function mostrarMenssagem() {
  const elemento1 = document.getElementById("menssagem1");
  const elemento2 = document.getElementById("menssagem2");
  let elemento3 = document.getElementById("menssagem3");
  const resultado = document.getElementById("resultado");

  elemento1.innerHTML = 3;
  elemento2.innerHTML = 2;
  

  const valor1 = parseInt(elemento1.innerHTML);
  const valor2 = parseInt(elemento2.innerHTML);

  elemento3 = (valor1 + valor2);
  resultado.innerHTML = elemento3;
}
