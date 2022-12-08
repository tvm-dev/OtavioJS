class HomeController {
    index(req, res) {
            res.json({
            allRight: false
        })
    }
}
export default new HomeController();
