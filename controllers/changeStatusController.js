const Book = require('../models/Book')

module.exports = async (req, res) => {
    let id = req.params.id

    try {
        let id = req.params.id
        let transactionStatus = req.body.changeStatus
        const updated = await Book.findOneAndUpdate({ _id: id}, { transactionStatus: transactionStatus }, {new: true}).exec()

        res.redirect('/admin/reservation?alert=Status+Changed')
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}