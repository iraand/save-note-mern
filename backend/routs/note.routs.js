const express = require('express');
const router = express.Router();
const { getNotes, setNote, updateNote, deleteNote } = require("../controllers/notes.controller");


const {protect} = require('../middleware/auth.middleware')

router.route("/").get(protect, getNotes).post(protect, setNote);
router.route("/:id").delete(protect, deleteNote).put(protect, updateNote);

// router.get("/", getNotes);

// router.post("/", setNote);

// router.put("/:id", updateNote);

// router.delete("/:id", deleteNote);


module.exports = router;