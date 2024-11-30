const express = require("express");
const router = express.Router();
const { getRandomBooks } = require("../controllers/randomBooks");

router.post("/random-books", getRandomBooks);

module.exports = router;