//In this class, we wiil see: promise.all, promisse.race and promisse.resolve!

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function awaitThere(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Error tvm')
            return
        }


        setTimeout(() => {
            resolve(msg.toUpperCase() + ' I passed at promise!');
        }, time)
    })
}

//Promisse.All
const promises = [
   // 'First Value',
    awaitThere('Promisse 01', rand(1, 5)),
    awaitThere('Promisse 02', rand(1, 5)),
    awaitThere('Promisse 03', rand(1, 5))
    // awaitThere(3432, 1000),
    //'Last Value'
];

//Promise.all(promises) // => All => Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.

// Promise.race(promises) // race => Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.

//     .then(function (value) {
//         console.log(value)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

function downloadPage(){
    const pageCached = true

    if(pageCached){
        //return Promise.resolve('Page already Cached.')
        return Promise.reject('Page already Cached.') //Creates a new rejected promise for the provided reason.
    } else {
        return awaitThere('Page downloaded.', rand(1, 5))
    }
}

downloadPage()
.then(pageData => { //this treating happing when return is positive
    console.log(pageData)
})
//this treating happing when return is negative, for errors!
.catch(e => console.log('Error tvm:', e))