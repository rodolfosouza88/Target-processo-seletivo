function inverterString(str) {
    let resultado = "";
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// Testando
const texto = "Desenvolvimento";
console.log(`String original: ${texto}`);
console.log(`String invertida: ${inverterString(texto)}`);
