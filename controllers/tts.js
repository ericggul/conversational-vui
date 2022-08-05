const textToSpeech = require("@google-cloud/text-to-speech");

const tts = async (req, res) => {
  try {
    const client = new textToSpeech.TextToSpeechClient();

    const text = req.body.text || "HELLO WORLD";

    const request = {
      input: { text },
      voice: { languageCode: "en-UK", ssmlGender: "NEUTRAL" },
      audioConfig: { audioEncoding: "LINEAR16" },
    };

    const [response] = await client.synthesizeSpeech(request);
    res.send(response.audioContent);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
//function getting random element from array
const getRandomFromArray = (array) => array[Math.floor(Math.random() * array.length)];

const ttsOpenAI = async (req, res) => {
  try {
    const client = new textToSpeech.TextToSpeechClient();

    const keyword = req.body.keyword;
    const question = `Why is ${keyword} a ${keyword}?`;
    let text = req.openAIText || "HELLO WORLD";
    text = question.concat("/n", text);

    const request = {
      input: { text },
      voice: {
        languageCode: "en-GB",
        name: getRandomFromArray(["en-GB-Wavenet-A", "en-GB-Wavenet-B", "en-GB-Wavenet-C", "en-GB-Wavenet-D", "en-GB-Wavenet-F"]),
      },
      audioConfig: { audioEncoding: "LINEAR16" },
    };

    const [response] = await client.synthesizeSpeech(request);
    // res.send(response.audioContent);
    res.send(response);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

module.exports = { tts, ttsOpenAI };
