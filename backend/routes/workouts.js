const express = require("express");
const router = express.Router();
const { 
    postWorkout,
    getWorkouts,
    getOneWorkout,
    updateWorkout,
    deleteWorkout
} = require("../controllers/workoutControllers")

// get all workouts
router.get('/', getWorkouts)

// get one specific workout
router.get('/:id', getOneWorkout)

// post a new workout
router.post('/', postWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

module.exports = router