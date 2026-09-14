import type { GroupEntity } from '@/entities/groups'
import { groupsSelector, searchQuerySelector, useGroupSelectionStore } from '../selection.store'
import { useMemo } from 'react'

export function useGroupsBySearchQuery(): GroupEntity[] {
  const groups = useGroupSelectionStore(groupsSelector)
  const searchQuery = useGroupSelectionStore(searchQuerySelector)

  return useMemo(() => {
    return groups.filter(group => (
      group.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    ))
  }, [groups, searchQuery])
}
