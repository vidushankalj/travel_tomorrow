const User = require('../models/hotelModel')
const mongoose = require('mongoose')

// get all hotels
const getHotels = async (req, res) => {
    const hotels = await Hotel.find({}).sort({createAt: -1})

    res.status(200).json(hotels)
}

// get a  single hotel
const getHotel = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such hotel'})
    }

    const hotel = await Hotel.findById(id)
    if (!hotel) {
        return res.status(404).json({error: 'No such hotel'})
    }

    res.status(200).json(hotel)
}

// create new hotel
const addHotel = async (req, res) => {
    const {hotelName, address, town, details, googleMap, contactNum} = req.body

    // add doc to db
    try {
        const hotel = await Hotel.create({hotelName, address, town, details, googleMap, contactNum})
        res.status(200).json(hotel)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a hotel
const deleteHotel = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such hotel'})
    }

    const hotel = await Hotel.findOneAndDelete({_id: id})

    if (!hotel) {
        return res.status(404).json({error: 'No such hotel'})
    }

    res.status(200).json(hotel)
}

// update a hotel
const updateHotel = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such hotel'})
    }

    const hotel = await Hotel.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!hotel) {
        return res.status(404).json({error: 'No such hotel'})
    }

    res.status(200).json(hotel)
}

module.exports = {
    getHotels,
    getHotel,
    addHotel,
    deleteHotel,
    updateHotel
}