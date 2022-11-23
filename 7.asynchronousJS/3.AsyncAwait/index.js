//Async and Await class:

function rand(min = 0, max = 3) {
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
            resolve(msg.toUpperCase() + ' => passed at promise!');
        }, time)
    })
}

//Code old way, without Async and Await
// awaitThere('Stage 01', rand())
//     .then(value => {
//         console.log(value)
//         return awaitThere('Stage 02', rand())
//     })
//     .then(stage => {
//         console.log(stage)
//         return awaitThere('Stage 03')
//     })
//     .then(stage => {
//         console.log(stage)
//     })
//     .catch(e => console.log(e))

//Using Async and Await:

async function execute() {
    try {

   /* comments... */ const stage01 = await awaitThere('Stage 01', rand())
        console.log(stage01)

    /* comments... */ const stage02 = awaitThere('Stage 02', rand())
        console.log(stage02)

    /* comments... */ const stage03 = await awaitThere('Stage 03', rand())
        console.log(stage03)

        console.log('We finished at: ', stage03)
    } catch (e) {
        console.log(e)
    }
}
execute()


