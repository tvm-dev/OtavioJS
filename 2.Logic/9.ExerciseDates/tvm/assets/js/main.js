//SwithCase for WeekDay
function getDayWeekText(weekDay) {
    let weekDayText

    switch (weekDay) {
        case 0:
            weekDayText = 'Domingo'
            return weekDayText
        case 1:
            weekDayText = 'Segunda-Feira'
            return weekDayText
        case 2:
            weekDayText = 'Terça-Feira'
            return weekDayText
        case 3:
            weekDayText = 'Quarta-Feira'
            return weekDayText
        case 4:
            weekDayText = 'Quinta-Feira'
            return weekDayText
        case 5:
            weekDayText = 'Sexta-Feira'
            return weekDayText
        case 6:
            weekDayText = 'Sábado'
            return weekDayText

        default: 'Date Error!'
            return weekDayText
    }
}

//SwithCase for Month of years
//    getMonthText = obter mes do ano em extenso
//    monthInDay = mes em numero
//    monthYear = mes do ano em text

function getMonthText(monthInDay) {
    let MonthText

    switch (monthInDay) {
        case 0:
            MonthText = 'Janeiro'
            return MonthText
        case 1:
            MonthText = 'Fevereiro'
            return MonthText
        case 2:
            MonthText = 'Março'
            return MonthText
        case 3:
            MonthText = 'Abril'
            return MonthText
        case 4:
            MonthText = 'Maio'
            return MonthText
        case 5:
            MonthText = 'Junho'
            return MonthText
        case 6:
            MonthText = 'Julho'
            return MonthText
        case 7:
            MonthText = 'Agosto'
            return MonthText
        case 8:
            MonthText = 'Setembro'
            return MonthText
        case 9:
            MonthText = 'Outubro'
            return MonthText
        case 10:
            MonthText = 'Novembro'
            return MonthText
        case 11:
            MonthText = 'Dezembro'
            return MonthText
       
        default: 'Month Error!'
            return ''
    }
}

function leftZero(num){
    return num >= 10 ? num : `0${num}`
}




let date = new Date()
let weekDay = date.getDay()
let dayMonth = date.getDate()
let monthInDay = date.getMonth()
document.getElementById('p').innerHTML = `${getDayWeekText(weekDay)}, ${dayMonth} de ${getMonthText(monthInDay)} de ${date.getFullYear()} - ${leftZero(date.getHours())}:${leftZero( date.getMinutes())}:${leftZero(date.getSeconds())}`
