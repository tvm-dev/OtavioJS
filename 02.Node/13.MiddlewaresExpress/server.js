const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')
const { globalMiddleware } = require('./src/middlewares/middleware')
//const {userMiddleware } = require('./src/middlewares/middleware')


//Get infos from body document:
server.use(express.urlencoded({extended: true}))


//Static Content Files:
server.use(express.static(path.resolve(__dirname, 'public')))

//Views Folder, absolute path:
server.set('views', path.resolve(__dirname, 'src', 'views'))

//Engine uses:
server.set('view engine', 'ejs')

//Using Global Middleware at all requests:
server.use(globalMiddleware)
//Using user Middleware at all requests:
//server.use(userMiddleware)
//Using the routes:
server.use(routes)

//server port:
server.listen(3000, () => {console.log('Server running at http://localhost:3000')})