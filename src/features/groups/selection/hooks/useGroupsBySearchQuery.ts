import { groupsSelector, searchQuerySelector, useGroupSelectionStore } from '../selection.store'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { useMemo } from 'react'

export function useGroupsBySearchQuery(): GroupEntity[] {
  const groups = useGroupSelectionStore(groupsSelector)
  const searchQuery = useGroupSelectionStore(searchQuerySelector)

  const groupActions = useGroupActions()

  return useMemo(() => {
    const searched = groupActions.getGroupsBySearchQuery(searchQuery)
    return searched.filter(searched => groups.some(group => group.id === searched.id))
  }, [groups, searchQuery])
}
