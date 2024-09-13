const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

//valor total
let total = 0; 

//iteração nos valores dos estados e soma de cada valor na variavel total
for (const valor of Object.values(faturamentoPorEstado)) {
    total += valor;
}

//objeto vazia - vai ser usado para armazenar o valor de cada estado
const percentualRepresentado = {};

//loop que itera sobre cada par (chave: estado/valor: valor) 
for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
                              //retorna uma matriz de pares
    percentualRepresentado[estado] = ((valor / total)*100).toFixed(2);
    //calcula a fração do total que o valor do estado representa.
    //toFixed - formata a fração para 2 casas decimais
}

console.log("Valor Total: ", total.toFixed(2));
console.log("Percentuais de Representação: ");

for (const [estado, percentual] of Object.entries(percentualRepresentado)) {
    console.log(`${estado}: ${percentual}%`);
    //o loop itera sobre cada par retornado por Object.entries
}