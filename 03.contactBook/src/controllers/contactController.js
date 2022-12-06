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
            req.session.save(() => res.redirect('back'))
            return
        }

        req.flash('success', 'Your contact was registered successfully.')
        req.session.save(() => res.redirect(`/contact/${contact.contact._id}`))
        return;

    } catch (e) {
        console.log(req.body)
        console.log(e)
        return res.render('404')
    }
}

exports.editIndex = async function (req, res) {
    if (!req.params.id) return res.render('404')

    const contact = await Contact.findByID(req.params.id)
    if (!contact) return res.render('404')
    res.render('contact', { contact })
}

exports.edit = async function (req, res) {

    try {
        if (!req.params.id) return res.render('404')
        const contact = new Contact(req.body)
        await contact.edit(req.params.id)

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors)
            //console.log(body.params)
            // req.session.save(() => res.redirect(`/contact/index/${contact.contact.id}`))
            req.session.save(() => res.redirect('back'))
            return
        }

        req.flash('success', 'Your contact was edited successfully.')
        req.session.save(() => res.redirect(`/contact/${contact.contact.id}`))
        return;

    } catch (e) {
        console.log(e)
        res.render('404')
    }

}
exports.delete = async function (req, res) {
    if (!req.params.id) return res.render('404')

    const contact = await Contact.delete(req.params.id)
    if (!contact) return res.render('404')

    req.flash('success', 'Your contact was deleted successfully.')
    req.session.save(() => res.redirect('back'))
    return;
}