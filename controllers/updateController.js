const Room = require('../models/Room')

module.exports = async (req, res) => {

    try {
        let id = req.params.id
        const updated = await Room.findOneAndUpdate({ _id: id}, req.body, {new: true}).exec()

        res.redirect('/admin/rooms?alert=Room+Updated')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}