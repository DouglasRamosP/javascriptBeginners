function calculaIdade() {
  const idadeInput = document.getElementById("idade"); //Uma constante declarada, document é um objeto global que representa o documento HTML carregado no navegador. getElementById é um método do objeto document, que é usado para selecionar um elemento HTML com um id específico, no caso a "idade". ou seja idadeInput tem o elemento "idade" agora
  const resultado = document.getElementById("resultado"); // o mesmo que o de cima

  const idade = parseInt(idadeInput.value); // uma contante declarada covertida para inteiro, onde o valor do elemento idade, atribuido anteriormente para idadeInput e puxado.
  resultado.innerHTML = `Sua idade é: ${idade}`; // innerHTML: Esta é uma propriedade do elemento HTML que permite definir ou obter o conteúdo HTML interno do elemento. Quando você define innerHTML, você está substituindo todo o conteúdo dentro do elemento.

  if (idade < 18){
    alert('ATENÇÃO, VOCÊ É MENOR DE IDADE!!!')
  }

}

