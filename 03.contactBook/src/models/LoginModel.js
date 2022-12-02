const mongoose = require('mongoose')
const validator = require('validator')

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },

})

//Creating Model:
const LoginModel = mongoose.model('Login', LoginSchema)

//Exporting Model:
module.exports = LoginModel

class Login {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = null
    }

    async registerUser() {
        this.validateFormFields()
        //Checking if there are erros at array errors[]:
        if (this.errors.length > 0) return;
        //If everthing it's Ok, register will be done in DB:

        try {
            this.user = await LoginModel.create(this.body)

        } catch (error) {
            console.log(error)
        }
    }

    validateFormFields() {
        this.cleanUp()

        //Email validation:
        if (!validator.isEmail(this.body.email))
            this.errors.push('Error: Invalid E-mail')

        //Password validation:
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('Error: your password need have between 3 and 50 characters')
        }
    }
    cleanUp() { //Check if all fields from form are Strings:
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }

    }

}
module.exports = Login;