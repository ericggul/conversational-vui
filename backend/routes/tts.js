const { Router } = require("express");
const router = Router();

const { tts } = require("../controllers/tts.js");

router.get("/", tts);
router.post('/', tts);

module.exports = router;
