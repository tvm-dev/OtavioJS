const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

//Using the routes:
server.use(routes)

//Get infos from body document:
server.use(express.urlencoded({extended: true}))
//Engine uses:
server.set('view engine', 'ejs')

//Views Folder, absolute path:
server.set('views', path.resolve(__dirname, 'src', 'views'))

//Static Content Files:
server.use(express.static(path.resolve(__dirname, 'public')))


//Views Folder, relative path(Prof do not like)
//server.set('views', path.resolve(__dirname, './src/views'))

//server port:
server.listen(3000, () => {console.log('Server running on 3000')})