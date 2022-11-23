function showHour(){
    let date = new Date();

    return date.toLocaleString('pt-BR', {
    //return date.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}


const timer = setInterval(function(){
    console.log(showHour())
}, 1000)
// //==============================================
setTimeout(function(){
    clearInterval(timer + 1) //stop function setInterval
}, 5000)
