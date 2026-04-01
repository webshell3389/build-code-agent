// OpenAI Configuration
const OpenAI = require('openai');

const configuration = new OpenAI.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);

module.exports = { openai };