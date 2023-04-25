// components/sidebar.tsx
'use client'
import React from 'react';
import NewChat from './NewChat';
import { useSession, signOut } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        {/*new event*/}
        <NewChat />
           <div>
                {/*Model*/}
           </div>
              {/*Map through the chat rows*/}
      </div>
      {session && (
        <img onClick={() => signOut()} src={session.user?.image!} alt="Profile Picture"
          className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
        />
      )}
    </div>
  );
};

export default Sidebar;
