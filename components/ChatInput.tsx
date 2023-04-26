import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";


type Props = {
    chatId: string;
}

function ChatInput({chatId}: Props) {

    return <div>
        <form className="p-5 space-x-5 flex-1">
            <input type="text" placeholder="Type a message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
            <button type="submit">
                 <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>   
            </button>  
        </form>
    </div>;
      
}

export default ChatInput;