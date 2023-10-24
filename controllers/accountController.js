const User = require('../models/User')
const Book = require('../models/Book')
const Room = require('../models/Room')

module.exports = async (req, res) => {

    let UserData = await User.findById(req.session.userId)
    let BookData = await Book.find({userId: req.session.userId})
    let RoomData = await Room.find({_id: BookData.roomId})

    res.render('account', {
        UserData,
        BookData,
        RoomData
    })
}