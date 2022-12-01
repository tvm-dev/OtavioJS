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
    //using sessions:
    //req.session.user = { name: 'Thiago', logged: 'true' }
    //console.log(req.session.user)
    //Creating flash messagens:
    // req.flash('info', 'My message info')
    // req.flash('error', 'My message error')
    // req.flash('success', 'My message success')
    //Restore flash messages:
    console.log(req.flash('info'), req.flash('error'), req.flash('success'))
    res.render('index')
    return 
}

//handlePost method(it's one function):
exports.handlePost = (req, res) => {
    res.send(`Hey, i'm your new post route :)`)
    return //Case you not want use middleare!
}