//homePage Method(it's one function):
exports.homePage = (req, res) => {
    res.render('index')
        
}

//handlePost method(it's one function):
exports.handlePost = (req, res) => {
    res.send(`Hey, i'm your new post route :)`)
}