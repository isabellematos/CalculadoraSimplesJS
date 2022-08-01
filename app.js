'use strict';

function calculoSoma (){
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const resultado = document.getElementById('resultado');
    
    let operacao1 = parseFloat(numero1) + parseFloat(numero2);
   
    resultado.textContent = operacao1;
}

function calculoSubtrair (){
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const resultado = document.getElementById('resultado');
    
    let operacao2 = parseFloat(numero1) - parseFloat(numero2);
   
    resultado.textContent = operacao2;
}

function calculoMultiplicar (){
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const resultado = document.getElementById('resultado');
    
    let operacao3 = parseFloat (numero1) * parseFloat (numero2);
  
    resultado.textContent = operacao3;
}

function calculoDividir (){
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const resultado = document.getElementById('resultado');

    let operacao4 = parseFloat (numero1) / parseFloat (numero2);
   
    resultado.textContent = operacao4;
}



document.getElementById('somar').addEventListener('click',  calculoSoma);
document.getElementById('subtrair').addEventListener('click', calculoSubtrair);
document.getElementById('multiplicar').addEventListener('click', calculoMultiplicar);
document.getElementById('dividir').addEventListener('click', calculoDividir);