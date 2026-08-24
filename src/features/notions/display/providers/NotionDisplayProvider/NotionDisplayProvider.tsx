import type { NotionDisplayStore } from '../../display.store'
import type { ReactNode } from 'react'
import { NotionDisplayContext } from '../../display.context'

interface NotionDisplayProviderProps {
  store: NotionDisplayStore
  children: ReactNode
}

export function NotionDisplayProvider({ store, children }: NotionDisplayProviderProps) {
  return (
    <NotionDisplayContext value={store}>
      {children}
    </NotionDisplayContext>
  )
}
