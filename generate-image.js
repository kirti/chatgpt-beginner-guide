
import OpenAI from "openai";
import 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY // This is the default and can be omitted
  });
  
const prompt = `Generate image for krishna wearing red dress`;

async function main() {
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: `${prompt}`,
    n: 1,
    size: "1024x1024"
  });

  console.log(image.data)
}

main();
