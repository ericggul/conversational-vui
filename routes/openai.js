const { Router } = require("express");
const router = Router();

const { testFunction } = require("../controllers/openai.js");
const { tts } = require("../controllers/tts.js");

router.post("/", testFunction, tts);

module.exports = router;
