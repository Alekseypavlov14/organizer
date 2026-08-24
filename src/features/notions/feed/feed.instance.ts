import type { NotionFeedVariant } from './constants'
import type { NotionEntity } from '@/entities/notions'
import { createNotionFeedStore } from './feed.store'

export function createNotionFeedInstance() {
  const useStore = createNotionFeedStore()

  return function useNotionFeed() {
    const store = useStore()

    // actions
    function updateNotions(notions: NotionEntity[]) {
      store.updateNotions(notions)
    }
    function updateVariant(variant: NotionFeedVariant) {
      store.updateVariant(variant)
    }
  
    return ({
      store, 
  
      updateNotions,
      updateVariant,
    })
  }
}
