let notas = [8, 6, 9, 4, 7];

notas.forEach(function(nota, i) {
  alert("Aluno " + (i + 1) + ": nota " + nota);
});

let aprovadas = notas.filter(function(nota) {
  return nota >= 7;
});

let comPontoExtra = notas.map(function(nota) {
  if (nota + 1 > 10) {
    return 10;
  }
  return nota + 1;
});

let soma = notas.reduce(function(acumulador, nota) {
  return acumulador + nota;
}, 0);

let media = soma / notas.length;

let temNotaBaixa = notas.some(function(nota) {
  return nota < 5;
});

alert("Notas aprovadas: " + aprovadas.join(", ") +
      "\nNotas com ponto extra: " + comPontoExtra.join(", ") +
      "\nMédia da turma: " + media +
      "\nExiste nota abaixo de 5: " + temNotaBaixa);