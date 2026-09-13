import type { GroupFeedStore } from '../../feed.store'
import type { ReactNode } from 'react'
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
      {children}
    </GroupFeedProvider>
  )
}
