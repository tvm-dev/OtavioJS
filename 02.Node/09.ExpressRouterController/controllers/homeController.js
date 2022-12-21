//homePage Method(it's one function):
exports.homePage = (req, res) => {
    res.send(`
            <form action="/" method="post">
            Name: <input type="text" name="name">
            Surname: <input type="text" name="surName">
            <button>Register Now</button>
            </form>   
        `)}

//handlePost method(it's one function):
exports.handlePost = (req, res) => {
    res.send(`Hey, i'm your new post route :)`)
}


