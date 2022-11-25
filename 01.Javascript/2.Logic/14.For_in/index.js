//One simple array, without others arrays insides, are call of vector!
//For in -> read the index or the keys of arrays! More easy from object.

const fruits = ['Pear','Apple','Grape']

//Using classic For:
// for (i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// for (let i in fruits){
//     //console.log(fruits[i])
//     console.log(i)
// }

//-> Using one object
const person = {
    name: 'Thiago',
    lastName: 'Viana',
    age: 38
}

for (let key in person){
    console.log(key, person[key])
}




