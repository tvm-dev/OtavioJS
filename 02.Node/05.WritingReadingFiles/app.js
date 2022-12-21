const path = require('path')
const filePath = path.resolve(__dirname, 'test.json')
const write = require('./modules/write')
const read = require('./modules/read')

// const person = [
//     {namee: 'João'},
//     {namee: 'João 2'},
//     {namee: 'João 3'},
//     {namee: 'João 4'},
//     {namee: 'João 5'}
// ]

// const json = JSON.stringify(person, '', 2)

// write(filePath, json)

async function readingFile(filePath){
    const datas = await read(filePath)
    renderData(datas)
}

function renderData(datas){
    datas = JSON.parse(datas)
    datas.forEach(val => console.log(val.namee))
    
}

readingFile(filePath)