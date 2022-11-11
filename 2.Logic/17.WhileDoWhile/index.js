/**
 * When we do not know when the loop will be finish, we use while
 * 
 *  while (condition) {
 *  what to-do here
 *  }
 * 
 * While: check the conditions and after execute the code
 * Do While: to-do and after check! 
*/

// let i = 0
// let final = 10

// while(i < final){
//     i++
//     console.log(i)
// }

//Function to generate a aleatory number
function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 1
const max = 50
let rand = random(min, max)

// while (rand !== 10) {
//     rand = random(min, max)
//     console.log(rand)
//    } 


   do {
    rand = random(min, max)
    console.log(rand)

   } while(rand !== 10 )
