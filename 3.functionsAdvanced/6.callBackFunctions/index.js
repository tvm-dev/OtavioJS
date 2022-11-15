/**
 * Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

Aqui está um pequeno exemplo:

function greeting(name) {
  alert('Olá ' + name);
}

function processUserInput(callback) {
  var name = prompt('Por favor insira seu nome.');
  callback(name);
}

processUserInput(greeting);
O exemplo acima é de uma synchronous callback, uma vez que é executada imediatamente.

Note, no entanto, que callbacks são normalmente utilizados para continuar a execução do código após uma operação asynchronous ser terminada — essas são chamadas asynchronous callbacks. Um bom exemplo são as funções callback executadas dentro de um bloco .then() encadeado ao final de uma promessa após essa promessa ser cumprida ou rejeitada. Essa estrutura é usada em muitas APIs da web modernas, como a fetch().
 */


function rand(min = 2000, max=10700){
const num = Math.random() * (max - min) + min
return Math.floor(num)
}
console.log(rand())



function f1(){
    setTimeout(function(){
        console.log('function 1!')
    }, rand())
}

function f2(){
    setTimeout(function(){
        console.log('function 2!')
    }, rand())
}

function f3(){
    setTimeout(function(){
        console.log('function 3!')
    }, rand())
}

f1()
f2()
f3()
console.log('Hello World')