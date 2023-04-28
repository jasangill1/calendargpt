import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    text: string;
}

interface GenerateNextApiResponse extends NextApiResponse {
    body: {
        prompt: string;
    };
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(
    req: NextApiRequest,
    res: GenerateNextApiResponse<ResponseData>
) {
    const prompt = req.body.prompt;

    const aiResult = await openai.createCompletion({
        model: "davinci",
        prompt: prompt,
        temperature: 0.9,
    });
    
    const response = aiResult.data.choices[0].text?.trim() || "I don't know what to say";
    res.status(200).json({ text: response });
}
