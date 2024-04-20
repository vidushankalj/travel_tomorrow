const express = require('express')
const {
    getDestinations,
    getDestination
} = require('../controllers/destinationControllers')

const router = express.Router()

// GET all destinations
router.get('/', getDestinations)

//GET a single destination
router.get('/:id', getDestination)

module.exports = router