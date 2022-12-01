require('dotenv').config()
const express = require('express')
const server = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Connection to MongoDB OK')
        server.emit('OK')
    })
    .catch(e => console.log(e))

const session = require('express-session')
//const MongoStore = require('connect-mongo')(session)
const MongoStore = require('connect-mongo')
const flashMessages = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const { globalMiddleware, checkCSRFerror, csrfMiddleware } = require('./src/middlewares/middleware')
//const { appendFile } = require('fs')

//Using helmet:
server.use(helmet())

//Get infos from body document:
server.use(express.urlencoded({ extended: true }))
//Static Content Files:
server.use(express.static(path.resolve(__dirname, 'public')))

//new way it's works!
server.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7},
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
}))

server.use(flashMessages())
//Views Folder, absolute path:
server.set('views', path.resolve(__dirname, 'src', 'views'))

//Engine uses:
server.set('view engine', 'ejs')


//Using CSRF
server.use(csrf())

//Using Global Middleware at all requests:
server.use(globalMiddleware)
server.use(checkCSRFerror)
server.use(csrfMiddleware)

//Using user Middleware at all requests:
//server.use(userMiddleware)

//Using the routes:
server.use(routes)



//local server:
server.on('OK', () => {
    //server port:
    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000')
    })
})