const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admins'
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model('product', ProductSchema)
