const dailyWellnessSchema = require("../models/dailyWellnessSchema");

const addDailyWellness = async (req, res) => {
    try {
        const { userId, sleepHours, waterIntake, energyLevel, workoutDone, yogaDone } = req.body;

        if (!userId) {
            return res.status(400).json({
                message: "Please enter userId"
            });
        }

        if (!sleepHours) {
            return res.status(400).json({
                message: "Please enter sleepHours"
            });
        }

        if (!waterIntake) {
            return res.status(400).json({
                message: "Please enter waterIntake"
            });
        }

        if (!energyLevel) {
            return res.status(400).json({
                message: "Please enter energyLevel"
            });
        }

        await dailyWellnessSchema.create({
            userId,
            sleepHours,
            waterIntake,
            energyLevel,
            workoutDone,
            yogaDone
        });

        return res.status(201).json({
            status: "success",
            message: "Daily wellness added successfully"
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        });
    }
};

module.exports = addDailyWellness;