exports.globalMiddleware = (req, res, next) => {
    console.log('')
    console.log('Pass at Global Middleware...')
    console.log('')
    next()
}

exports.userMiddleware = (req, res, next) => {
    // console.log('')
    // console.log('I am your *user* Middleware...')
    // console.log('')
    next()
}