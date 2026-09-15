import type { GroupExplorerInstance } from '../types/GroupExplorerInstance'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { useMemo } from 'react'

export function useGroupExplorerGroupsByHierarchy(instance: GroupExplorerInstance): GroupEntity[] {
  const groupActions = useGroupActions()

  return useMemo(() => {
    const currentGroupId = instance.store.currentGroup?.id ?? null
    const children = groupActions.getGroupChildrenById(currentGroupId) ?? []
    
    return children.filter(child => instance.store.groups.some(group => group.id === child.id))
  }, [instance.store.groups, instance.store.currentGroup])
}
