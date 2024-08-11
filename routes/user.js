const express = require("express");
const { getUsers, addUser, getuserById } = require("../controllers/user");

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getuserById);

router.post("/", addUser);

module.exports = router;