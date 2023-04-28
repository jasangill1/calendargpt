'use client'

import React from "react";
import { useSession } from "next-auth/react";
import { db } from "@/firebase";
import { collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
    chatId: string;
}

function Chat({chatId}:Props) {
    const {data: session} = useSession();
    const [messages] = useCollection(session && query(
        collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
    )
    return <div className="flex-1">Chat</div>;
   


}

    export  default Chat;
