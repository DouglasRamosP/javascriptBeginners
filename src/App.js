function saudacao(nome) {
  const mostra = document.getElementById("mostra");

  mostra.innerHTML = `Olá, ${nome}`;
}

/*
CASO QUEIRA CHAMAR SEM A NECESSIDADE DE UM BOTÃO USE:

// Chama a função automaticamente ao carregar a página
window.onload = () => {
  saudacao("Douglas");
};
*/