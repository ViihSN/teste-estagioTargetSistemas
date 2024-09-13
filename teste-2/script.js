function sequencia(numero){
    if (numero < 0) {
        return false;
    }
    
    let a = 0;
    let b = 1;

    if (numero === a || numero === b) {
        return true;
    }

    while (b < numero) {
        let valorAtual = b; 
        b = a + b; 
        a = valorAtual; 
    }

    return b === numero; 

}

function verificarSequencia() {
    
    const numero = parseInt(document.getElementById('inputNumber').value, 10);
    const resultado = sequencia(numero);
    const mensagem = resultado ? 
        `O número ${numero} pertence à sequência de Fibonacci.` :
        `O número ${numero} não pertence à sequência de Fibonacci.`;
    document.getElementById('resultado').innerText = mensagem;
}