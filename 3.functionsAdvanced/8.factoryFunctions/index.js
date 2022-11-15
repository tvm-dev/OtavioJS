//Functions that return objects

//When a function is inside the object, we call this function of method


//Método dentro do objeto abaixo:
function createPerson(namee, surName){
    return {
        namee, surName,
       // speak: function(subject){
        speak(subject){
            return `${namee} is talking about ${subject}`
        }
        //this make references the object that called it => this vai se referir a quem chamar o objeto!
    }
}
const person1 = createPerson('Thiago', 'Viana')
console.log(person1.speak('Your MERN Project...'))
console.log(person1.namee)