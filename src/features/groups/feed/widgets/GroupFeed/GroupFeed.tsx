import type { GroupFeedStore } from '../../feed.store'
import type { ReactNode } from 'react'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { GroupFeedProvider } from '../../providers/GroupFeedProvider'

interface GroupFeedProps {
  store: GroupFeedStore
  children?: ReactNode
}

export function GroupFeed({
  store,
  children,
}: GroupFeedProps) {
  return (
    <GroupFeedProvider store={store}>
      <Flex 
        direction={flexDirectionVertical}
        gap={flexGapMedium}
      >
        {children}
      </Flex>

      {children}
    </GroupFeedProvider>
  )
}
