import './globals.css'
import Sidebar from '../components/sidebar'
import { SessionProvider } from "../components/SessionProvider"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'


export const metadata = {
  title: 'CalendarGPT',
  description: 'Takes care of your schdule',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const session = await getServerSession(authOptions);

  return (
    
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
              <Login />
          ): (

            <div className='flex'>
            <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
              <Sidebar />
            </div>
              
             
              <ClientProvider/>

              <div className='bg-[#342541] flex-1'>{children}</div>
            </div>
           )}
        </SessionProvider>
      </body>
    </html>
  )
}
