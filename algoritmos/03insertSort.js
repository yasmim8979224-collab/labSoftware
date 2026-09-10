// Configurações do teste
const TAMANHO_ARRAY = 10;
const IMPRIMIR_ITERACOES = true;

const arrayAleatorio = Array.from({ length: TAMANHO_ARRAY }, () =>
  Math.floor(Math.random() * 100),
);

/*
 * COMO FUNCIONA O INSERTION SORT:
 * Pense em como você organiza cartas de baralho na sua mão.
 * Ele pega um número, olha para os que já estão atrás dele e vai empurrando
 * os maiores para o lado, até achar o "buraco" perfeito para encaixar o número atual.
 */
function insertionSort(arr) {
  let n = arr.length;
  let comparacoesTotais = 0;
  let deslocamentosTotais = 0;

  if (IMPRIMIR_ITERACOES) console.log(`Array inicial: [${arr.join(", ")}]\n`);

  for (let i = 1; i < n; i++) {
    let key = arr[i]; // A "carta" que queremos arrumar
    let j = i - 1;
    let comparacoesNaIteracao = 0;
    let deslocamentosNaIteracao = 0;

    // Vai olhando para trás e arrastando os maiores pro lado
    while (j >= 0) {
      comparacoesNaIteracao++;
      comparacoesTotais++;

      if (arr[j] > key) {
        arr[j + 1] = arr[j]; // Empurra pro lado
        deslocamentosNaIteracao++;
        deslocamentosTotais++;
        j--;
      } else {
        break; // Achou o lugar, pode parar de procurar
      }
    }

    // Encaixa a "carta" no buraco correto
    arr[j + 1] = key;

    if (IMPRIMIR_ITERACOES) {
      console.log(`Iteração ${i}: [${arr.join(", ")}]`);
      console.log(
        `  -> Comparações: ${comparacoesNaIteracao} | Deslocamentos: ${deslocamentosNaIteracao}\n`,
      );
    }
  }

  if (IMPRIMIR_ITERACOES)
    console.log(
      `Total Insertion Sort: ${comparacoesTotais} comparações e ${deslocamentosTotais} deslocamentos.\n`,
    );
  return arr;
}

console.log(`Iniciando Insertion Sort...`);
console.time("Tempo do Insertion Sort");
insertionSort(arrayAleatorio);
console.timeEnd("Tempo do Insertion Sort");
