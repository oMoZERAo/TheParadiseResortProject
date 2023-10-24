const Room = require('../models/Room')

module.exports = async (req, res) => {

    let RoomData = await Room.find()

    res.render('rooms-admin', {
        RoomData
    })
}