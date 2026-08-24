import type { NotionFeedStore } from '../../feed.store'
import type { ReactNode } from 'react'
import { NotionFeedContext } from '../../feed.context'

interface NotionFeedProviderProps {
  store: NotionFeedStore
  children: ReactNode
}

export function NotionFeedProvider({ store, children }: NotionFeedProviderProps) {
  return (
    <NotionFeedContext value={store}>
      {children}
    </NotionFeedContext>
  )
}
