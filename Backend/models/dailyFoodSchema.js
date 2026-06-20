const mongoose = require("mongoose");

const dailyFoodLogSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },

    breakfast: {
        type: String,
        default: null
    },

    lunch: {
        type: String,
        default: null
    },

    dinner: {
        type: String,
        default: null
    },

    snacks: {
        type: String,
        default: null
    },

    deletedAt: {
        type: Date,
        default: null
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("DailyFoodLog", dailyFoodLogSchema);