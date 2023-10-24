const Room = require('../models/Room')

module.exports = (req, res) => {
    Room.create(req.body).then(() => {
        console.log("Room added!")
        res.redirect('/admin/rooms?alert=Room+Added')

    }).catch((error) => {
        console.log(error)
    })
}