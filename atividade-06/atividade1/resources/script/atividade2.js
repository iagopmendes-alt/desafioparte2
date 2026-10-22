let produtos = ["Arroz","Feijão","Leite","Pão","Café"];

console.log("lista de compras")
produtos.forEach((produto, indice )=>{
    console.log(`${indice + 1} - ${produto}`);
}); 

produtos.push("Macarrão", "macaxeira", "Goiabada");

console.log("lista com mais produtos")
produtos.forEach((produto, indice )=>{
    console.log (`${indice + 1}) - ${produto}`);
}); 