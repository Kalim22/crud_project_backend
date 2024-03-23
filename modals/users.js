const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'Please generate unique userid!'],
        unique: true,
    },
    firstName: {
        type: String,
        required: [true, 'Please fill your name!']
    },
    lastName: {
        type: String,
        required: [true, 'Please fill your name!']
    },
   
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)