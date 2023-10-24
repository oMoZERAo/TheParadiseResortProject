const User = require('../models/User')
const Room = require('../models/Room')

module.exports = async (req, res) => {

    let UserData = await User.findById(req.session.userId)
    let RoomData = await Room.find()

    res.render('rooms', {
        UserData,
        RoomData
    })
}