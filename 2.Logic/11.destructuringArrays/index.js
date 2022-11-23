//attribution via destructuring
// let a = 'A' //B
// let b = 'B' //C
// let c = 'C' //A

// const letters = [b, c, a];
// [a,b, c] = letters;
// console.log(a, b, c); 
/////////////////////////////////

//Pratice:
// const numbers = [100, 200, 300, 400, 5000]
// const [firstNumber, secondNumber, ...rest] = numbers
// console.log(firstNumber, secondNumber, rest)

//Arrays from arrays
const numbers = [
    [1,2,3],
    [4,5,6],
    [6,7,8]
]
//console.log(numbers[2][1])
//Complex now:
const [,[,,six]] = numbers
console.log(six)







