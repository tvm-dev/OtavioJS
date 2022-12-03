exports.globalMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
    next()
}


exports.checkCSRFerror = (err, req, res, next) => {
    if (err) {
        return res.render('404')
        console.log('Error tvm')
        next()
    }
};
  

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

//Checking if user is logeed:
exports.loginRequired = (req, res, next) => {

    if (!req.session.user) {
        req.flash('errors', 'You need to be logged to register or see the contacts.')
        req.session.save(() => res.redirect('/login'))
        return //stop function here using return.
    }
    //But, if user is logged, he can continue:
    next()
}