import type { ReactNode } from 'react'
import { Placeholder } from '@/shared/components/Placeholder'
import { Text } from '@/shared/components/Text'

interface GroupFeedPlaceholderProps {
  children?: ReactNode
}

export function GroupFeedPlaceholder({ children }: GroupFeedPlaceholderProps) {
  return (
    <Placeholder>
      <Text>{children}</Text>
    </Placeholder>
  )
}
