let tarefas = ["Estudar HTML",  "Estudar CSS",  "Praticar JavaScript", "Estudar Laravel",  "Revisar conteúdo"];

alert("Lista inicial de tarefas:\n" + tarefas.join("\n"));

tarefas.splice(1, 1);

tarefas.splice(2, 1, "Fazer projetos");

alert("Lista de tarefas atualizada:\n" + tarefas.join("\n"));