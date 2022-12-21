exports.globalMiddleware = (req, res, next) => {
    // console.log('')
    // console.log('Pass at Global Middleware...')
    // console.log('')
    res.locals.localVariableTVM = 'This is a local variable.'
    next()
}

exports.userMiddleware = (req, res, next) => {
    // console.log('')
    // console.log('I am your *user* Middleware...')
    // console.log('')
    next()
}

exports.checkCSRFerror = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404')
    } else {
        console.log('hi tvm')
    }
};
  
//     if (!err && 'EBADCSRFTOKEN' === err.code) {
//         return res.render('404')
//     }
// }

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}