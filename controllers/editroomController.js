const Room = require('../models/Room')

module.exports = async (req, res) => {
    let id = req.params.id
    let RoomData = Room.find()
    
    Room.findById(id).then((room) =>{
        if(room) { 
            res.render('editroom', {
                RoomData: room
            })
        } else {
            res.direct('/admin/rooms') 
        }
    })
}