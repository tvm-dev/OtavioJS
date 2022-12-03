const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

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
    //===================================================================
    //Login user method:
    async login(){
        this.validateFormFields()
        //Checking if there are erros at array errors[]:
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email })

        //Checking if user exists:
        if (!this.user) {
            this.errors.push('User do not exist!')
            return
        }

        //validating user pass with bcryptJS:
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Invalid Password.')
            this.user = null
            return
        }
        
        
    }

    async registerUser() {
        this.validateFormFields()
        //Checking if there are erros at array errors[]:
        if (this.errors.length > 0) return;

        await this.userExistInBD()

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync() // ???
        this.body.password = bcryptjs.hashSync(this.body.password, salt)


        //If everthing it's Ok, register will be done in DB:
        this.user = await LoginModel.create(this.body)

    }

    async userExistInBD() {
        this.user = await LoginModel.findOne({ email: this.body.email })
        if (this.user) this.errors.push('User already registered.')

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