import type { NotionFeedVariant } from './constants'
import type { NotionEntity } from '@/entities/notions'
import type { Nullable } from '@/shared/types/nullable'
import { createNotionFeedStore } from './feed.store'

export function createNotionFeedInstance() {
  const useStore = createNotionFeedStore()

  return function useNotionFeed() {
    const store = useStore()

    function updateNotions(notions: NotionEntity[]) {
      store.updateNotions(notions)
    }
    function updateVariant(variant: NotionFeedVariant) {
      store.updateVariant(variant)
    }
    function updateSelectedNotion(notion: Nullable<NotionEntity>) {
      store.updateSelectedNotion(notion)
    } 
  
    return ({
      store, 
  
      updateNotions,
      updateVariant,
      updateSelectedNotion,
    })
  }
}
