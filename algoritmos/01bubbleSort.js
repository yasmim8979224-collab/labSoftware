// Configurações do teste
const TAMANHO_ARRAY = 10;
const IMPRIMIR_ITERACOES = true;

const arrayAleatorio = Array.from({ length: TAMANHO_ARRAY }, () =>
  Math.floor(Math.random() * 100),
);

/*
 * COMO FUNCIONA O BUBBLE SORT:
 * Ele vai passando pela fila e comparando quem está lado a lado (vizinhos).
 * Se o da esquerda for maior que o da direita, eles trocam de lugar.
 * Com isso, o maior número sempre "flutua" para o final da fila a cada rodada,
 * como se fosse uma bolha subindo.
 */
function bubbleSort(arr) {
  let n = arr.length;
  let comparacoesTotais = 0;
  let trocasTotais = 0;

  if (IMPRIMIR_ITERACOES) console.log(`Array inicial: [${arr.join(", ")}]\n`);

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    let comparacoesNaIteracao = 0;
    let trocasNaIteracao = 0;

    // Empurra o maior número não ordenado para a direita
    for (let j = 0; j < n - i - 1; j++) {
      comparacoesNaIteracao++;
      comparacoesTotais++;

      // Compara os vizinhos
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca
        swapped = true;
        trocasNaIteracao++;
        trocasTotais++;
      }
    }

    if (IMPRIMIR_ITERACOES) {
      console.log(`Iteração ${i + 1}: [${arr.join(", ")}]`);
      console.log(
        `  -> Comparações: ${comparacoesNaIteracao} | Trocas: ${trocasNaIteracao}\n`,
      );
    }

    if (!swapped) break;
  }

  if (IMPRIMIR_ITERACOES)
    console.log(
      `Total Bubble Sort: ${comparacoesTotais} comparações e ${trocasTotais} trocas.\n`,
    );
  return arr;
}

console.log(`Iniciando Bubble Sort...`);
console.time("Tempo do Bubble Sort");
bubbleSort(arrayAleatorio);
console.timeEnd("Tempo do Bubble Sort");
