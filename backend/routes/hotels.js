const express = require('express')
const {
    addHotel,
    getHotels,
    getHotel,
    deleteHotel,
    updateHotel
} = require('../controllers/hotelControllers')

const router = express.Router()

// GET all hotels
router.get('/', getHotels)

//GET a single hotel
router.get('/:id', getHotel)

// POST a new hotel
router.post('/', addHotel)

// DELETE a hotel
router.delete('/:id', deleteHotel)

// UPDATE a hotel
router.patch('/:id', updateHotel)

module.exports = router