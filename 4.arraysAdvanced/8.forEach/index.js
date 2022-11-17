//forEach are avaliable only inside arrays!

const a = [1,2,3,4,5]

//=====> using classic for:
// for (let value of a){
//     console.log(value)
// }

//=====> using forEach:
a.forEach(v => console.log(v))

let total = 0
a.forEach(v => total += v)
console.log(total)
