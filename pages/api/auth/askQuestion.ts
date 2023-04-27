import type { NextApiRequest, NextApiResponse } from "next";
import query from "@/lib/queryApi";

type Data = {
    answer: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { prompt, chatId, model, session } = req.body;
    if(!prompt || !chatId || !model || !session) {
        res.status(400).json({ answer: "Missing parameters" });
        return;
    }
// ChatGPT Query

    const response = await query(prompt, chatId, model);
    console.log('Received query response:', response);

    const message: Message = {
        text: response || "chatbot: I don't know what to say",

    res.status(200).json({ answer: "John Doe" });
}
