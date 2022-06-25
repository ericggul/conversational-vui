const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function testFunction(req, res, next) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.keyword),
    max_tokens: 256,
    temperature: 0.6,
  });

  req.openAIText = completion.data.choices[0].text;
  next();
}

function generatePrompt(keyword) {
  return `Why is ${keyword} a ${keyword}?`;
}

module.exports = { testFunction };
