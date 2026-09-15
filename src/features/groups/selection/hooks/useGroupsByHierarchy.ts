import { useGroupSelectionStore, groupsSelector, currentGroupSelector } from '../selection.store'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { useMemo } from 'react'

export function useGroupsByHierarchy(): GroupEntity[] {
  const groups = useGroupSelectionStore(groupsSelector)
  const currentGroup = useGroupSelectionStore(currentGroupSelector)

  const groupActions = useGroupActions()

  return useMemo(() => {
    const currentGroupId = currentGroup?.id ?? null
    const children = groupActions.getGroupChildrenById(currentGroupId) ?? []
    return children.filter(child => groups.some(group => group.id === child.id))
  }, [groups, currentGroup])
}
