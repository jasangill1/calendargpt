import { DocumentData } from '@firebase/firestore-types';

type Props = {
    message: DocumentData

}

function Message({message}: Props) {
    return (
        <div>
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <img src={message.user.avatar} alt="" className='h-8 w-8'/>
                <p>
                    {message.text}
                </p>
            </div>
        </div>
    )
}

export default Message