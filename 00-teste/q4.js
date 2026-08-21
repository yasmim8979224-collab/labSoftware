/*
Questão 04

Você está trabalhando em um aplicativo para calcular gorjetas.
Dado 2 números: A, que é o valor da compra em centavos, e B,
que é a qualidade do serviço recebido, calcule a gorjeta em centavos.
Arredonde o valor para baixo até o centavo mais próximo.

Calcule a gorjeta de acordo com a tabela abaixo:

Qualidade   Percentual  decimal
1	        5%	        0.05
2	        10%	        0.1
3	        15%	        0.15
4	        20%	        0.2
5	        25%	        0.25

Exemplo de entrada/saída:
Entrada: 1000 3
Retorno: 150

Explicação:
A classificação foi 3, e conforme a tabela acima, a gorjeta deve ser 15%.

1000 * 0.15 = 150
                                                     ___
                                             ___..--'  .`.
                                    ___...--'     -  .` `.`.
                           ___...--' _      -  _   .` -   `.`.
                  ___...--'  -       _   -       .`  `. - _ `.`.
           __..--'_______________ -         _  .`  _   `.   - `.`.
        .`    _ /\    -        .`      _     .`__________`. _  -`.`.
      .` -   _ /  \_     -   .`  _         .` |  Mercado  |`.   - `.`.
    .`-    _  /   /\   -   .`        _   .`   |___________|  `. _   `.`.
  .`________ /__ /_ \____.`____________.`     ___       ___  - `._____`|
    |   -  __  -|    | - |  ____  |   | | _  |   |  _  |   |  _ |
    | _   |  |  | -  |   | |.--.| |___| |    |___|     |___|    |
    |     |--|  |    | _ | |'--'| |---| |   _|---|     |---|_   |
    |   - |__| _|  - |   | |.--.| |   | |    |   |_  _ |   |    |
 ---``--._      |    |   |=|'--'|=|___|=|====|___|=====|___|====|
 -- . ''  ``--._| _  |  -|_|.--.|_______|_______________________|
`--._           '--- |_  |:|'--'|:::::::|:::::::::::::::::::::::|
_____`--._ ''      . '---'``--._|:::::::|:::::::::::::::::::::::|
----------`--._          ''      ``--.._|:::::::::::::::::::::::|
`--._ _________`--._'        --     .   ''-----.................'
*/

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o valor da compra em centavos: ", (a) => {
  rl.question("Digite a qualidade do serviço: ", (b) => {
    a = Number(a);
    b = Number(b);

    //REALIZE O EXERCÍCIO AQUI 🔽

    rl.close();
  });
});
