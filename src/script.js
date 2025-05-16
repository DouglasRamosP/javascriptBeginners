// seleciona o elemento
let button = document.getElementById("myButton");
let paragraph = document.getElementById("myParagraph");

//adicionamos o evento de click ao botão
button.addEventListener("click", function () {
  alert("O botão foi clicado!");
});
//adicionamos o evento de passae sobre o parágrafo
paragraph.addEventListener("mouseover", function () {
  alert("O mouse esta sobre o parágrafo!");
});

// Alterar a cor do texto para vermelho 
myParagraph.style.color = "red" ; 
// Alterar o tamanho da fonte para 20px 
myParagraph.style.fontSize = "20px" ; 
// Alterar a cor de fundo para cinza claro 
myParagraph.style.backgroundColor = "#f0f0f0" ;