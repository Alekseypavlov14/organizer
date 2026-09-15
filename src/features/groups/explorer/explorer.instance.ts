import type { GroupExplorerInstance } from './types/GroupExplorerInstance'
import type { GroupEntity } from '@/entities/groups'
import type { Nullable } from '@/shared/types/nullable'
import { explorerModeHierarchy, explorerModeSearch } from './constants'
import { createGroupExplorerStore } from './explorer.store'

export function createGroupExplorerInstance() {
  const useStore = createGroupExplorerStore()
  
  return function useGroupExplorer(): GroupExplorerInstance {
    const store = useStore()

    function searchGroups(query: string) {
      store.updateSearchQuery(query)

      if (query.length === 0) {
        store.updateExplorerMode(explorerModeHierarchy)
        return store.updateCurrentGroup(null)
      }

      store.updateExplorerMode(explorerModeSearch)      
    }

    function selectGroup(group: Nullable<GroupEntity>) {
      store.updateCurrentGroup(group)
      store.updateExplorerMode(explorerModeHierarchy)
    }

    function navigateRoot() {
      store.updateCurrentGroup(null)
    }

    function reset() {
      store.updateSearchQuery('')
      store.updateCurrentGroup(null)
      store.updateExplorerMode(explorerModeHierarchy)
    }

    function load(groups: GroupEntity[]) {
      store.updateGroups(groups)
    }

    return ({
      store,

      searchGroups,
      selectGroup,
      navigateRoot,

      load,
      reset,
    })
  }
}
