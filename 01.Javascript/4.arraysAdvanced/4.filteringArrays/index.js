// ===>filter, map and reduce

// const numbers = [1, 3, 5, 7, 9, 11, 13, 15]

//1) ===> returning values bigger than 10:
// const bigger10 = numbers.filter(callBackFilter)
// function callBackFilter(value, index, array) {
//     if (value > 10) {
//         return true
//     } else {
//         return false
//     }


// }
// console.log(bigger10)
//===> or Way 2
// const numbers = [1, 3, 5, 7, 9, 11, 13, 15]
// const bigger10 = numbers.filter(callBackFilter)
// function callBackFilter(value) {
//     return value > 10
// }
// console.log(bigger10)

// const bigger10 = numbers.filter(function(value){
//     return value > 10
// })
// console.log(bigger10)

//===> Using arrow functions:
// const numbers = [1, 3, 5, 7, 9, 11, 13, 15]
// const bigger10 = numbers.filter((value) => {
//     return value > 10
// })
// console.log(bigger10)

// // ===> Using arrow functions with one arguments:
// const numbers = [1, 3, 5, 7, 9, 11, 13, 15]
// const bigger10 = numbers.filter(value => {return value > 10})

// console.log(bigger10)

// ===> Using arrow functions with one arguments, () and return:
//callback function:
// const numbers = [1, 3, 5, 7, 9, 11]
// const filteredNumberns = numbers.filter(value => value > 1)
// console.log(filteredNumberns)

//====================================================
const persons = [
    {name: 'Thiago', age: 38},
    {name: 'eike', age: 12},
    {name: 'pp', age: 37},
    {name: 'pi', age: 4},
    {name: 'diva', age: 3},
    {name: 'henry', age: 3},
]

// // =====> returning names bigger than 5 letters:
// const persons5Letters = persons.filter(function(obj){
//     return obj.name.length >= 3
// })
// console.log(persons5Letters)

// =====> returning names bigger than 5 letters using arrow functions:
// const persons5Letters = persons.filter(obj => obj.name.length >= 3)
// console.log(persons5Letters)

// // =====> returning person bigget than 50 years old:
// const persons50Years = persons.filter(obj => obj.age > 50)
// console.log(persons50Years)


// =====> returning people that terminat name with 'a':
const personTerminatLetterA = persons.filter(obj => {
   //return obj.name.toLowerCase().endsWith('a')
   return obj.name.toLowerCase().startsWith('p')

})
console.log(personTerminatLetterA)
