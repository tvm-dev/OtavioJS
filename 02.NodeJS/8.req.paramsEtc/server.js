const express = require('express')
const server = express()

server.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

server.get('/', (req, res) =>{
    res.send(`
        <form action="/" method="post">
        Name:<input type="text" name="name">
        <button>Send</button>
        </form>

    `)
});

server.get('/tests/:userID?/:params?', (req, res) =>{
    console.log(req.params) //used on url => url.com/profile/234234
    console.log(req.query)//used with query string in url => /profile/?key=value&key2=value2&key3=value3...
    //res.send(req.params.userID)
    res.send(req.params)
})

//contact page route:
//server.get('/contato', (req, res) => {res.send('Thanks for contact us!')})

//form:
server.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Your submited data was: <b>${req.body.name}</b>`)})

//server port:
server.listen(3000, () => {console.log('Server running on 3000')})