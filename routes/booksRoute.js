const express = require("express");
const router = express.Router();
const { getRandomBooks } = require("../controllers/randomBooks");

router.get("/random-books", getRandomBooks);

module.exports = router;