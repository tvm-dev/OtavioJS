const mongoose = require('mongoose')
const { async } = require('regenerator-runtime')
const validator = require('validator')

const ContactSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    createdAt: { type: Date, default: Date.now },
});

//Creating Model Contact:
const ContactModel = mongoose.model('Contact', ContactSchema)

//Exporting Model:
module.exports = ContactModel

//Using arrow function:
function Contact(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
}

// //Loading userContact using ID:
// Contact.findByID = async function (id) {
//     if (typeof id !== 'string') return
//     const user = await ContactModel.findById(id)
//     return user
// }



Contact.prototype.register = async function () {
    this.validated();
    if (this.errors.length > 0) return;
    this.contact = await ContactModel.create(this.body)
}

Contact.prototype.validated = function () {
    this.cleanUp();

    //Email validation:
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Error: Invalid E-mail')
    if (!this.body.fname) this.errors.push('Name is required for register.')
    if (!this.body.email && !this.body.phone) {
        this.errors.push('E-mail or Phone needs to be informed.')
    }
}
Contact.prototype.cleanUp = function () {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        fname: this.body.fname,
        lname: this.body.lname,
        email: this.body.email,
        phone: this.body.phone

    };
};

//Editing contacts:
Contact.prototype.edit = async function (id) {
    if (typeof id !== 'string') return;
    this.validated()

    if (this.errors.length > 0) return;
    //If all passed on validations, then update now:
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true })

}

//Loading userContact at homePage, using static methods:
Contact.findByID = async function (id) {
    if (typeof id !== 'string') return
    const contact = await ContactModel.findById(id)
    return contact
}
Contact.findContacts = async   () => {
    const contacts = await ContactModel.find()
    .sort({ createdAt: -1 }) //Listing contacts using decrease order!
    return contacts
}
Contact.delete = async (id) => {
    if (typeof id !== 'string') return
    const contact = await ContactModel.findOneAndDelete({_id: id})
    return contact
}

module.exports = Contact;