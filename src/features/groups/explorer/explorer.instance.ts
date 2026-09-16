import type { GroupExplorerInstance } from './types/GroupExplorerInstance'
import type { Nullable } from '@/shared/types/nullable'
import { explorerModeHierarchy, explorerModeSearch } from './constants'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { createGroupExplorerStore } from './explorer.store'
import { isNull } from '@/shared/utils/validation'

export function createGroupExplorerInstance() {
  const useStore = createGroupExplorerStore()
  
  return function useGroupExplorer(): GroupExplorerInstance {
    const store = useStore()
    const groupActions = useGroupActions()

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

    function navigateParent() {
      if (!store.currentGroup) return

      if (isNull(store.currentGroup.parentId)) return navigateRoot()

      const parent = groupActions.getGroupById(store.currentGroup.parentId)
      if (!parent) return

      store.updateCurrentGroup(parent)
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

      navigateParent,
      navigateRoot,

      load,
      reset,
    })
  }
}
