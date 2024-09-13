function sequencia(numero){
    if (numero < 0) {
        return false;
    }
    //primeiros numeros da sequencia
    let a = 0;
    let b = 1;

    if (numero === a || numero === b) {
        return true;
    }

    while (b < numero) {
        let valorAtual = b; //valorAtual armazena o valor de b
        b = a + b; //atualiaza o b para a soma de a + b
        a = valorAtual; //atualiza a para ser o valor antigo de b
    }

    return b === numero; //Verificação se b é igual a numero e retornamos true ou false.

}

const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "), 10);
if (sequencia(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
