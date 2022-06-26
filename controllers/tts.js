const textToSpeech = require("@google-cloud/text-to-speech");

const tts = async (req, res) => {
  const client = new textToSpeech.TextToSpeechClient();

  const text = req.body.text || "HELLO WORLD";

  const request = {
    input: { text },
    voice: { languageCode: "en-UK", ssmlGender: "NEUTRAL" },
    audioConfig: { audioEncoding: "LINEAR16" },
  };

  const [response] = await client.synthesizeSpeech(request);
  res.send(response.audioContent);
};
//function getting random element from array
const getRandomFromArray = (array) => array[Math.floor(Math.random() * array.length)];

const ttsOpenAI = async (req, res) => {
  const client = new textToSpeech.TextToSpeechClient();

  const text = req.openAIText || "HELLO WORLD";

  const request = {
    input: { text },
    voice: {
      languageCode: "en-GB",
      name: getRandomFromArray(["en-GB-Wavenet-A", "en-GB-Wavenet-B", "en-GB-Wavenet-C", "en-GB-Wavenet-D", "en-GB-Wavenet-F"]),
    },
    audioConfig: { audioEncoding: "LINEAR16" },
  };

  const [response] = await client.synthesizeSpeech(request);
  res.send(response.audioContent);
};

module.exports = { tts, ttsOpenAI };
