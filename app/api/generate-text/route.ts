// app/api/generate-text/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import openai from '@/lib/opeaiInstance';

export async function post(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const requestBody = req.body;
  const prompt = requestBody.prompt;

  try {
    const result = await openai.ChatCompletion.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
    });

    const generatedText = result.choices[0].message.content.trim();

    res.status(200).json({ generatedText });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ error: 'Error calling OpenAI API' });
  }
}
