import type { NotionFeedStore } from '../../feed.store'
import type { ReactNode } from 'react'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { NotionFeedProvider } from '../../providers/NotionFeedProvider'

interface NotionFeedProps {
  store: NotionFeedStore
  children?: ReactNode
}

export function NotionFeed({
  store,
  children,
}: NotionFeedProps) {
  return (
    <NotionFeedProvider store={store}>
      <Flex 
        direction={flexDirectionVertical}
        gap={flexGapMedium}
      >
        {children}
      </Flex>
    </NotionFeedProvider>
  )
}
