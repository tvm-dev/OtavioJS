const express = require('express')
const server = express()
const routes = require('./routes')

//Using the routes:
server.use(routes)

//Get infos from body document:
server.use(express.urlencoded({extended: true}))

//server port:
server.listen(3000, () => {console.log('Server running on 3000')})