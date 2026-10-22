let senha = "1234";
let recebe = prompt("Digite a senha, resta 2 tentativas");
let tentativas = 3

while (tentativas > 0){
    tentativas = tentativas - 1;
    if (recebe.toLowerCase().trim()) {
        alert("Acesso permitido");
        break;
    }

    else {
        if (tentativas ===0) {
            alert("número de tentativas esgotado, acessp negado");
            break;
        }
        alert("senha incorreta, tentativas restantes: ".concat(tentativas));
        recebe = prompt("digite novamente: ")
    }

}