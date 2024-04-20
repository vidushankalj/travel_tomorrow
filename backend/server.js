require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const usersRoutes = require('./routes/users')
const hotelRoutes = require('./routes/hotels')
const bodyParser = require('body-parser')

// express app
const app = express()

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/users', usersRoutes)
app.use('/api/hotels', hotelRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error);
    })