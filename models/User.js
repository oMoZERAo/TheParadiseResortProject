const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide email']
    },

    password: {
        type: String,
        required: [true, 'Please provide password']
    },

    firstname: {
        type: String,
        required: [true, 'Please provide first name']
    },

    lastname: {
        type: String,
        required: [true, 'Please provide last name']
    },

    tel: {
        type: String,
        required: [true, 'Please provide telephone number']
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

UserSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash
        next()
    }).catch(error => {
        console.error(error)
    })
})

const User = mongoose.model('User', UserSchema)
module.exports = User