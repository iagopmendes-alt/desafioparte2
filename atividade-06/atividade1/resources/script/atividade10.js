let notas = [8, 7, 9, 4, 6, 10];

let todasValidas = notas.every(function(nota) {
  return nota >= 0 && nota <= 10;
});

if (todasValidas) {
  alert("Todas as notas são válidas.");
} else {
  alert("Existem notas fora do intervalo permitido.");
}