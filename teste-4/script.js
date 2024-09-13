const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

function mostrarFaturamento() {

    let total = 0;

    for (const valor of Object.values(faturamentoPorEstado)) {
        total += valor;
    }

    const percentualRepresentado = {};

    for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {

        percentualRepresentado[estado] = ((valor / total) * 100).toFixed(2);
    }

    let resultado = `Valor Total: R$ ${total.toFixed(2)}\n\nPercentuais de Representação:\n`;
    for (const [estado, percentual] of Object.entries(percentualRepresentado)) {
        resultado += `${estado}: ${percentual}%\n`;
    }

    document.getElementById('resultado').innerText = resultado;
}
