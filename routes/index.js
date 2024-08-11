const express = require("express");
const userController = require('./user');

const router = express.Router();

router.use('/user', userController);

module.exports = router;