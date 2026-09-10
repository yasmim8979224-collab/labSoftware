// Configurações do teste
const TAMANHO_ARRAY = 10;
const IMPRIMIR_ITERACOES = true;

const arrayAleatorio = Array.from({ length: TAMANHO_ARRAY }, () =>
  Math.floor(Math.random() * 100),
);

/*
 * COMO FUNCIONA O SELECTION SORT:
 * Ele olha para a parte bagunçada da lista e procura quem é o menor de todos.
 * Quando acha, ele coloca esse número na primeira posição livre.
 * Resumindo: ele "seleciona" o menor e arruma da esquerda para a direita.
 */
function selectionSort(arr) {
  let n = arr.length;
  let comparacoesTotais = 0;
  let trocasTotais = 0;

  if (IMPRIMIR_ITERACOES) console.log(`Array inicial: [${arr.join(", ")}]\n`);

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i; // Assume que o primeiro é o menor
    let comparacoesNaIteracao = 0;
    let trocasNaIteracao = 0;

    // Procura se tem alguém ainda menor no resto da fila
    for (let j = i + 1; j < n; j++) {
      comparacoesNaIteracao++;
      comparacoesTotais++;

      if (arr[j] < arr[minIdx]) {
        minIdx = j; // Achou um menor
      }
    }

    // Se o menor não estiver no começo, troca eles de lugar
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      trocasNaIteracao++;
      trocasTotais++;
    }

    if (IMPRIMIR_ITERACOES) {
      console.log(`Iteração ${i + 1}: [${arr.join(", ")}]`);
      console.log(
        `  -> Comparações: ${comparacoesNaIteracao} | Trocas: ${trocasNaIteracao}\n`,
      );
    }
  }

  if (IMPRIMIR_ITERACOES)
    console.log(
      `Total Selection Sort: ${comparacoesTotais} comparações e ${trocasTotais} trocas.\n`,
    );
  return arr;
}

console.log(`Iniciando Selection Sort...`);
console.time("Tempo do Selection Sort");
selectionSort(arrayAleatorio);
console.timeEnd("Tempo do Selection Sort");
