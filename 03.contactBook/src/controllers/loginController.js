const { async } = require('regenerator-runtime')
const Login = require('../models/LoginModel')


exports.index = (req, res) => {
    //console.log(req.session.user)
    if (req.session.user)
    return res.render('userLogged')
    return res.render('login')
}

exports.login = (req, res) => {
    res.send(req.body)
}

exports.register = async function (req, res) {

    try {
        const login = new Login(req.body)
        await login.registerUser()

        //Checking if there are erros, and if yes, show then:
        if (login.errors.length > 0) { //if there are errors
            req.flash('errors', login.errors) //show errors
            req.session.save(function () { //saving session
            return res.redirect('/login') //redirecting user to login page if ocorring errors 
            
        })
            return
        }


        req.flash('success', 'Your user has been created successfully.')
        req.session.save(function () {
            return res.redirect('/login')
        })

    } catch (e) {
        console.log(e)
        return res.render('404')
    }

}

//===========================================
//Login:
exports.login = async function (req, res) {

    try {
        const login = new Login(req.body)
        await login.login()

        //Checking if there are erros, and if yes, show then:
        if (login.errors.length > 0) { //if there are errors
            req.flash('errors', login.errors) //show errors
            req.session.save(function () { //saving session
            return res.redirect('/login') //redirecting user to login page if ocorring errors 
            
        })
            return
        }

       
        req.flash('success', 'You logged in!')
        req.session.user = login.user
        req.session.save(function () {
            return res.redirect('/login')
        })

    } catch (e) {
        console.log(e)
        return res.render('404')
    }

}

//====Logout=======
exports.logout = function(req, res){
    req.session.destroy()
    res.redirect('/login')
}
