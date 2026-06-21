let express = require('express');
let router = express.Router();
const userController = require('../controller/authCotroller');
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.addUser);
router.post("/login", userController.userLogin);

module.exports = router;