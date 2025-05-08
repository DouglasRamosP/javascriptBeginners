function mostrarMenssagem() {
  const elemento1 = document.getElementById("menssagem1");
  const elemento2 = document.getElementById("menssagem2");
  const resultado = document.getElementById("resultado");

  elemento1.innerHTML = 3;
  elemento2.innerHTML = 3;

  const valor1 = parseInt(elemento1.innerHTML);
  const valor2 = parseInt(elemento2.innerHTML);

  const soma = (valor1 + valor2);
  resultado.innerHTML = soma;
}
