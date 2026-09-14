import type { GroupEntity } from '@/entities/groups'
import { useGroupSelectionStore, groupsSelector, currentGroupSelector } from '../selection.store'
import { useMemo } from 'react'

export function useGroupsByHierarchy(): GroupEntity[] {
  const groups = useGroupSelectionStore(groupsSelector)
  const currentGroup = useGroupSelectionStore(currentGroupSelector)

  return useMemo(() => {
    const currentGroupId = currentGroup?.id ?? null
    return groups.filter(group => group.parentId === currentGroupId)
  }, [groups, currentGroup])
}
