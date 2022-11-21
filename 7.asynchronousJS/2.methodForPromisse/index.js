function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
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


///see promise.all AND promisse.race
