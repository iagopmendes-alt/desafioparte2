function calcularMedia(notas) {
  let soma = 0;
  
  notas.forEach(function(n) {
    soma = soma + n;
  });
  
  return soma / notas.length;
}

let notasTurma = [8, 7, 6, 9];
let media = calcularMedia(notasTurma);

alert("Média: " + media);

if (media >= 7) {
  alert("Situação: aprovado");
} else {
  alert("Situação: reprovado");
}