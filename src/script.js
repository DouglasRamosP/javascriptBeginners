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
