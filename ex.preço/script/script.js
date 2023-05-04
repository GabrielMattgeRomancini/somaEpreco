let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let Botao = document.querySelector("#Botao");
let soma = document.querySelector("#soma");

function alterarTexto(){
    let a = Number(num1.value);
    let b = Number(num2.value);
    soma.innerHTML = a - b;
}

Botao.onclick = function(){
    alterarTexto();
}



