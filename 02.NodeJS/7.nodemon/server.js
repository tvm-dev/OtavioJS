const express = require('express')
const server = express()

server.get('/', (req, res) =>{
    res.send(`
        <form action="/" method="post">
        Name:<input type="text" name="name">
        <button>Send Now</button>
        </form>

    `)
});

server.get('/contato', (req, res) => {
    res.send('Thanks for contact us!')
})

server.post('/', (req, res) => {
    res.send('Your form submit was received :)')
})



server.listen(3000, () => {
    console.log('Server running on port 3000, at address http://localhost:3000')
})