import type { NotionDisplayStore } from '../../display.store'
import { NotionDisplayProvider } from '../../providers/NotionDisplayProvider'
import { NotionDisplayView } from '../../views/NotionDisplayView'

export interface NotionDisplayProps {
  store: NotionDisplayStore
}

export function NotionDisplay({ store }: NotionDisplayProps) {
  return (
    <NotionDisplayProvider store={store}>
      <NotionDisplayView />
    </NotionDisplayProvider>
  )
}
