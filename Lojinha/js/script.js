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
var quantidade = [0 , 0 , 0];
var precos = [33925.00 , 7424 , 170.90];


function Mais(produto){

    quantidade[produto]++;
    spansQuantidade[produto].innerHTML = quantidade[produto];
    spansTotal[produto].innerHTML = precos[produto] * quantidade[produto];
}

function Menos(produto){
    if(quantidade[produto] > 0){
    quantidade[produto]--;
    spansQuantidade[produto].innerHTML = quantidade[produto];
    spansTotal[produto].innerHTML = precos[produto] * quantidade[produto];
    }

}

