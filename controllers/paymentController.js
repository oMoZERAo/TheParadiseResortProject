const User = require('../models/User')
const Room = require('../models/Room')

module.exports = async (req, res) => {
    let id = req.params.id
    let AmtDay = req.body.AmtDay
    let AmtPay = req.body.AmtPay

    let UserData = await User.findById(req.session.userId)

    Room.findById(id).then((room) =>{
        if(room) { 
            res.render('payment', {
                UserData,
                RoomData: room,
                AmtDay,
                AmtPay
            })
        } else {
            res.direct('/rooms') 
        }
    })
    
}