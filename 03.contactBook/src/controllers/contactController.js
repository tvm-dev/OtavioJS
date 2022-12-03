const { async } = require("regenerator-runtime")
const Contact = require('../models/ContactModel')

exports.index = (req, res) => {
    return res.render('contact', {
        contact: {}
    })
}

//==============================================================
exports.register = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        console.log('1')
        await contact.register()
        console.log('2')

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors)
            req.session.save(() => res.redirect('/contact'))
            return
        }

        req.flash('success', 'Your contact was registered successfully.')
        //req.session.save(() => res.redirect(`/contact/${contact.contact._id}`))
        req.session.save(() => res.redirect('/'))
        return;

    } catch (e) {
        console.log(req.body)
        console.log(e)
        return res.render('404')
    }
}

exports.editContact = async function(req, res){
    if (!req.params.id) return res.render('404')

    const contact = await Contact.findByID(req.params.id)
    if (!contact) return res.render('404')
    res.render('contact', { contact })
}