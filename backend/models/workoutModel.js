import { Schema as _Schema, model } from 'mongoose'

const Schema = _Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export default model('Workout', workoutSchema)
