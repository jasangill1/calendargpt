import { DocumentData } from '@firebase/firestore-types';

type Props = {
    message: DocumentData

}

function Message({message}: Props) {
    return (
        <div className="flex items-center space-x-3 mb-2">
            message
        </div>
    )
}

export default Message