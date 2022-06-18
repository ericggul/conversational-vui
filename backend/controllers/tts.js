const { response } = require("express");
const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

const tts = async (req, res) => {

  const client = new textToSpeech.TextToSpeechClient();

  const text = req.body.text || "HELLO WORLD"
  const request = {
    input: { text },
    voice: { languageCode: "en-UK", ssmlGender: "NEUTRAL" },
    audioConfig: { audioEncoding: "LINEAR16" },
  };

  const [response] = await client.synthesizeSpeech(request);
  console.log(response);
  res.send(response.audioContent);
};

module.exports = { tts };
