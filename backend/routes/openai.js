const { Router } = require("express");
const router = Router();

const { testFunction } = require("../controllers/openai.js");

router.post("/", testFunction);

module.exports = router;
