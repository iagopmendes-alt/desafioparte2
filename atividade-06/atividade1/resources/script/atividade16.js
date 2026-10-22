let valores = [45, 30, 80, 25, 50];

let total = valores.reduce(function(acumulador, valor) {
  return acumulador + valor;
}, 0);

alert("Total da compra: R$ " + total);

if (total > 200) {
  alert("O cliente pode receber um brinde!");
} else {
  alert("O total não ultrapassou R$ 200.");
}