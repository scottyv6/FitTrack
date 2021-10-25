const router = require("express").Router();
const Workout = require("../models/workout.js")

//Get data from most recent workout
router.get("/api/workouts", (req,res) => {
    Workout.aggregate( [
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) 
    .catch(err => {
        res.status(400).jason(err);
    })
})




//Add new exercise to workout plan
router.put("/api/workouts/:id", (req,res) => {
    Workout.findByIdAndUpdate(req.params.id, 
        {
            $push: {"exercises": req.body}
        }
        
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) 
    .catch(err => {
        res.status(400).jason(err);
    })
})





//get data from last 7 days
router.get("/api/workouts/range", (req,res) => {
    Workout.aggregate( [
        {
            $sort: {day: -1}
        },
        {
            $limit: 7
        },
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
})




//Add new workout
router.post("/api/workouts", (req,res) => {
    Workout.create({} )
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
})


module.exports = router;