const express = require('express');
const UserController = require("../controllers/user.js")
const router = express.Router()


router.post('/signup', UserController.signup);




module.exports = router