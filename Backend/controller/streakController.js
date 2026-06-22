const User = require("../models/streakSchema");

const getStreak = async (req, res) => {
  try {
    const { userId } = req.params;

    let streakData = await Streak.findOne({ userId });

   
    if (!streakData) {

      streakData = await Streak.create({

        userId: userId,

        currentStreak: 0,

        longestStreak: 0,

        lastActiveDate: null,
      });
    }

    return res.status(200).json({

    message: "Streak Successfully",
      data: streakData,
    });

  } catch (error) {

    return res.status(400).json({

      message: error.message,
    });
  }
};