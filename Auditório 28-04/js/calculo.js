var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

function somar(){

    resultado.innerHTML = Number(n1.value) + Number(n2.value);

}

function subtrair(){

    resultado.innerHTML = Number(n1.value) - Number(n2.value);

}

function multiplicar(){

    resultado.innerHTML = Number(n1.value) * Number(n2.value);

}

function triangulo(){

    resultado.innerHTML = (Number(n1.value) * Number(n2.value))/2;

}

function quadrado(){

    resultado.innerHTML = Number(n1.value) * Number(n2.value);

}

function num1(){

    if( n1.value % 2 === 0){

        resultado.innerHTML = "Par";

    }

    else{

         resultado.innerHTML = "Ímpar";

    }

}

function num2(){

    if( n2.value % 2 === 0){

        resultado.innerHTML = "Par";

    }

    else{

         resultado.innerHTML = "Ímpar";

    }

}



function dividir(){

    if(Number(n2.value) === 0){

        resultado.innerHTML = 'Erro: Divisão por zero.';

    }

    else{

        resultado.innerHTML = Number(n1.value) / Number(n2.value);

    }

}




var ida = document.querySelector('#ida');
var  verifica = document.querySelector('#verifica');


function idade(){

if(Number(ida.value) >= 18){

    verifica.innerHTML = "Maior de Idade.";

}
else{

    verifica.innerHTML = "Menor de Idade.";

}

}