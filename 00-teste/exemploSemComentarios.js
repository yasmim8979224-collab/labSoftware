/*
Calcular o IMC de uma pessoa com base nos dados inseridos durante a execução do programa
*/

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o seu peso em kg: ", (peso) => {
  rl.question("Digite a sua altura em metros: ", (altura) => {

    peso = Number(peso);
    altura = Number(altura);

    // REALIZE O EXERCÍCIO AQUI 🔽

    let imc = peso / (altura * altura);
    
    console.log(`Com o peso de ${peso}kg e altura de ${altura}m, seu IMC é: ${imc}`);

    rl.close();
  });
});