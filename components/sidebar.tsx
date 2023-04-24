// components/sidebar.tsx
import React from 'react';
import NewChat from './NewChat';

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;
