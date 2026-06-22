
const DailyFoodLog = require("../models/DailyFoodLog");

const addDailyFoodLog = async (req, res) => {
    
    try {

        const { userId, date, breakfast, lunch, dinner, snacks } = req.body;

        if (!userId) {

            return res.status(400).json({

                message: "Please enter userId"
            });
        }

        if (!date) {
            console.log("No date using default date");
        }

        await DailyFoodLog.create({
            userId,
            date,
            breakfast,
            lunch,
            dinner,
            snacks
        });

        return res.status(201).json({
            status: "success",
            message: "Daily food added successfully"
        });

    } catch (error) {
        return res.status(400).json({

            status: "error",
            message: error.message
        });
    }
};

module.exports = addDailyFoodLog;