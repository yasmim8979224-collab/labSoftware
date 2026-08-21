// Exercícios 8 - if / else if / else

// Verifique uma temperatura.

// Menor que 15 -> Frio

// Entre 15 e 28 -> Agradável

// Maior que 28 -> Muito quente

let temperatura=32
if(temperatura< 15){
    console.log("frio");
}
else if( temperatura >=15 && temperatura<=28){
    console.log("Agradável");
}
else {
    console.log("Muito quente");
}