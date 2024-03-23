const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('products', productSchema)