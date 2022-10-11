// instantiate Express app
// Create a route
// use middleware for accesing data in POST req.
// listen to a port
// to use process.env variable inport dotenv and call config on it.

// require('dotenv').config()

import dotenv from 'dotenv';
import express, { json } from 'express'
import mongoose from 'mongoose'
// import workoutRouts from './routes/workouts'
import coverImage from './routes/coverImage.js'

dotenv.config()
// express app
const app = express()

const { connect } = mongoose

const port = process.env.PORT || 4000;

//  middleware
app.use(json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
// app.use('/api/workouts', workoutRouts)
app.use('/api/image', coverImage)

// listening for requests
app.listen(port, () => {
    console.log(`listining to requests at port ${port}`)
})

// connect to DB
connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conected to DB')
        // listening for requests
        // app.listen(port, () => {
        //     console.log(`connected to db & listining to requests at port ${port}`)
        // })
    })
    .catch((err) => {
        console.log('DB connection failed', err)
    })

