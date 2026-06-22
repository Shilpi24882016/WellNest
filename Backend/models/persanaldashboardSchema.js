const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, 
    },

    totalCheckIns: {
        type: Number,
        default: 0,
    },

    workoutCount: {
        type: Number,
        default: 0,
    },

    yogaCount: {
        type: Number,
        default: 0,
    },

    foodLogCompletion: {
        type: Number,
        default: 0,
    },

    currentStreak: {
        type: Number,
        default: 0,
    },

    lastUpdated: {
        type: Date,
        default: Date.now,
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

module.exports = mongoose.model("Dashboard", dashboardSchema);