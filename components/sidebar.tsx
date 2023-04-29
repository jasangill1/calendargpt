// components/sidebar.tsx
'use client'
import React from 'react';
import NewChat from './NewChat';
import { useSession, signOut } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import ChatRow from './ChatRow';
import Image from 'next/image';

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats"), orderBy("createAt", "asc")
    )
  );

  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        {/*new event*/}
        <NewChat />
        <div>
          {/*Model*/}
        </div>
        <div className='flex flex-col space-y-2 my-2'>

          {loading && (
            <p className='animate-pulse text-white text-center'>Loading...</p>    
          )
          }
        {/*Map through the chat rows*/}
        {chats?.docs.map(chat => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div>
      {session && (
        <Image
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Picture"
          width={48}
          height={48}
          className='rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
        />
      )}
    </div>
  </div>
  );
}

export default Sidebar;
