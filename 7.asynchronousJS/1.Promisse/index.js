function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

//Resolve: it's mean that this code was executable sucessible, then resolve this for me.

//Reject: is the oposite from up.

function awaitThere(msg, time) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') 
        reject('Bad Values!')
        setTimeout(() => {
            //console.log()
            resolve(msg)
        }, time)
    })
};


awaitThere('Connecting with DB...', rand(1, 3))
.then(response => {
    console.log(response)
    return awaitThere('Finding datas request...', rand(1,3))
})
.then(response => {
    console.log(response)
    //return awaitThere('Downloading datas from API...', rand(1,3))
    return awaitThere(401, rand(1,3))
})
.then(response => {
    console.log(response)
}).then(() => {
    console.log(`All Done!`)
})
.catch(e => {
    console.log('Error:', e)
})

console.log(`Starting...`)






























// //No using Callbacks:
// function awaitThere(msg, time) {
//     //Using Callbacks:
// //function awaitThere(msg, time, cb) {
//     setTimeout(() => {
//         console.log(msg)
//         //Using Callbacks:
//   //      if(cb) cb()
//     }, time)
// }


























// awaitThere('Hello World 01', rand(1, 3))
// awaitThere('Hello World 02', rand(1, 3))
// awaitThere('Hello World 03', rand(1, 3))

//Using Callbacks:
// awaitThere('Hello World 01', rand(1, 3), function () {
//     awaitThere('Hello World 02', rand(1, 3), function () {
//         awaitThere('Hello World 03', rand(1, 3))

//     })

// })