const express = require("express");
const router = express.Router();

const { getStreak } = require("../controller/streakController");

router.post("/streak/:userId", getStreak);

module.export 


