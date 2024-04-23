const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    destinationMap: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Destination', userSchema)