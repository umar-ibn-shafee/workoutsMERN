// these are route handler functions for particular route
// export each function individually
// each function at the end sends a response either 400 or 200 depending on the scenario.
// routes involving id's check id validity to avoide mongoose invalid ID errors ie "Internal Server Error" by "mongoose.Types.ObjectId.isValid(id)"

const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}

// get one specific workout
const getOneWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res400("No such workout", res)
    }
    const workout = await Workout.findById(id)

    // if(!workout) {
    //     return res.status(400).json({error: "No such workout"})
    // }
    // res.status(200).json(workout)

    sendResponse(res, workout, "No such workout")
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res400("No such workout to update", res)
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

    sendResponse(res, workout, "No such workout to update")
}

// post new workout
const postWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res400("No such workout to delete", res)
    }
    const workout = await Workout.findOneAndDelete({_id: id})

    sendResponse(res, workout, "No such workout to delete")
}

// Utills
const res400 = (errMsg, res) => {
    return res.status(400).json({error: errMsg})
}

const sendResponse = (res, data, errMsg) => {
    if(!data) {
        return res400(errMsg, res)
    }
    res.status(200).json(data)
}


module.exports = {
    postWorkout,
    getWorkouts,
    getOneWorkout,
    updateWorkout,
    deleteWorkout
}