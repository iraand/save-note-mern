const express = require('express');
const router = express.Router();
const {
 registerUser,
 loginUser,
 getUser,
} = require("../controllers/user.controller");


router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user", getUser);

module.exports = router;