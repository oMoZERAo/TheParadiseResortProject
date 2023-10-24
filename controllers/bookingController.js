const User = require('../models/User')
const Room = require('../models/Room')

module.exports = async (req, res) => {
    let id = req.params.id
    let UserData = await User.findById(req.session.userId)
    
    Room.findById(id).then((room) =>{
        if(room) { 
            res.render('booking', {
                UserData,
                RoomData: room
            })
        } else {
            res.direct('/rooms') 
        }
    })
}