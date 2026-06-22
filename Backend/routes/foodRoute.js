
const express = require("express");


const router = express.Router();

const { getStreak } = require("../controller/foodController");

router.post("/food/:userId", getStreak);

module.export    







