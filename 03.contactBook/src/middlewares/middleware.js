exports.globalMiddleware = (req, res, next) => {
    // console.log('')
    // console.log('Pass at Global Middleware...')
    // console.log('')
    res.locals.localVariableTVM = 'This is a local variable.'
    next()
}


exports.checkCSRFerror = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }
};
  

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}