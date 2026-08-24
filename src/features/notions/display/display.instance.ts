import type { NotionEntity } from '@/entities/notions'
import { createNotionDisplayStore } from './display.store'

export function createNotionDisplayInstance() {
  const useStore = createNotionDisplayStore()
  const store = useStore()

  // actions
  function updateNotion(notion: NotionEntity) {
    store.updateNotion(notion)
  }

  return ({
    store, 
    updateNotion
  })
}
