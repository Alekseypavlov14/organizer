import type { GroupExplorerInstance } from '../types/GroupExplorerInstance'
import type { GroupEntity } from '@/entities/groups'
import { useEffect } from 'react'

export function useGroupExplorerGroups(instance: GroupExplorerInstance, groups: GroupEntity[]) {
  useEffect(() => instance.load(groups), [groups])
}
