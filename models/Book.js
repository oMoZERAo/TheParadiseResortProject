const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({

    userId: {
        type: String,
        required: [true, 'Please provide userId']
    },

    name: {
        type: String,
        required: [true, 'Please provide name in transaction']
    },

    tel: {
        type: String,
        required: [true, 'Please provide telephone number in transaction']
    },

    paymentSelect: {
        type: String,
        required: [true, 'Please select payment method']
    },

    transferDate: {
        type: String,
        required: [true, 'Please select transfer date']
    },
    
    transferTime: {
        type: String,
        required: [true, 'Please select transfer time']
    },

    roomId: {
        type: String,
        required: [true, 'Please provide roomId']
    },

    roomType: {
        type: String,
        required: [true, 'Please provide roomType']
    },

    dateFrom: {
        type: String,
        required: [true, 'Please provide date from']
    },

    dateTo: {
        type: String,
        required: [true, 'Please provide date to']
    },

    amountDay: {
        type: Number,
        required: [true, 'Please provide amount day']
    },

    amountMoney: {
        type: Number,
        required: [true, 'Please provide amount money']
    },

    transactionStatus: {
        type: String,
        enum: ['Pending', 'Failed', 'Success'],
        default: 'Pending'
    }
})

const Book = mongoose.model('Book', BookSchema)
module.exports = Book