/*
Questão 06

Você está escrevendo um pequeno módulo de combate para um RPG. 
Existe um Dragão com 10 de vida.
Para atacar, o jogador deve lançar um dado (1-20) e somar um modificador. 
Se a soma do valorDado + modificador for maior ou igual à dificuldade (classe de armadura do Dragão), 
o ataque é um sucesso e o Dragão recebe 10 de dano. 

Caso contrário, o jogador erra.

O programa deve ler o modificador do jogador e a dificuldade do Dragão, 
realizar o sorteio do dado, verificar se o ataque acertou e exibir o status do Dragão.

             /|                                                               
        //^^^  ~~~~^^^^---___                   ^\            /|              
     /c~~`'     ____          ^^^^             /| \\        /_ _\             
     ~^^--; _\\\    ~~~---___     ~~~~        / '|  \\       | |              
         /_/                 --        ~~~__/ ,  |   \\       \ \             
        ~                      -        |\--;' |  |    ;;      | |            
                               |          \   |    |    /     /  / 
                              |__ \  \     ~--|/~~\/~~|/     /  /             
                         /---_.     \  \         |    /      |  |             
                      ;-/   ~\-----   ;         |           |  |            
                         '--\_,--------'           |        |   |           
                           / ____    _^^^_..        |        -                
                          |       /^       ..       |       _    |            
              /           | ---- |      .           |      _    |             
          [T]/__           `     `.      |           |    -    -              
         0+}/ ;~            ` .--  `      |           -__-    -     q\        
       =( __ /               / ` -_.     /                   -     /`'>       
        /|  |>          _-__ ---^^     /          _---_____--      /^^\       
      -------          ///  ///__ -__  / -____--~                 / || \


*/

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rolarDado() {
  return Math.floor(Math.random() * 20) + 1;
}

rl.question("Digite seu modificador de ataque: ", (modificador) => {
  rl.question("Digite a dificuldade (armadura) do Dragão: ", (dificuldade) => {
    let valorDado = rolarDado(); // o valor do dano já está sendo calculado de forma aleatória
    modificador = Number(modificador);
    dificuldade = Number(dificuldade);

    // REALIZE O EXERCÍCIO AQUI 🔽



    rl.close();
  });
});
