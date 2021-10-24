const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    required: "Enter exercise type",
    trim: true
  },
  name: {
    type: String,
    required: "Enter exercise name",
    trim: true
  },
  duration: {
    type: Number,
    required: "Enter duration of exercise"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  reps: {
    type: Number,
    required: "Enter number of repertitions"
  },
  sets: {
    type: Number,
    required: "Enter number of sets"
  }
})

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: 'A Date is required',
    default: Date.now()
  },
  exercises:  {
    type: [exerciseSchema]
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;