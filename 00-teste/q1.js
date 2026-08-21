/*
Questão 01

Você está programando um jogo chamado Gamão, e está utilizando o método de dados.
Dado dois inteiros, retorne a soma entre eles. Porém, se os dois números forem iguais, 
retorne o dobro da soma entre eles.

  ____
 /\' .\    _____
/: \___\  / .  /\
\' / . / /____/..\
 \/___/  \'  '\  /
          \'__'\/

Exemplo de Output

Digite o valor do primeiro dado: 10
Digite o valor do segundo dado: 5
Resultado: 10 + 5 = 15
*/

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o resultado do primeiro dado: ", (dadoUm) => {
  rl.question("Digite o resultado do segundo dado: ", (dadoDois) => {
    dadoUm = Number(dadoUm);
    dadoDois = Number(dadoDois);

    //REALIZE O EXERCÍCIO AQUI 🔽



    rl.close();
  });
});
