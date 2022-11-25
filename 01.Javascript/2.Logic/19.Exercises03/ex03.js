/**
 * fizzBuzz Exercise
 */

//tvm solution:
// function fizzBuzz(input) {
//     //check if input is a number:
//     if (isNaN(input)) {
//         console.log((`${input}: is not a number: script stopped!`))
//         return
//     } else {
//         console.log(`${input} is a number!`)
//     }

//     //Checking divisions:
//     if (input % 3 === 0 && input % 5 === 0) {
//         console.log(`${input}  => fizzBuzz`)
//     } else if (input % 3 === 0) {
//         console.log(`${input} => Fizz`)
//     } else if (input % 5 === 0) {
//         console.log(`${input} => Buzz`)
//     } else if (input % 3 !== 0 && input % 5 !== 0) {
//         console.log(input)
//     } else {
//         console.log(input)
//         }
//     };

//     for (let i = 0; i <= 15; i++) {
//         console.log(i, fizzBuzz(i))
//     }

//    console.log(fizzBuzz(1))

//Professor Solution:

function fizzBuzz(n){
    if (typeof n !== 'number') return n
    if (n % 3 === 0 && n % 5 ===0 ) return 'FizzBuzz'
    if (n % 3 === 0) return 'Fizz'
    if (n % 5 === 0) return 'Buzz'
    return n
}

console.log('a', fizzBuzz('a'))

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
    }


