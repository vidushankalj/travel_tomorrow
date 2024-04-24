const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    hotelName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    googleMap: {
        type: String,
        required: true
    },
    contactNum: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Hotel', userSchema)