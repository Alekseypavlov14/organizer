import type { NotionDisplayStore } from '../../display.store'
import { NotionDisplayProvider } from '../../providers/NotionDisplayProvider'
import { NotionDisplayTemplate } from '../../templates/NotionDisplayTemplate'

export interface NotionDisplayProps {
  store: NotionDisplayStore
}

export function NotionDisplay({ store }: NotionDisplayProps) {
  return (
    <NotionDisplayProvider store={store}>
      <NotionDisplayTemplate />
    </NotionDisplayProvider>
  )
}
