import type { ReactNode } from 'react'
import { Notifications } from '@/app/notifications'
import { Wrapper } from '@/shared/components/Wrapper'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Wrapper>
      <Notifications />

      {children}
    </Wrapper>
  )
}
