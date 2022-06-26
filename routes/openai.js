const { Router } = require("express");
const router = Router();

const { testFunction } = require("../controllers/openai.js");
const { ttsOpenAI } = require("../controllers/tts.js");

router.post("/", testFunction, ttsOpenAI);

module.exports = router;
