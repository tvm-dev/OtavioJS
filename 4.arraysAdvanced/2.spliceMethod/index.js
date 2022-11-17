//Slice function => is very usuful! => splice(current index, delete, el1, el2, etc)
                -5     -4     -3     -2     -1
const names = ['tvm', 'pp', 'eike', 'pi', 'diva']

//pop:
//const deleteds = names.splice(-1, 1) //removing 1 element from array, the last
//const deleteds = names.splice(-2, 2) //removing 1 element from array, the two lasts
//const deleteds = names.splice(-4, Number.MAX_VALUE) //removing all items from -4 index

//

//unshift: 
//names.splice(0, 0, 'Maria', 'Pedro')

//push from splice:
//names.splice(names.length, 0, 'carlos')
//Default push:
names.push('carlos2', 'pedro', 'xxx')
//================================
console.log(names)
//console.log(deleteds)