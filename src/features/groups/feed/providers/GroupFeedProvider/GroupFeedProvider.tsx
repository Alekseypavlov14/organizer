import type { GroupFeedStore } from '../../feed.store'
import type { ReactNode } from 'react'
import { GroupFeedContext } from '../../feed.context'

interface GroupFeedProviderProps {
  store: GroupFeedStore
  children: ReactNode
}

export function GroupFeedProvider({ store, children }: GroupFeedProviderProps) {
  return (
    <GroupFeedContext value={store}>
      {children}
    </GroupFeedContext>
  )
}
