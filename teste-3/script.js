
const dadosFaturamento = {
    "Faturamentos de uma Distribuidora": [
        {
            "dia": "01-09-2024",
            "valor": 100.00
        },

        {
            "dia": "02-09-2024",
            "valor": 0.00
        },

        {
            "dia": "02-09-2024",
            "valor": 300.00
        },

        {
            "dia": "03-09-2024",
            "valor": 400.00
        },

        {
            "dia": "04-09-2024",
            "valor": 800.00
        },

        {
            "dia": "05-09-2024",
            "valor": 500.00
        },

        {
            "dia": "05-09-2024",
            "valor": 10.00
        },

        {
            "dia": "06-09-2024",
            "valor": 900.00
        },

        {
            "dia": "07-09-2024",
            "valor": 150.00
        },

        {
            "dia": "07-09-2024",
            "valor": 550.00
        },

        {
            "dia": "08-09-2024",
            "valor": 0.00
        },

        {
            "dia": "09-09-2024",
            "valor": 50.00
        },

    ]
};


function calculoDoFaturamento(valores) {


    const faturamentos = valores["Faturamentos de uma Distribuidora"];


    const diasFaturamento = faturamentos.filter(dia => dia.valor > 0);

    if (diasFaturamento.length === 0) {
        console.log("Nenhum dia com faturamento disponivel.");
        return;
    }


    const valoresFaturamento = diasFaturamento.map(dia => dia.valor);

    const menorFaturamento = Math.min(...valoresFaturamento);
    const maiorFaturamento = Math.max(...valoresFaturamento);

    let somarFaturamento = 0;
    for (const valor of valoresFaturamento) {
        somarFaturamento += valor;
    }

    const valorMensal = somarFaturamento / valoresFaturamento.length;

    const diasMaioresLucros = valoresFaturamento.filter(valor => valor > valorMensal).length;

    const resultado = `
        Menor valor de faturamento do mês: ${menorFaturamento.toFixed(2)}\n
        Maior valor de faturamento do mês: ${maiorFaturamento.toFixed(2)}\n
        Dias com maiores lucros de faturamento mensal: ${diasMaioresLucros}
    `;

    document.getElementById('resultado').innerText = resultado;
}

calculoDoFaturamento(dadosFaturamento);