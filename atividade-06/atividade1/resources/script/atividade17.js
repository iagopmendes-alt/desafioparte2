let notas = [6, 7.5, 8, 9.5, 5, 10];

let notaAlta = notas.find(function(nota) {
  return nota >= 9;
});

if (notaAlta !== undefined) {
  alert("Primeira nota encontrada: " + notaAlta);
} else
     {
  alert("Não existe nota nesse intervalo.");
}