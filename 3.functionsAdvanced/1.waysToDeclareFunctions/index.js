function sayHi(){
console.log('Hi')
}

// function executeFunction(newFunction){
//     sayHi()
// }

// executeFunction()

//Aero Functions:
// const aeroFunction = () => {
//     console.log(`I'm a aero function`)
// }
// aeroFunction()

// setInterval(function() {
//    //  sayHi();
//     aeroFunction()
  
// }, 2000);

// //Function inside a variable:
// const  imaData = function(){
//     console.log(`I'm a data.`)
// }
// imaData()

//Function inside a object:
const  object = {
    //speak: function(){
    speak(){ //for news versions from JS
        console.log(`I'm speaking...`)
    }
}
object.speak()

