const express = require('express')
const {
    getDestinations,
    getDestination,
    addDestination
} = require('../controllers/destinationControllers')

const router = express.Router()

// GET all destinations
router.get('/', getDestinations)

//GET a single destination
router.get('/:id', getDestination)

// POST a new destination
router.post('/', addDestination)

module.exports = router