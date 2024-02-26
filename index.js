import OpenAI from "openai";
import 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY // This is the default and can be omitted
  });
  
const keywords = 'react js , node js , javascript'

async function main() {
  
  const chatCompletion = await openai.chat.completions.create({
    messages: [{
        role: 'system',
        content: 'You are a person who loves coding and writing articles.',
      },
      {
        role: 'user',
        content: `Why do we need to fall in love with Coding, that targets the following comma-separated keywords: ${keywords}.`,
      },
    ],
    temperature: 0,
    model: 'gpt-3.5-turbo',
  });

  const postContent = chatCompletion?.choices[0]?.message.content;
  console.log(postContent)
}

main();