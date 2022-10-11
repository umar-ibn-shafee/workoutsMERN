import { Router } from "express";
import { generateCoverUrl } from "../utils/cloudinary.js";
const router = Router();

router.post('/', async (req, res) => {
    const { firstName, lastName } = req.body
    console.log(firstName, lastName)
    const toGenerateData = {
        name: `${firstName} ${lastName}`
    }
    const url = await generateCoverUrl(toGenerateData).catch((err) => console.log('ERROR on generateCoverUrl:',err))
    console.log(url)
    res.status(200).json({ name: 'Base Image', coverUrl: url})
    // try {
    //     const workout = await Workout.create({ title, reps, load })
    //     res.status(200).json(workout)
    // } catch (err) {
    //     res.status(400).json({ error: err.message })
    // }
})

export default router