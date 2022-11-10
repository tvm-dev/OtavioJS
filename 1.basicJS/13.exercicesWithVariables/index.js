let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
//console.log(varA, varB, varC)

/* Maneira 1
varD = varA;
varA = varB;
varB = varC;
varC = varD;
console.log(varA, varB, varC)
 */

// Maneira 2
//[varA, varB, varC] = [1, 2, 3]
[varA, varB, varC] = [varB, varC, varA] //métod bem + moderno do JS atual

console.log(varA, varB, varC)
 
 