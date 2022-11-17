//other way write a Array:
//const names = new Array('tvm', 'eike', 'pp')
//const names = ['tvm', 'eike', 'pp', 'diva', 'henry', 'pi']
//delete names[2]
// const newArray = [...names] //In this case, all dates was copied to new array!
// const removidShift = newArray.shift() //'shift' delete the first item from array
// const removidPop = newArray.pop() //'pop' delete the last item from array

// newArray.push('Diva')


// console.log(names)
// console.log(newArray, removidShift, removidPop)

//Using Slice to cut array:
//const newArray2 = names.slice(0, 3)//starting index 1 until position 2 at array.
// const newArray2 = names.slice(0, -1)//starting index 0 and removing the last index
// console.log(names)
// console.log(newArray2)


// //Converting one string to array:
// const namees2 = 'Thiago Viana Menezes'
// //const arrayGenerated = namees2.split('') //split -> without spaces: make letters
// const arrayGenerated = namees2.split(' ') //split -> witho spaces: make words
// console.log(arrayGenerated)

//Converting array to string:
const names3 = [ 'Thiago', 'Viana', 'Menezes' ]
const name3 = names3.join(' ') //make items together
console.log(name3)
