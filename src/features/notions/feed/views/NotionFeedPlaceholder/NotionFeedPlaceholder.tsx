import type { ReactNode } from 'react'
import { notionFeedDefaultPlaceholder } from '../../constants'
import { useNotionFeedContext } from '../../hooks/useNotionFeedContext'
import { Placeholder } from '@/shared/components/Placeholder'
import { Text } from '@/shared/components/Text'

export interface NotionFeedPlaceholderProps {
  children?: ReactNode
}

export function NotionFeedPlaceholder({ 
  children = notionFeedDefaultPlaceholder
}: NotionFeedPlaceholderProps) {
  const { notions } = useNotionFeedContext()

  if (notions.length > 0) return null

  return (
    <Placeholder>
      <Text>{children}</Text>
    </Placeholder>
  )
}
