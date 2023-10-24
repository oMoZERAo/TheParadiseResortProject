const Room = require('../models/Room')

module.exports = async (req, res) => {
    try {
        let id = req.params.id
        const removed = await Room.findOneAndDelete({_id: id}).exec()
        res.redirect('/admin/rooms?alert=Room+Deleted')
    } catch (error) {
        console.error(error);
        res.redirect('/admin/rooms?alert=Error!')
    }
}