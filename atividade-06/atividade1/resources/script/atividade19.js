let texto = "JavaScript e divertido";
let textoMinusculo = texto.toLowerCase();
let vogais = "aeiou";
let contador = 0;

for (let i = 0; i < textoMinusculo.length; i++) {
  if (vogais.includes(textoMinusculo[i])) {
    contador++;
  }
}

alert("Quantidade de vogais: " + contador);