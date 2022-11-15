//Constructor functions: return objects and build things, automatically
//Method is a function inside the object!

function Person(name, surName){
    this.name = name;
    this.surName = surName;
    //return is not necessary!
}
const p1 = new Person('Thiago', 'Viana')
const p2 = new Person('Eike', 'Menezes')
//console.log(p1.name, p1.surName, p2.name, p2.surName);
