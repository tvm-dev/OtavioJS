/**
 * Avaliação de curto-circuito, avaliação mínima ou avaliação de McCarthy especifica a semântica de alguns operadores booleanos em algumas linguagens de programação na qual o ****
 * 
 * o segundo argumento é apenas executado ou avaliado se o primeiro argumento não for suficiente para determinar o valor da expressão!
 * 
 * 
 */
/**
 * && -> false && true && "the same value"
 * || -> 
 * Falsy values in JS: 0, ', "", ``, null, undefined and NaN
 */

// console.log('tvm' && 0 && 'Maria') //JS check two values and return the last value: Maria, if don't exist falses values,lik below:

// console.log('tvm' && 'Maria') //JS check two values and return the last value: Maria

// console.log('tvm' && '' && 'Maria') //JS check two values and return the false value, is this case: ' '

//Short Circuit AND
// function sayHi(){
//     return 'Hi'
// }
// const goExecute = 'tvm' //OK
// //const goExecute = '' //shortCircuit
// console.log(goExecute && sayHi)

//Short Circuit OR
console.log(0 || null || undefined || false || 'tvm' || true)//Return the first true value -> tvm



























