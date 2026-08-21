/*
Você está escrevendo um programa para jogar uma variação de Blackjack
 e precisa escrever um método para lidar com a pontuação.

Em geral, dados dois números, a e b, retorne a soma deles.
No entanto, se a soma for maior que 21, retorne 0 em vez disso
(já que o jogador "estourou" o limite).

Neste exercício, o dealer e o jogador sempre terão exatamente duas cartas.
O programa deve ler as duas cartas do dealer e as duas cartas do jogador,
calcular a soma de cada um e decidir quem venceu.

          _____
         |A .  | _____
         | /.\ ||A ^  | _____
         |(_._)|| / \ ||A _  | _____
         |  |  || \ / || ( ) ||A_ _ |
         |____V||  .  ||(_'_)||( v )|
                |____V||  |  || \ / |
                       |____V||  .  |
                              |____V|

Exemplo de Output

Digite a primeira carta do jogador: 10
Digite a segunda carta do jogador: 1
Cartas do dealer: 4 e 1 -> total 5
Cartas do jogador: 10 e 1 -> total 11
Jogador venceu! Dealer: 5 | Jogador: 11
*/

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cartaAleatoria() {
  return Math.floor(Math.random() * 10) + 1;
}

rl.question("Digite a primeira carta do jogador: ", (j1) => {
  rl.question("Digite a segunda carta do jogador: ", (j2) => {
    const dealer1 = cartaAleatoria(); // a 1a carta do Dealer é escolhida de forma aleatória
    const dealer2 = cartaAleatoria(); // as 2a carta do Dealer é escolhida de forma aleatória
    j1 = Number(j1);
    j2 = Number(j2);

    //REALIZE O EXERCÍCIO AQUI 🔽

    rl.close();
  });
});
