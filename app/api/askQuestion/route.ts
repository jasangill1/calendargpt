import { adminDb } from '@/firebaseAdmin';
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import query from '@/lib/queryApi';

type Data = {
  answer: string;
};

export async function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  const { prompt, chatId, session, model } = req.body;
  if (!prompt || !chatId || !model || !session?.user?.email) {
    console.error('Invalid request body');
    return res.status(400).json({ answer: 'Invalid request body' });
  }

 

  // Call caliGPT query
 
  const response = await query(prompt, chatId, model);

 

  // Log the response as a string
  

  const message = {
    text: response || "chatbot: I don't know what to say",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'CaliGPT',
      avatar: 'https://links.papareact.com/89k',
    },
  };

 

  try {
    await adminDb
      .collection('users')
      .doc(session?.user?.email!)
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .add(message);
   
  } catch (error) {
   
  }

  res.status(200).json({ answer: message.text });
}
