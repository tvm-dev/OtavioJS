// //The word 'function' was on arguments that sustainable all arguments passed.
// function newFunction(a,b,c){
//     let total = 0

//     for (let argument of arguments){
//         total += argument
//     }
//     console.log(total, a,b,c)
// }

// newFunction(1, 2, 3, 55,556)

//function newFunction2(a,b){
// function newFunction2(a, b = 1) {
//     b = b || 1; // Old method to resolve this problem with empty variables
//     console.log(a + b)
// }
// newFunction2(2)

const account = (...args) => {
    console.log(args)
}
account('+', 1, 2, 3, 4, 5)


















