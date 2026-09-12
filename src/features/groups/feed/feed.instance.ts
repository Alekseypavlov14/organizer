import type { GroupEntity } from '@/entities/groups'
import { createGroupFeedStore } from './feed.store'

export function createGroupFeedInstance() {
  const useStore = createGroupFeedStore()

  return function useGroupFeed() {
    const store = useStore()

    // actions
    function updateGroups(notions: GroupEntity[]) {
      store.updateGroups(notions)
    }
  
    return ({
      store, 
  
      updateGroups,
    })
  }
}
