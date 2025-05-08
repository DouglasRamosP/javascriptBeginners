//EXISTE DUAS FORMAS DE FAZER ESTE BOTÃO
//1º
function mostrarAlerta() {
  alert("Você clicou no botão");
}



//2º
/*
document.getElementById(''myButton).addEventListener('click', function(){ 
    alert('Você clicou no botão');
    }); 

-EXPLICAÇÃO--> Linha 1: document.getElementById("myButton")
document: Refere-se ao objeto document, que representa o conteúdo do HTML carregado na página.
getElementById("myButton"): Este método busca e retorna o elemento HTML que possui o atributo id igual a "myButton". No caso, é o botão com id="myButton".
Linha 2: .addEventListener("click", function () {
.addEventListener("click", function () {: Adiciona um "ouvinte" de evento ao elemento encontrado. Este ouvinte espera por um evento de clique ("click"). Quando o botão é clicado, a função fornecida é executada.
Linha 3: alert("Você clicou no botão");
alert("Você clicou no botão");: Dentro da função, o método alert é chamado. Este método exibe uma caixa de alerta com a mensagem "Você clicou no botão".
Linha 4: });
});: Fecha a definição da função e o método addEventListener.
Em resumo, este código adiciona um evento de clique ao botão com id="myButton". Quando o botão é clicado, uma caixa de alerta aparece com a mensagem "Você clicou no botão".


*/