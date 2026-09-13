import type { ReactNode } from 'react'
import { groupFeedDefaultPlaceholder } from '../../constants'
import { Placeholder } from '@/shared/components/Placeholder'
import { Text } from '@/shared/components/Text'

interface GroupFeedPlaceholderProps {
  children?: ReactNode
}

export function GroupFeedPlaceholder({ 
  children = groupFeedDefaultPlaceholder
}: GroupFeedPlaceholderProps) {
  return (
    <Placeholder>
      <Text>{children}</Text>
    </Placeholder>
  )
}
