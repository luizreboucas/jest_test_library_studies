export function formataMaiorLanceDoLeilao(lances, valorInicial) {
  const maiorLance = lances.reduce(
    (maior, atual) => atual.valor > maior.valor ? atual : maior,
    valorInicial
  );
  return maiorLance;
}

