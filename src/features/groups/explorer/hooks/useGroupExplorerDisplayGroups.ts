import type { GroupExplorerInstance } from '../types/GroupExplorerInstance'
import type { GroupEntity } from '@/entities/groups'
import { explorerModeHierarchy, explorerModeSearch } from '../constants'
import { useGroupExplorerGroupsBySearchQuery } from './useGroupExplorerGroupsBySearchQuery'
import { useGroupExplorerGroupsByHierarchy } from './useGroupExplorerGroupsByHierarchy'

export function useGroupExplorerDisplayGroups(instance: GroupExplorerInstance): GroupEntity[] {
  const groupsBySearchQuery = useGroupExplorerGroupsBySearchQuery(instance)
  const groupsByHierarchy = useGroupExplorerGroupsByHierarchy(instance)

  const explorerMode = instance.store.explorerMode

  const displayGroups = ({
    [explorerModeSearch]: groupsBySearchQuery,
    [explorerModeHierarchy]: groupsByHierarchy,
  })[explorerMode]

  return displayGroups
}
