import type { ReactNode } from 'react'
import { groupFeedDefaultPlaceholder } from '../../constants'
import { useGroupFeedContext } from '../../hooks/useGroupFeedContext'
import { Placeholder } from '@/shared/components/Placeholder'
import { Text } from '@/shared/components/Text'

interface GroupFeedPlaceholderProps {
  children?: ReactNode
}

export function GroupFeedPlaceholder({ 
  children = groupFeedDefaultPlaceholder
}: GroupFeedPlaceholderProps) {
  const { groups } = useGroupFeedContext()

  if (groups.length > 0) return null

  return (
    <Placeholder>
      <Text>{children}</Text>
    </Placeholder>
  )
}
