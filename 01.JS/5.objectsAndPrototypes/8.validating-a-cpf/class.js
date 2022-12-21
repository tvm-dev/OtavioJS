//removing numbers from cpf using regular expression

let cpf = '219.540.108-77'
let cpfOnlyNumbers = cpf.replace(/\D+/g, '')

console.log(cpf)
//Without numbers
console.log(cpfOnlyNumbers)
//Transformating string to array:
cpfArray = Array.from(cpfOnlyNumbers)
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));