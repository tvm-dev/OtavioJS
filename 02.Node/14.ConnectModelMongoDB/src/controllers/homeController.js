// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
// //HomeModel.find({
//     title: 'Why NodeJS is the best library for Javascript?',
//     description: 'Any people that programming using JS alrealy heard about NodeJS...'
// })
// .then(datas => console.log(datas))
// .catch(e => console.log(e))

//homePage Method(it's one function):
exports.homePage = (req, res) => {
    res.render('index')
    return
        
}

//handlePost method(it's one function):
exports.handlePost = (req, res) => {
    res.send(`Hey, i'm your new post route :)`)
    return //Case you not want use middleare!
}