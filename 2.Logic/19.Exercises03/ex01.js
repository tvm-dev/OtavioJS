//### => Method one:

// function getLarger(n1, n2){
//     if (n1 > n2) {
//         return (n1)
//     } else {
//         return(n2)
//     }
// };
// console.log(getLarger(5, 10))

//### => method two:
// function getLarger(n1, n2){
//     if (n1 > n2){
//         return n1
//     } return n2
// } 
//### => method three -> Ternary if :
// function getLarger(n1, n2){ return n1 > n2 ? n1 : n2} 
// console.log(getLarger(5, 10))

//### => method 4 -> Arrow function + Ternary if:
const getLarger = (n1, n2) => n1 > n2 ? n1 : n2
console.log(getLarger(50, 10))
