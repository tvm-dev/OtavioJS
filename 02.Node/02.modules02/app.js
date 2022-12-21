// const mult = require('./module')

// console.log(mult(2,7))

//dog barking...
// const dog = require('./B/C/D/module')
// const dog2 = require('./B/Z/module2')

// const d1 = new dog('Punk')
// d1.bark()

// const d2 = new dog2('Lessi')
// d2.bark()


// dot (.) => forward
// two dots (..) => returns folders

//variables inside modules node:
//console.log(__filename);
//console.log(__dirname);

const path = require('path')
//console.log(path.resolve(__dirname))
//returning folders with (..):
console.log(path.resolve(__dirname, '..', '..'))