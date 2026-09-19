import type { GroupExplorerInstance } from './types/GroupExplorerInstance'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { explorerModeHierarchy, explorerModeSearch } from './constants'
import { createGroupExplorerStore } from './explorer.store'
import { type GroupEntity } from '@/entities/groups'

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

    function navigateGroup(group: Nullable<GroupEntity>) {
      store.updateCurrentGroup(group)
      store.updateExplorerMode(explorerModeHierarchy)
    }

    function navigateGroupById(id: Nullable<Id>) {
      if (!id) return navigateRoot()

      const group = store.groups.find(group => group.id === id)
      if (!group) return

      navigateGroup(group)
    }

    function navigateParent() {
      const parentId = store.currentGroup?.parentId ?? null
      navigateGroupById(parentId)
    }

    function navigateRoot() {
      navigateGroup(null)
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

      navigateGroup,
      navigateGroupById,
      navigateParent,
      navigateRoot,

      load,
      reset,
    })
  }
}
