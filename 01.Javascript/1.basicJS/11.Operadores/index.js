/** Operadores
 * Pós-Incremento: => contador++
 * Pré--Incremento: => ++contador
 * Pós-decremento: => contador--
 * Pré-decremento: => --contado
 
* Atribuição
 * % => resto da divisão 
 * ParseInt
 * PartFloat
 * Number
 */

let a = 30;
let b = 2;
let resultModule = a % b;
let potential = a ** b

console.log(resultModule)
console.log(potential)
console.log('###################');
let counter1 = 1
console.log(counter1++); //conta depois
console.log(counter1);


//Operadores de atribuição:
let counter2 = 50
console.log(++counter2); //conta antes
console.log(counter2);
console.log('###################');

const step = 5;
let counter3 = 10;
counter3 += step; // pega o counter3 e soma o step!, é igual a: "counter3 + counter3 + step"
console.log(counter3);

console.log('###################');
// parseint => convert uma string para um número inteiro! Ex:

let n1 = 10;
//let n2 = parseInt('5.2'); //só pega a parte inteira do 5.2
//let n2 = parseFloat('5.2'); //pega a parte inteira e a decimal do 5.2 e convert a string num numero!
let n2 = Number('5'); // jeito + novo e indicado, o js entende o numero que execula o calculo!
console.log(n1 + n2);
console.log(typeof n2)
console.log('###################');




