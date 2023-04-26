'use client'

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";


type Props = {
    chatId: string;
}

function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState("");
    const {data: session} = useSession();

    const sendMessage = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if(!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
            }
        }

        await addDoc(collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), message);
            
        //notifcation loading 
        const notification =toast.loading("CaliGPT is thinking...");

        await fetch("/api/askQuestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: input, chatId, model:"Gpt-3.5-turbo", session
            })
        }).then(() => {
            //notification done
            toast.success('CaliGPT has responded!',
             {id: notification});
        });
    }


    return <div>
        <form onSubmit={sendMessage} className="p-5 space-x-5 flex items-center">
            <input 
                value={prompt}
                onChange={e => {setPrompt(e.target.value)}}
                type="text" 
                placeholder="Type a message" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none 
                focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
            <button 
                disabled={!prompt||!session}
                className="bg-[#11A3FF] text-white px-4 py-2 rounded-md hover:bg-[#0484FF] transition-all] disabled:bg-gray-300 disabled:curesor-not-allowed"
                type="submit" >
                 <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>   
            </button>  
        </form>
    </div>;
}


export default ChatInput;