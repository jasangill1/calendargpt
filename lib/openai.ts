import axios from 'axios';

export async function generateText(prompt: string): Promise<string> {
  try {
    const response = await axios.post('/api/generate-text', { prompt });
    return response.data.generatedText;
  } catch (error) {
    console.error('Error generating text:', error);
    return '';
  }
}