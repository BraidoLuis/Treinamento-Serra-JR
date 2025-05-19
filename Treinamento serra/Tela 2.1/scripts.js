function soma(){
    var valor1 = parseFloat(document.getElementById('n1').value);
    var valor2 = parseFloat(document.getElementById('n2').value);
    document.getElementById('result1').value = valor1 + valor2;
}

function subtracao(){
    var valor1 = parseFloat(document.getElementById('nu1').value);
    var valor2 = parseFloat(document.getElementById('nu2').value);
    document.getElementById('result2').value = valor1 - valor2;
}

function multiplicacao(){
    var valor1 = parseFloat(document.getElementById('num1').value);
    var valor2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('result3').value = valor1 * valor2;
}

function divisao(){
    var valor1 = parseFloat(document.getElementById('nume1').value);
    var valor2 = parseFloat(document.getElementById('nume2').value);
    document.getElementById('result4').value = valor1 / valor2;
}
