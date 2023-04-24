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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>

          <h2>Example</h2>
          <div className="space-y-2">
            <p className="infoText">"What does my schedule look like on Thursdays"</p>
            <p className="infoText">"How can I be more efficient?"</p>
            <p className="infoText">"What is the longest month"</p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>

          <h2>Example</h2>
          <div className="space-y-2">
            <p className="infoText">"What does my schedule look like on Thursdays"</p>
            <p className="infoText">"How can I be more efficient?"</p>
            <p className="infoText">"What is the longest month"</p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

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
