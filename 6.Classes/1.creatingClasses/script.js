//Buiding classes in JS

class Person {
    constructor(namee, surnamee) {
        this.namee = namee
        this.surnamee = surnamee
    }

    speak() { console.log(`${this.namee} is speaking...`)}
    // eat() { console.log( `${this.namee} is eating...` )}
    // drink() { console.log(`${this.namee} is drinking...`)}
}
//Using construction function:
function Person2(namee, surnamee){
    this.namee = namee
    this.surnamee = surnamee
}
Person2.prototype.speak = function(){
    console.log(`${this.namee} is speaking...`)
}


const p1 = new Person('thiago', 'viana')
const p2 = new Person2('eike', 'menezes')
console.log(p1)
console.log(p2)