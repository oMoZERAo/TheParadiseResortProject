const Book = require('../models/Book')

module.exports = (req, res) => {
    Book.create(req.body).then(() => {
        console.log("Reservation Added!")
        res.redirect('/rooms?alert=Reservation+Completed')
    }).catch((error) => {
        console.log(error)
    })
}