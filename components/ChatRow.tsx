
import { ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react'

type Props = {
    id: string;
}

function ChatRow({id}: Props) {
    return (
        <Link href={`/chat/${id}`}>
            <ChatBubbleLeftIcon className="h-5 w-5"/>
            
        </Link> 
    )
}

export default ChatRow