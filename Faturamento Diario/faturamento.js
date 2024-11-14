const faturamento = [1000, 2000, 0, 1500, 3000, 0, 0, 4000, 2500]; // Exemplo de valores

function calcularFaturamento(dados) {
    const diasComFaturamento = dados.filter(valor => valor > 0);
    const menor = Math.min(...diasComFaturamento);
    const maior = Math.max(...diasComFaturamento);
    const media = diasComFaturamento.reduce((acc, val) => acc + val, 0) / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > media).length;

    return {
        menor,
        maior,
        diasAcimaDaMedia,
    };
}

const resultado = calcularFaturamento(faturamento);
console.log(`Menor valor: ${resultado.menor}`);
console.log(`Maior valor: ${resultado.maior}`);
console.log(`Dias acima da média: ${resultado.diasAcimaDaMedia}`);
