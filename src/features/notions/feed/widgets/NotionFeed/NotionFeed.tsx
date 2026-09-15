import type { NotionFeedStore } from '../../feed.store'
import type { ReactNode } from 'react'
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
      {children}
    </NotionFeedProvider>
  )
}
