/*
Questão 02

Dado um número de 1 a 5, retorne a palavra que representa o número.
Por exemplo, dado o núm. 2, retorne Dois
Se o número for maior que 5, retorne a frase Fora do escopo, grande de mais.
Se o número for menor que 1, retorne a frase Fora do escopo, prqueno de mais.

 _     _   _                     ____      ____        _             
/ |   | | | |_ __ ___           |___ \    |  _ \  ___ (_)___         
| |   | | | | '_ ` _ \   _____    __) |   | | | |/ _ \| / __|  _____ 
| |_  | |_| | | | | | | |_____|  / __/ _  | |_| | (_) | \__ \ |_____|
|_( )  \___/|_| |_| |_|         |_____( ) |____/ \___/|_|___/        
 _|/__    _____     //\            _  |/                             
|___ /   |_   _| __|/_\| ___      | |                                
  |_ \     | || '__/ _ \/ __|     | |                                
 ___) |    | || | |  __/\__ \_ _ _|_|                                
|____( )   |_||_|  \___||___(_|_|_|_)                                
     |/                                                              

*/

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", (numero) => {
  numero = Number(numero);

  //REALIZE O EXERCÍCIO AQUI 🔽

  rl.close();
});
