const { Router } = require("express");
const router = Router();

const { textGenerator } = require("../controllers/openai.js");
const { ttsOpenAI } = require("../controllers/tts.js");

router.get("/", (req, res) => res.send("OpenAI"));
router.post("/", textGenerator, ttsOpenAI);

module.exports = router;
