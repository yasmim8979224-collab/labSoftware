// Desafio - Loja

// Crie:

// produto
// preco
// quantidade

// Calcule:

// total = preco * quantidade

// Se o total for maior que R$500:

// Desconto de 15%

// Caso contrário:

// Sem desconto

// Mostre o total.

let Produto = 15
let Preco=5
let Quantidade=20
let valor= Preco*Quantidade

console.log(`${valor}`)
if(valor>500){
    console.log(`Desconto=${valor-(valor*0.15)}`)
}
else{
    console.log("Sem desconto")
}


