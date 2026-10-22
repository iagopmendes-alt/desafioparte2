let jogos = [  "Minecraft",  "The Sims",  "Roblox",  "Terraria",  "Stardew Valley"];


let jogoProcurado = prompt("Digite o nome de um jogo:");


if (jogos.includes(jogoProcurado)) {
  alert("O jogo está na lista!");
} else {
  alert("O jogo não está na lista.");
}