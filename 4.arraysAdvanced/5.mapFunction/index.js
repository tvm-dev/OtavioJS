//Array base:
const arrayTVM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//===

// const doubleValue = arrayTVM.map(function(value){
//     return value * 2
// })
// console.log(doubleValue)

// ====> Using arrow functions:
// const doubleValue = arrayTVM.map(value => value * 2)
// console.log(doubleValue)


const persons = [
    {name: 'Thiago', age: 38},
    {name: 'eike', age: 12},
    {name: 'pp', age: 37},
    {name: 'pi', age: 4},
    {name: 'diva', age: 3},
    {name: 'henry', age: 3},
]

// const names = persons.map(obj => obj.name)//only show names
// delete obj.names
// console.log(names)

// const ages = persons.map(obj => obj.age) //only sho ages
// console.log(ages)

//Add IDs
// const withIDs = persons.map(function(obj, index){
//     obj.id = index + 1
//     return obj
// })
//console.log(withIDs)
console.log(persons)