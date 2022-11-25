//Literal method:
// const person = {
//     name: 'thiago',
//     surName: 'viana'
// }


//how to access datas from this object:
//Way 1:
//console.log(person.name, person.surName)
//Way 2:
//console.log(person['name'], person['surName'])
// let anyData = 'name'
// console.log(person[anyData]) //accessing by dynamic value, using variable let 'name'

//other ways to declare one object: constructor method
// const person1 = new Object()
// person1.name = 'eike';
// person1.surName = 'menezes'
// person1.age = 38
// person1.speakName = function(){
//     return (`${this.name} is speaking your name!`)
// }
// person1.getBirthdate = function(){
//     const currentYear = new Date()
//     return currentYear.getFullYear() - this.age
// }

//delete person1.name //delete one key from object
//delete person1.surName
//console.log(person1.name, person1.surName)
//console.log(person1.getBirthdate())

// =====> using for in to see the keys:
// for (let key in person1){
//     console.log(person1[key])
// } 
//When functions are insides objects, they are call objects!

function Person(name, surName){
    this.name = name,
    this.surName = surName
}
const p1 = new Person('thiago','viana')
Object.freeze(p1) //this freeze the new instance from function Person
p1.name = 'any new name'
const p2 = new Person('Maria', 'Silva')

console.log(p1)
console.log(p2)
