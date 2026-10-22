let livros = ["O Cortiço",  "Memorias Postumas", "Dom Casmurro",  "Iracema",  "O Alquimista"];


let livroProcurado = prompt("Digite o nome do livro:");


let posicao = livros.indexOf(livroProcurado);

if (posicao === -1) {
  alert("Livro não foi encontrado.");
} else {
  alert("Livro encontrado na posição " + posicao + ".");
}