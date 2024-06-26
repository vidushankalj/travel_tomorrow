const Destination = require('../models/destinationModel')
const mongoose = require('mongoose')

// get all destinations
const getDestinations = async (req, res) => {
    const destinations = await Destination.find({}).sort({createAt: -1})

    res.status(200).json(destinations)
}

// get a single destination
const getDestination = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such destination'})
    }

    const destination = await Destination.findById(id)
    if (!destination) {
        return res.status(404).json({error: 'No such destination'})
    }

    res.status(200).json(destination)
}

// create new destination
const addDestination = async (req, res) => {
    const {city, district, details, destinationMap} = req.body

    // add doc to db
    try {
        const destination = await Destination.create({city, district, details, destinationMap})
        res.status(200).json(destination)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDestinations,
    getDestination,
    addDestination
}