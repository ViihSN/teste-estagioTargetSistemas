//Declaração de dados - JSON
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

//nome da função: calculoDoFaturamento - argumento: valores
function calculoDoFaturamento(valores) {
    
    //inicialização de um arrey com os valores do JSON (faturamentos de uma distribuidora)
    const faturamentos = valores["Faturamentos de uma Distribuidora"];
    
    //metodo filter 
    const diasFaturamento = faturamentos.filter(dia => dia.valor > 0);
    
    //verifica se diasFaturamento esta "vazio", se estiver, exibe a mensagem e a função termina no return
    if (diasFaturamento.length === 0) {
        console.log("Nenhum dia com faturamento disponivel.");
        return;
    }

    //map cria um array apenas com valores filtrados
    const valoresFaturamento = diasFaturamento.map(dia => dia.valor);

    //calcula os valores através do Math(min e max).
    const menorFaturamento = Math.min(...valoresFaturamento);
    const maiorFaturamento = Math.max(...valoresFaturamento);

    //armazena a soma dos valores de faturamento - o loop soma todos os valores
    let somarFaturamento = 0;
    for (const valor of valoresFaturamento) {
        somarFaturamento += valor;
    }

    //calcula o valor médio dividindo a soma total pelo numeros de dias.
    const valorMensal = somarFaturamento / valoresFaturamento.length;

    //filtra valores maiores que o valor médio
    const diasMaioresLucros = valoresFaturamento.filter(valor => valor > valorMensal).length;

    //mostra os resultados
    console.log(`Menor valor de faturamento do mês: ${menorFaturamento}`);
    console.log(`Maior valor de faturamento do mês: ${maiorFaturamento}`);
    console.log(`Dias com maiores lucros de faturamento mensal: ${diasMaioresLucros}`);
}

//chamada da função com o objeto como argumento.
calculoDoFaturamento(dadosFaturamento);