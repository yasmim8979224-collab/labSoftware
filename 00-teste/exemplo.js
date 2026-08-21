/*
Calcular o IMC de uma pessoa com base nos dados inseridos durante a execução do programa
*/


const { createInterface } = require("readline"); //Módulo do Node.js que permite criar a interface de input pelo terminal 

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o seu peso em kg: ", (peso) => { // Primeiro input, armazena o valor dentro da variável "peso"
  rl.question("Digite a sua altura em metros: ", (altura) => { // Segundo input, armazena o valor dentro da variável "altura"

    peso = Number(peso); //Variável peso, já possui valor sendo ele o input do usuário
    altura = Number(altura); //Variável altura, já possui valor sendo ele o input do usuário

    // REALIZE O EXERCÍCIO AQUI 🔽 (em baixo está a lógica com a resoluÇão do problema, este é lugar onde você colocara a resposta durante o teste)

    //criei uma variável imc, ela recebe o valor resultante da equação que está em sua frente

    let imc = peso / (altura * altura); //tanto peso como altura foram dados pelo usuário via terminal
    
    // Apresentar a resposta utilizando a interpolação exigida:
    console.log(`Com o peso de ${peso}kg e altura de ${altura}m, seu IMC é: ${imc}`);

    rl.close();
  });
});