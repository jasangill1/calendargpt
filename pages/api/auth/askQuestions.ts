import { adminDb } from '@/firebaseAdmin'
import { query } from '../../../lib/queryApi'
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'

type Data = {
    answer: string
}

export default async function handler(

    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body

    //caliGPT query

    const response = await query(prompt, chatId, model)
    const message : Message ={
        text: response || "chatbot: I don't know what to say", 
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: 'CaliGPT',
            avatar: 'https://placeimg.com/140/140/any',
        },
    }

    await adminDb
    .collection('users')
    .doc(session?.user?.email!)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);

    res.status(200).json({ answer: message.text });
}