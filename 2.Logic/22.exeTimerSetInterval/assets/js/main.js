function watchFn(){
    const watch = document.querySelector('.watch')
//It's no more necessary select all the buttons, because the 'e.target' to this already!
// const start = document.querySelector('.start')
// const pause = document.querySelector('.pause')
// const reset = document.querySelector('.reset')

function createSeconds() {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

let seconds = 0
let timer;

function startClock() {
    timer = setInterval(function () {
        seconds++
        watch.innerHTML = createSeconds(seconds)
    }, 1000)
}

document.addEventListener('click', function (e) {
    //console.log(e.target)
    const elementClicked = e.target
    if (elementClicked.classList.contains('reset')) {
        //console.log('You clicked on reset button')
        clearInterval()
        watch.innerHTML = '00:00:00'
        seconds = 0
        watch.classList.remove('paused')
    }

    if (elementClicked.classList.contains('start')) {
        clearInterval(timer)
        watch.classList.remove('paused')
        startClock()
      
    }

    if (elementClicked.classList.contains('pause')) {
        watch.classList.add('paused')
        clearInterval(timer)
     
    }
})





// start.addEventListener('click', function (event) {
//     // watch.classList.remove('paused')
//     // startClock()
// })

// pause.addEventListener('click', function (event) {
//     // watch.classList.add('paused')
//     // clearInterval(timer)
// })

// reset.addEventListener('click', function (event) {
//     // clearInterval()
//     // watch.innerHTML = '00:00:00'
//     // seconds = 0
//     // watch.classList.remove('paused')
// })


}

watchFn()