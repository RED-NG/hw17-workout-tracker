const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: { type: String, trim: true, required: "Enter an exercise type" },
      name: { type: String, trim: true, required: "Enter an exercise name" },
      distance: {
        type: Number,
        minimum: 1,
      },
      duration: {
        type: Number,
        minimum: 1,
        required: "Enter the duration of your exercise in minutes",
      },
      weight: {
        type: Number,
        minimum: 1,
      },
      sets: {
        type: Number,
        minimum: 1,
      },
      reps: { type: Number, minimum: 1 },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
