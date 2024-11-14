function isFibonacci(num) {
    let a = 0, b = 1, temp;
    while (a < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return a === num;
}

// Testando o número
const numero = 21; // Informe o número aqui
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
