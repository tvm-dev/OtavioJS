const express = require('express')
const server = express()

server.get('/', (req, res) =>{
    res.send('Hello World...')
});

server.get('/contato', (req, res) => {
    res.send('Thanks for contact us!')
})

server.listen(3000, () => {
    console.log('Server running on port 3000, at adreess http://localhost:3000')
})