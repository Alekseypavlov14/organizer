import type { GroupExplorerInstance } from './types/GroupExplorerInstance'
import type { GroupEntity } from '@/entities/groups'
import { explorerModeHierarchy, explorerModeSearch } from './constants'
import { createGroupExplorerStore } from './explorer.store'

export function createGroupExplorerInstance() {
  const useStore = createGroupExplorerStore()
  
  return function useGroupExplorer(): GroupExplorerInstance {
    const store = useStore()

    function search(query: string) {
      store.updateSearchQuery(query)

      if (query.length === 0) {
        store.updateExplorerMode(explorerModeHierarchy)
        return store.updateCurrentGroup(null)
      }

      store.updateExplorerMode(explorerModeSearch)      
    }

    function select(group: GroupEntity) {
      store.updateCurrentGroup(group)
      store.updateExplorerMode(explorerModeHierarchy)
    }

    function load(groups: GroupEntity[]) {
      store.updateGroups(groups)
    }

    return ({
      store,

      search,
      select,

      load,
    })
  }
}
