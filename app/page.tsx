import Image from 'next/image';
import { Inter } from 'next/font/google';
import { BreakerIcon } from '@heroicons/react/24/solid';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">CalendarGPT</h1>

      <div className="flex space-x-4 text-center">
        <div className="flex flex-col items-center mb-5">
          <h2>Example</h2>
          <div className="space-y-2">
            <p className="infoText">"What does my schedule look like on Thursdays"</p>
            <p className="infoText">"How can I be more efficient?"</p>
            <p className="infoText">"What is the longest month"</p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-5">
          <h2>Example</h2>
          <div className="space-y-2">
            <p className="infoText">"What does my schedule look like on Thursdays"</p>
            <p className="infoText">"How can I be more efficient?"</p>
            <p className="infoText">"What is the longest month"</p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-5">
          <h2>Example</h2>
          <div className="space-y-2">
            <p className="infoText">"What does my schedule look like on Thursdays"</p>
            <p className="infoText">"How can I be more efficient?"</p>
            <p className="infoText">"What is the longest month"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
