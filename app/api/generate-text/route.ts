// app/api/generate-text/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import openai from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
openai.apiKey = apiKey;

export async function post(req: NextApiRequest, res: NextApiResponse) {
  const requestBody = req.body;
  const prompt = requestBody.prompt;

  try {
    const result = await openai.Completion.create({
      engine: 'davinci-codex',
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    const generatedText = result.choices[0].text.trim();

    res.status(200).json({ generatedText });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ error: 'Error calling OpenAI API' });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return post(req, res);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
