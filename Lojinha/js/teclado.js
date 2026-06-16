var spansQuantidade = [
    document.querySelector('#Quant1'),
    document.querySelector('#Quant2'),
    document.querySelector('#Quant3')
];
var spansTotal = [
    document.querySelector('#final'),
    document.querySelector('#final1'),
    document.querySelector('#final2')
];
var Subt = document.querySelector('#Subt')
var sub = 0;
var total = 0;
var quantidade = [0 , 0 , 0];
var precos = [33925.00 , 7424.00 , 170.90];
var total = [0 , 0 , 0];


function Mais(produto){

    quantidade[produto]++;
    spansQuantidade[produto].innerHTML = quantidade[produto];
    total = precos[produto] * quantidade[produto];
    spansTotal[produto].innerHTML = total.toFixed(2);
    sub = (quantidade[0] * precos[0]) + (quantidade[1] * precos[1]) + (quantidade[2] * precos[2]);
    Subt.innerHTML = sub.toFixed(2);
}

function Menos(produto){
    if(quantidade[produto] > 1){
    quantidade[produto]--;
    spansQuantidade[produto].innerHTML = quantidade[produto];
    total = precos[produto] * quantidade[produto];
    spansTotal[produto].innerHTML = total.toFixed(2);
    sub = (quantidade[0] * precos[0]) + (quantidade[1] * precos[1]) + (quantidade[2] * precos[2]);
    Subt.innerHTML = sub.toFixed(2);
    }

}

