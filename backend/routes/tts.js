const { Router } = require("express");
const router = Router();

const { tts } = require("../controllers/tts.js");

router.get("/", tts);

module.exports = router;
