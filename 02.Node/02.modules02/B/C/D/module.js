// module.exports = function(x,y){
//     return x * y
// }

//for execute:
//console.log(module.exports(2,6))

module.exports = class Dog {
    constructor(namee) {
        this.namee = namee;
    }
    bark() {
        console.log(`${this.namee} is barking...`)
    }

}