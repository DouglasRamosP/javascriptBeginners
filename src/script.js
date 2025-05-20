//Selecionando os elementos necessários
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

//Função para adicionar tarefa
function addTask(e) {
  e.preventDefault(); // Previne o comportamento padrão do form

  const taskText = taskInput.value.trim();

  if (taskText) {
    // Criar o elemento li
    const li = document.createElement("li");

    // Criar um span para o texto da tarefa
    const span = document.createElement("span");
    span.textContent = taskText;

    // Evento para marcar como concluída
    span.addEventListener("click", () => {
      span.classList.toggle("completed");
    });

    // Criar botão de remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "🗑️";
    removeBtn.classList.add("remove-btn");

    // Evento para remover a tarefa
    removeBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Impede que o clique no botão dispare o evento do span
      li.remove();
    });

    // Montar o item da lista
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Limpar o campo de input
    taskInput.value = "";
  } else {
    alert("Por favor, digite uma tarefa!");
  }
}

// Adicionando o evento de submit ao form
form.addEventListener("submit", addTask);

