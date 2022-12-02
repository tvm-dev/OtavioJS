const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')


//Home routes:
route.get('/', homeController.index)

//Logins Routes:
route.get('/login', loginController.index)
route.post('/login/login', loginController.login)
route.post('/login/register', loginController.register)












//exporting routes...
module.exports = route;