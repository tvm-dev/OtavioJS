/*
- Prototypes: is the word used to refer to any create by first time, and will serve the mold for te future productins!
- The internal reference to JS prototypes are '__Photo__'(from prototypes) in browsers.
- 
*/

//Contruction function => mold(class)
function Person(name, surName){
    this.name = name,
    this.surName = surName,
    this.fullName = () => this.name + ' ' + this.surName
}

const p1 = new Person('Thiago', 'V.')// <- person = construction function
const date = new Date()// <- Date = construction function

console.dir(p1)
console.dir(date)