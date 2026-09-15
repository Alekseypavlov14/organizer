import type { GroupEntity } from '@/entities/groups'
import { updateGroupsSelector, useGroupSelectionStore } from '../selection.store'
import { useEffect } from 'react'

export function useGroupSelectionGroups(groups: GroupEntity[]) {
  const updateGroups = useGroupSelectionStore(updateGroupsSelector)
  
  useEffect(() => updateGroups(groups), [groups])
}
