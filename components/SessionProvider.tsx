'use client'

import { Session }  from 'next-auth/client'
import { SessionProvider as Provider} from 'next-auth/react'
import { type } from 'os'

type Props = {
    children: React.ReactNode
    session: Session | null
}
export function SessionProvider({ children }: { children: React.ReactNode }) {
  return <Provider >{children}</Provider>
}
