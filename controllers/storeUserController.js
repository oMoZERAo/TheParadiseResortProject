const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
    User.create(req.body).then(() => {
        console.log("User registered successfully!")
        const { email, password, firstname, lastname, tel, role } = req.body

        User.findOne({ email: email }).then((user) => {
            console.log(user)
            if(user) {
                let cmp = bcrypt.compare(password, user.password).then((match) => {
                    if(match) {
                        req.session.userId = user._id
                        res.redirect('/')
                    } else {
                        res.redirect('/login')
                    }
                })
            } else {
                res.redirect('/login')
            }
        })
    }).catch((error) => {
        // console.log(error.errors)
        if (error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/register')
        }
    })
}