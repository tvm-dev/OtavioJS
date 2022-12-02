const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')


//Home routes:
route.get('/', homeController.index)

//Logins Routes:
route.get('/login', loginController.index)












//exporting routes...
module.exports = route;