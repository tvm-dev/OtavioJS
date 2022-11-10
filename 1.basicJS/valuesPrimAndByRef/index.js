//let a = 'tvm'
//let a = 1;
//let a = true;
//let a = undefined;
//let a = null;
//let a = BigInt;
//let a = Symbol;

// //This can be do
// let a = 'tvm';
// a = 'eike'

//This can't be do
// const a = 'tvm'; //use const
// a = 'eike'

//This can be do
// var a = 'tvm';
// a = 'eike'

//Mutable Reference: array, object and functions, are values copied!
//Imutable Reference: let, is value passed by reference

let a = [1,2,3]
//item below is interesting...
let b = [...a] //doing sprety. Value a was copied to variable b. value of b is indepedent.   
console.log(a, b)
a.push(5)
console.log(a, b)
b.pop()
console.log(a, b)