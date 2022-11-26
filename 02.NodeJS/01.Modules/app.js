const path = require('path')
const axios = require('axios')
const { Person } = require('./mod1')

// axios.get('https://www.otaviomiranda.com.br/files/json/pessoas.json')
// .then(response => console.log(response.data))
// .catch(e => console.log(e))

const p1 = new Person('Eike')

console.log(p1)