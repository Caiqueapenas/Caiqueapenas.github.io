/*============================|
=========Quiz Script==========|
==============================|
==@Author: Carlos Henrique====|
========@version:0.1==========|
==============================|
=============================*/


//===============FORMULÁRIO===============\\


const init = function(){
    document.getElementById('botao-enviar').addEventListener('click', enviar) 
}

const enviar = function(ev){
    ev.preventDefault()  
    ev.stopPropagation() 
    //or the click will travel to the 

var vazio = null || undefined || ""
 //inputs for text, email, tel, color, number...
    let nome = document.getElementById('fnome') 
    
    //.value, .defaultValue, length of value    //genero
    let genero = document.getElementById('fgender') 
    // .selectedIndex  .options  .length   .selectedValue  .value

if (genero.selectedIndex < 1 && nome.value === vazio) {
  alert(`[ERRO]\nDigite um NOME válido!`)
  alert('[ERRO2]\nEscolha um GÊNERO válido!')
  
} else if (nome.value === vazio) {
  alert(`[ERRO]\nA opção NOME não pode ficar vazia!`)
} else if (genero.selectedIndex < 1) {
  alert('[ERRO]\nA opção GÊNERO não pode ficar vazia!')
}
    else {
        
      document.getElementById('form-user').submit() 
      
      }
} 
document.addEventListener('DOMContentLoaded', init) 

//===============RECUPERAR FORMULÁRIO===============\\




    //const sexo = document.getElementById('sexo')
    




/*
    function carregar(){
        
        var x = document.getElementById('txt')
        var sexoM = (`Seja bem vindo, ${nome}!`)

        if(genero > 0){
            alert('alo')
        }
    
      
    }
*/



    /*
	var value = genero.options[genero.selectedIndex].value;   
    var sexoM = (`Seja bem vindo, ${nome}!`)
    var sexoF = (`Seja bem vinda, ${nome}!`)
    var sexoX = (`Seja bem vinde, ${nome}!`)
    
    
    if(genero.selectedIndex==1){
        alert(`ass`)
        
        }else if(genero == value[2]){
        genero.innerHTML = `${sexoF}`
        }else(genero == value[3]){
        genero.innerHTML = `${sexoX}`
        }


        
    */
    











//===============ANOTAÇÕES===============\\

// # Corrigir bug de nome grande > estabelecer limite de caracteres para o prompt(nome)
// # Adicionar função de acessibilidade sr-only no html