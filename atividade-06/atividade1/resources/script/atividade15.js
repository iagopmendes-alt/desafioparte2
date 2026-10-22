let precos = [100, 50, 80, 120, 40];

let comDesconto = precos.map(function(preco) {
  return preco * 0.9;
});

alert("Preços originais: " + precos.join(", "));
alert("Preços com desconto: " + comDesconto.join(", "));