let campoNome = document.getElementById("nome");
let campoEmail = document.getElementById('email')
let campoSenha = document.getElementById('senha')
let checkBox = document.getElementById('meuCheckbox')

document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoNome.value.trim() === "") {
      alert("Por favor, insira seu nome.");
      return false;
    } 
    
    let email = campoEmail.value.trim();
    if (!email.includes("@") || !email.includes(".")){
        alert("Por favor, insira um e-mail válido.");
      return false;
    }

    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (!regex.test(senha.value)){
        alert('A senha precisa de pelo menos 8 caracteres, incluindo uma letra e um número.')
        return false;
    }

    if(!checkBox.checked){
        alert('Você precisa concordar com os termos e condições para prosseguir.')
        return false;
    }

      alert("Formulário submetido com sucesso!");
    

  });
