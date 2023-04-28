import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';
import query from '@/lib/queryApi';

type Data = {
  answer: string;
};

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    
  }
   
  const { prompt, chatId, model, session } = req.body;
  

  console.log(
    'Received request with prompt:',
    prompt,
    ', chatId:',
    chatId,
    ', session:',
    session,
    ', and model:',
    model
  );
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "chatbot: I don't know what to say",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'CaliGPT',
      avatar: 'https://links.papareact.com/89k',
    },
  };

  await adminDb
    .collection('users')
    .doc(session?.user?.email! || '')
    .collection('chats')
    .doc(chatId || '')
    .collection('messages')
    .add(message);

  res.status(200).json({ answer: message.text });
}

export async function c(req: NextApiRequest, res: NextApiResponse<Data>) {
  // handle GET requests here
}
