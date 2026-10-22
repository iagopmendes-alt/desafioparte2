let notas = [7, 5, 10, 3, 8];

alert("Notas iniciais da turma: " + notas.join(", "));

let indice = Number(prompt("Digite o número da posição do aluno que quer corrigir (0 a " + (notas.length - 1) + "):"));
let novaNota = Number(prompt("Digite a nova nota para o aluno (entre 0 e 10):"));

while (novaNota < 0 || novaNota > 10 || isNaN(novaNota)) {
  novaNota = Number(prompt("Nota inválida! Digite uma nota entre 0 e 10:"));
}

notas[indice] = novaNota;
alert("Nota atualizada com sucesso!");

notas.forEach(function(nota, i) {
  alert("Aluno " + (i + 1) + ": nota " + nota);
});

if (notas.includes(10)) {
  alert("Pelo menos um aluno tirou nota 10!");
} else {
  alert("Ninguém tirou nota 10.");
}

let posicaoNota3 = notas.indexOf(3);
if (posicaoNota3 !== -1) {
  notas.splice(posicaoNota3, 1);
  alert("A nota 3 foi encontrada e removida!");
}

notas.sort(function(a, b) {
  return a - b;
});
alert("Notas organizadas em ordem crescente:\n" + notas.join(", "));