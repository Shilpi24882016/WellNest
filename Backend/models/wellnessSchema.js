
const mongoose = require("mongoose");

const dailyWellnessSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },

    sleepHours: {
      type: Number,
      required: true,
    },

    waterIntake: {
      type: Number,
      required: true,
    },

    energyLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    workoutDone: {
      type: Boolean,
      default: false,
    },

    yogaDone: {
      type: Boolean,
      default: false,
    },

    deletedAt: {
        type: Date,
        default: null,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("DailyWellness", dailyWellnessSchema);