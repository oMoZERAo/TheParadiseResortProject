const Book = require('../models/Book')

module.exports = async (req, res) => {

    let PendingData = await Book.find({transactionStatus: "Pending"})
    let SuccessData = await Book.find({transactionStatus: "Success"})
    let FailedData = await Book.find({transactionStatus: "Failed"})

    res.render('reservationManage', {
        PendingData: PendingData,
        SuccessData: SuccessData,
        FailedData: FailedData
    })
}