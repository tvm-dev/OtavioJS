class Person {
    constructor(name) {
        this.name = name;
        this.surName = surName;
  }
}

const name = 'tvm'
const surName = 'viana'
//For export one by one resources:
exports.name = name;
exports.anyThings = 'any thing...'
module.exports.surName = surName;

//For export all items together:
module.exports = { name, surName, Person }