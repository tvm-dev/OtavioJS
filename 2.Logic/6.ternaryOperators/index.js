//New if-else
//ternary operator -> if shortly

//Old If: example
// const userPoints = 999
// if (userPoints >= 1000){
//     console.log('VIP User')
// } else {
//     console.log('Normal User')
// }

//new way, more shortly:
const userPoints2 = 5000
//Struture -> (condition) ? 'true value' : 'false value' 
const userLevel = userPoints2 >= 1000 ? 'VIP User' : 'Normal User'
console.log(userLevel)