import type { ReactNode } from 'react'
import { Wrapper, type WrapperVariant } from '@/shared/components/Wrapper'
import { Notifications } from '@/app/notifications'

interface PageLayoutProps {
  children: ReactNode
  variant?: WrapperVariant
}

export function PageLayout({ children, variant }: PageLayoutProps) {
  return (
    <Wrapper variant={variant}>
      <Notifications />

      {children}
    </Wrapper>
  )
}
