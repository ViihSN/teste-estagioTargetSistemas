function inverterString() {
    
    const input = document.getElementById('inputString').value;
    
    const array = input.split('');
    
    const invertindoArray = array.reverse();
    
    const invertindoStr = invertindoArray.join('');

    document.getElementById('result').innerText = invertindoStr;
}
