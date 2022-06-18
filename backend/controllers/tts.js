const { response } = require("express");
const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

const tts = async (req, res) => {
  // const {text} = req.body;

  // if(text!== ""){
  //     return res.status(400).json({
  //         msg: `Text is required`
  //     })
  // }

  const client = new textToSpeech.TextToSpeechClient();

  const TEXT = "hello world";
  const request = {
    input: { text: TEXT },
    voice: { languageCode: "en-UK", ssmlGender: "NEUTRAL" },
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await client.synthesizeSpeech(request);
  res.send(response.audioContext);
};

module.exports = { tts };
