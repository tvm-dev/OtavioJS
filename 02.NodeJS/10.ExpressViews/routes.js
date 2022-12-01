const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')


//exporting routes...
module.exports = route

//Home routes:
route.get('/', homeController.homePage)
route.post('/', homeController.handlePost)

//Contact Route:
route.get('/contact', contactController.homeContact)