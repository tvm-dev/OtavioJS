const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]
//const array3 = array1 + array2
//Using .concat:
//const array3 = array1.concat(array2, [9, 10])

// console.log(array3)
// console.log(typeof array1, typeof array2, typeof array3)
//Using spred:
const array3 = [...array1, 'tvm', ...array2, ...[9,10]]

console.log(array3)