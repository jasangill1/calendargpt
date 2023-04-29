import { DocumentData } from '@firebase/firestore-types';
import Image from 'next/image';

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isCaliGPT = message.user.name === 'CaliGPT';
  return (
    <div className={`py-5 text-white ${isCaliGPT && 'bg-[#88c466]'}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <Image
          src={message.user.avatar}
          alt=""
          className="h-8 w-8"
        />
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
