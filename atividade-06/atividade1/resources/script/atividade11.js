let saldo = 500;

let saque = Number(prompt("Digite o valor do saque:"));

if (saque <= 0 || isNaN(saque)) {
  alert("Valor de saque inválido.");
} 
else if (saque > saldo) {
  alert("Saldo insuficiente.");
} else 
    {
  saldo = saldo - saque;
  alert("Saque realizado com sucesso.\nSaldo restante: R$ " + saldo);
}