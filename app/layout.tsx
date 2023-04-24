import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from 'components/sidebar.tsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CalendarGPT',
  description: 'Takes care of your schdule',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
         <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
          <Sidebar />
         </div>
          
          {/*ClientProvider*/}

          <div className='bg-[#342541] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  )
}
