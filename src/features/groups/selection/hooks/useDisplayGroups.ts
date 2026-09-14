import type { GroupEntity } from '@/entities/groups'
import { selectionModeSelector, useGroupSelectionStore } from '../selection.store'
import { selectionModeHierarchy, selectionModeSearch } from '../constants'
import { useGroupsBySearchQuery } from './useGroupsBySearchQuery'
import { useGroupsByHierarchy } from './useGroupsByHierarchy'

export function useDisplayGroups(): GroupEntity[] {
  const groupsBySearchQuery = useGroupsBySearchQuery()
  const groupsByHierarchy = useGroupsByHierarchy()

  const selectionMode = useGroupSelectionStore(selectionModeSelector)

  const displayGroups = ({
    [selectionModeSearch]: groupsBySearchQuery,
    [selectionModeHierarchy]: groupsByHierarchy,
  })[selectionMode]

  return displayGroups
}
