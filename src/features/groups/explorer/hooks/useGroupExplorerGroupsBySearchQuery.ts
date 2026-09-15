import type { GroupExplorerInstance } from '../types/GroupExplorerInstance'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { useMemo } from 'react'

export function useGroupExplorerGroupsBySearchQuery(instance: GroupExplorerInstance): GroupEntity[] {
  const groupActions = useGroupActions()

  return useMemo(() => {
    const searched = groupActions.getGroupsBySearchQuery(instance.store.searchQuery)
    
    return searched.filter(searched => instance.store.groups.some(group => group.id === searched.id))
  }, [instance.store.groups, instance.store.searchQuery])
}
