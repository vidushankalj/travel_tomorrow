const express = require('express')
const User = require('../models/userModel')

const router = express.Router()

// GET all users
router.get('/', (req, res) => {
    res.json({mssg: 'GET all users'})
})

//GET a single user
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single user'})
})

// POST a new user
router.post('/', async (req, res) => {
    const {firstName, lastName, email, phone, gender, password} = req.body

    try {
        const user = await User.create({firstName, lastName, email, phone, gender, password})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a user
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a user'})
})

// UPDATE a user
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a user'})
})

module.exports = router