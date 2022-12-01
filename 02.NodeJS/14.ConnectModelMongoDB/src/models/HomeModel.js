const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String
})

//Creating Model:
const HomeModel = mongoose.model('Home', HomeSchema)

//Exporting Model:
module.exports = HomeModel

class Home {

}
module.exports = Home;