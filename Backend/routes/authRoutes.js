let express = require('express');
let router = express.Router();
const userController = require('../controller/authCotroller');

router.post("/registe", userController.addUser);
router.get("/login", userController.userLogin);

module.exports = router;