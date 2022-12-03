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