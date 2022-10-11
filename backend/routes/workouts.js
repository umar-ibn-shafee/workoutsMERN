// Use express.Router by instaiating it
// Then use all methods for this route
// use rote handler functions from controler

import { Router } from "express";
import { postWorkout, getWorkouts, getOneWorkout, updateWorkout, deleteWorkout } from "../controllers/workoutControllers";


const router = Router();

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

export default router