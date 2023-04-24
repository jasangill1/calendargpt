import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from 'components/sidebar.tsx';
import { getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/client';
import { authOptions } from './api/hello/auth/[...nextauth]';
import Login from 'components/login';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CalendarGPT',
  description: 'Takes care of your schdule',
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>

              {/*ClientProvider*/}

              <div className="bg-[#342541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req);

  return {
    props: { session },
  };
}
