// const date = new Date();
// console.log('Day', date.getDate())
// console.log('Month', date.getMonth())
// console.log('Year', date.getFullYear())
// console.log('Hour', date.getHours())
// console.log('Min', date.getMinutes())
// console.log('Sec', date.getSeconds())
// console.log('ms', date.getMilliseconds())
// console.log('Week Day', date.getDay())
// console.log(date.toString())
// console.log(Date.now())

//Function Format Date:
function leftZero(num){
    return num >= 10 ? num : `0${num}`
}

function formatDate(){
const day = leftZero(date.getDate())
const month = leftZero(date.getMonth() + 1)
const year = leftZero(date.getFullYear())
const hour = leftZero(date.getHours())
const min = leftZero(date.getMinutes())
const sec = leftZero(date.getSeconds())
return `${day}/${month}/${year} - ${hour}:${min}:${sec}`
}

const date = new Date()
const brazilDate = formatDate(date)
console.log(brazilDate)

