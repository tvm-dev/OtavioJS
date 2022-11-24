// const namee = 'Thiago'
// const surName = 'Viana'
// const age = 38

// function sum(x, y){
//     return x + y
// }

// //Making exportation on the end:
// export {namee as customerName, surName, age, sum}
//================

// //Making exportation on the start:
// export const namee = 'Thiago'
// export const surName = 'Viana'
// export const age = 38

const namee = 'Thiago'
const surName = 'Viana'
const age = 38

//Using default on export:
//export default function sum(x, y){
function sum(x, y){
    return x + y
}

export default (x,y) => x * y

//Exporting Class:
// export class Person{
//     constructor(namee, surName){
//         this.namee = namee
//         this.surName = surName
//     }
// }

//Create but don't export:
const cpf = 242342343242342

//Another way to export:
export { namee, surName , age, sum}