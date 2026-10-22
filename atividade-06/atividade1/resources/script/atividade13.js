let precos = [80, 35, 65, 20, 100];
let total = 0;

precos.forEach(function(preco, i) {
  total = total + preco;
  alert((i + 1) + " - R$ " + preco);
});

alert("Total: R$ " + total);