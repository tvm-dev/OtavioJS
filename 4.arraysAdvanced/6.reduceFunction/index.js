//reduce function: reduce one array to one element, for exemple.

// ====> base arrays, etc:
const array1 = [1, 2, 3, 4, 5, 16, 32]
const persons = [
    {name: 'Thiago', age: 38},
    {name: 'eike', age: 12},
    {name: 'pp', age: 37},
    {name: 'pi', age: 4},
    {name: 'diva', age: 3},
    {name: 'henry', age: 3},
    {name: 'Lair', age: 73},
]
//----------------------
//const total = array1.reduce(function(accumulator, value, index, array){
//numbers par:
//const total = array1.reduce(function(accumulator, value, index, array){
// const total = array1.reduce(function(accumulator, value){
    //accumulator = accumulator = value //or
   // accumulator += value
    //console.log(accumulator, value)

    // //pair values:
    // if (value % 2 === 0)
    // accumulator.push(value);

    // //odd values:
    // if (value % 2 != 0)
    // accumulator.push(value)
    //  return accumulator


     //multiples of 8:
    //  if (value % 8 === 0)
    //  accumulator.push(value)
    //   return accumulator

      //return value with double of value:
//         accumulator.push(value * 2)
//       return accumulator

// }, [])//initial value received


// console.log(total)
 

const moreOld = persons.reduce(function(accumulator, value){
    if (accumulator.age > value.age) return accumulator
    return value
})
console.log(moreOld)