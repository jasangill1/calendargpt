'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";


type Props = {
    chatId: string;
}

function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState("");
    return <div>
        <form className="p-5 space-x-5 flex items-center">
            <input 
            value={prompt}
            onChange={e => {setPrompt(e.target.value)}}
            type="text" placeholder="Type a message" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
            <button type="submit" className="ml-2">
                 <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>   
            </button>  
        </form>
    </div>;
}


export default ChatInput;