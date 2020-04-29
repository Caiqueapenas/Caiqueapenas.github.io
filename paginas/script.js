/*============================|
=========Quiz Script==========|
==============================|
==@Author: Carlos Henrique====|
========@version:0.1==========|
==============================|
=============================*/
/*
var nome = prompt('[Passo 1 de 2]\n\nPor favor, digite seu nome:\n\n[Os dados não podem ficar em branco]')

var pgt = prompt('[Passo 2 de 2]\n\nPara prosseguir, informe o seu sexo.\nUse M para masculino, F para feminino ou O para outros.\n\n[Os dados não podem ficar em branco]') 
*/
function carregar(){

var sexo = document.getElementById('sexo')
var sexoM = (`Seja bem vindo, ${nome}!`)
var sexoF = (`Seja bem vinda, ${nome}!`)
var sexoX = (`Seja bem vinde, ${nome}!`)


if(pgt == 'M' || pgt == 'm'){
    sexo.innerHTML = `${sexoM}`
    }else if(pgt == 'F'  || pgt == 'f'){
    sexo.innerHTML = `${sexoF}`
    }else if(pgt == 'O' ||pgt == 'o'){
    sexo.innerHTML = `${sexoX}`
    }else{
    location.href = 'erro.html'
}
 
if(nome == null || nome == ""){
    location.href = 'erro-nome.html'
    
}


}


//===============ANOTAÇÕES===============\\

// # Corrigir bug de nome grande > estabelecer limite de caracteres para o prompt(nome)
// # Adicionar função de acessibilidade sr-only no html