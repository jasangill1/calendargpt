import { adminDb } from '@/firebaseAdmin';
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';

import query from '@/lib/queryApi';

type Data = {
  answer: string;
};


export async function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (!res) {
        console.error('Response object is null or undefined');
        return;
      }
  const { prompt, chatId, model, session } = req.body;



  console.log('Received request:', req.body);

  // caliGPT query
  console.log('Sending query:', prompt, chatId);
  const response = await query(prompt, chatId);
  console.log('Received query response:', response);

  const message: Message = {
    text: response || "chatbot: I don't know what to say",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'CaliGPT',
      avatar: 'https://i.imgur.com/7k12EPD.png',
    },
  };

  console.log('Adding message to Firestore:', message);
  await adminDb
    .collection('users')
    .doc(session?.user?.email!)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);
  console.log('Message added successfully');

  res.status(200).json({ answer: message.text });
}
