let numeros = [3, 8, 11, 14, 20, 7, 9, 12, 5, 16];

let pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

alert("Números originais: " + numeros.join(", "));
alert("Números pares: " + pares.join(", "));