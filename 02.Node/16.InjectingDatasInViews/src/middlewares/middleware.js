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