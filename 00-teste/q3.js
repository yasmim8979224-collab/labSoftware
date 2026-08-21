/* 
Questão 05

 Você é o capitão de um navio e gostaria de calcular se seu dia de pirataria foi um sucesso.
 O suceso de sua viagem é calculado em cima de dois parâmetros - ouro e piratas.
 A viagem será um sucesso se houver um número de ouro equivalente ao número de piratas. 
 Porém, se ouro + piratas > 100, a pirataria foi um fracasso pois o navio provavelmente irá afundar por conta do peso.
    ___
    \_/
     |._
     |'."-._.-""--.-"-.__.-'/
     |  \       .-.        (
     |   |     (@.@)        )
     |   |   '=.|m|.='     /
     |  /    .='`"``=.    /
     |.'                 (
     |.-"-.__.-""-.__.-"-.)
     |
     |
     |
*/

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a quantidade de piratas: ", (piratas) => {
  rl.question("Digite a quantidade de ouro: ", (ouro) => {
    piratas = Number(piratas);
    ouro = Number(ouro);

    //REALIZE O EXERCÍCIO AQUI 🔽

    rl.close();
  });
});
