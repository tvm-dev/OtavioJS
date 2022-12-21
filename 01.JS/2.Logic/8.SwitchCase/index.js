// const date = new Date()
// let weekDay = date.getDay()
// let weekDayText

// switch (weekDay) {
//     case 0:
//         weekDayText = 'Sunday'
//         break;
//     case 1:
//         weekDayText = 'Monday'
//         break;
//     case 2:
//         weekDayText = 'Tuesday'
//         break;
//     case 3:
//         weekDayText = 'Wednesday'
//         break;
//     case 4:
//         weekDayText = 'Thursday'
//         break;
//     case 5:
//         weekDayText = 'Friday'
//         break;
//     case 6:
//         weekDayText = 'Saturday'
//         break;

//     default: 'Date Error!'
//         break;
// }

// console.log(weekDay, weekDayText)

//Using Swith inside function:

function getDayWeekText(weekDay) {
    let weekDayText

    switch (weekDay) {
        case 0:
            weekDayText = 'Sunday'
            return weekDayText
        case 1:
            weekDayText = 'Monday'
            return weekDayText
        case 2:
            weekDayText = 'Tuesday'
            return weekDayText
        case 3:
            weekDayText = 'Wednesday'
            return weekDayText
        case 4:
            weekDayText = 'Thursday'
            return weekDayText
        case 5:
            weekDayText = 'Friday'
            return weekDayText
        case 6:
            weekDayText = 'Saturday'
            return weekDayText

        default: 'Date Error!'
            return weekDayText
    }
}

const date = new Date()
let weekDay = date.getDay()
const weekDayText = getDayWeekText(weekDay);
console.log(weekDay, weekDayText)
