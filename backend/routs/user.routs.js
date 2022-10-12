const express = require('express');
const router = express.Router();
const {
 registerUser,
 loginUser,
 getUser,
} = require("../controllers/user.controller");

const {protect} = require('../middleware/auth.middleware')

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getUser);

module.exports = router;