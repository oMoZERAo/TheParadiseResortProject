const User = require('../models/User')

module.exports = (req, res, next) => {
    User.findById(req.session.userId).then((user) => {
        if(user.role === 'admin') {
            next()
        } else {
            return res.redirect('/')
        }
    }).catch(error => {
        console.error(error)
    })
}