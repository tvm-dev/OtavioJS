/**
 * instructions:
 * a) filter pais
 * b) double pairs
 * c) sum all values
 */

// const numbers = [1,2,3,4,5]
// const pairNumbers = numbers.filter(function(value){
//     return value % 2 === 0
// }).map(function(value){
//     return value * 2
// }).reduce(function(ac, value){
//     return ac + value
// })
// console.log(pairNumbers)

// =====> using arrow functions:
const numbers = [1,2,3,4,5]

const pairNumbers = numbers
.filter(value => value % 2 === 0)
.map(value => value * 2)
.reduce((ac, value) => ac + value)

console.log(pairNumbers);