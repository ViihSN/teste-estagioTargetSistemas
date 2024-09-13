function inverterString() {
    
    const input = document.getElementById('inputString').value;

    
    const array = input.split('');

    // Invertendo o array de caracteres
    const invertindoArray = array.reverse();

    // Juntando os caracteres do array invertido de volta em uma string
    const invertindoStr = invertindoArray.join('');

    // Exibindo o resultado na página
    document.getElementById('result').innerText = invertindoStr;
}
