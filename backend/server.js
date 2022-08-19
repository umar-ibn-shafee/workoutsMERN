// instantiate Express app
// Create a route
// use middleware for accesing data in POST req.
// listen to a port
// to use process.env variable inport dotenv and call config on it.

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRouts = require('./routes/workouts')
// express app
const app = express()

const port = process.env.PORT || 4000;

//  middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRouts)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listening for requests
        app.listen(port, () => {
            console.log(`connected to db & listining to requests at port ${port}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })

