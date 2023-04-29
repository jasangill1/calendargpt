import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';
import query from '@/lib/queryApi';

// Define the expected response data
type Data = {
  answer: string;
};

// Define the handler function for the API endpoint
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check that the request method is POST, otherwise return a 405 error
  if (req.method !== 'POST') {
    console.log('Request method was not POST');
    res.status(405).end(); // Method Not Allowed
    return;
  }

  // Extract the necessary data from the request body
  const { prompt, chatId, model, session } = req.body;

  // Log the request data
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

  // Call the query function to generate a response to the prompt
  const response = await query(prompt, chatId, model);
  
  console.log('Generated response:', response);

  // Create a new message object with the response and other data
  const message = {
    text: response || "chatbot: I don't know what to say",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'CaliGPT',
      avatar: 'https://links.papareact.com/89k',
    },
  };

  console.log('Created message:', message);

  // Add the message to the Firestore database for the specified user and chat
  await adminDb
    .collection('users')
    .doc(session?.user?.email! || '')
    .collection('chats')
    .doc(chatId || '')
    .collection('messages')
    .add(message);

  console.log('Added message to database');

  // Send the response with the generated message text
  res.status(200).json({ answer: message.text });
}
