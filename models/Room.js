const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    roomtype: {
        type: String,
        required: [true, 'Please provide room type']
    },

    guests: {
        type: String,
        required: [true, 'Please provide guests']
    },

    price: {
        type: String,
        required: [true, 'Please provide price']
    },

    description: {
        type: String
    }
})

const Room = mongoose.model('Room', RoomSchema)
module.exports = Room