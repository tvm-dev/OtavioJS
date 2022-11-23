const person = {
    namee: 'Thiago',
    sex: 'man',
    lastName: 'Viana',
    age: 38,
    address: {
        st: 'Av. Brasil',
        number: 334
    }
}

//accessing data used dot (.)
//console.log(person.name)

//Destructuring now:
//const {lastName, age, namee, sex = 'Unassigned value'} = person
//console.log(namee, lastName, age, sex)
///
// const {address: {st}} = person
// console.log(st)

///Using ...rest
const {namee, ...rest} = person
console.log(rest, namee)



