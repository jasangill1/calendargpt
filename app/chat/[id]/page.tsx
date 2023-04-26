import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import React from "react";

type Props = {
    params: {
        id: string;
    };
}

function ChatPage({params: {id}}:Props) {
  return <div className="flex flex-col h-screen overflow-hidden">
    <Chat chatId={id}/>
    <ChatInput chat={id}/>
  </div>;
}

export default ChatPage;