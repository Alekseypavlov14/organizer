import type { EntityFilter } from '../shared'
import type { GroupEntity } from './group.entity'
import { groupsSelector, useGroupsStore } from './group.store'
import { useMemo, type DependencyList } from 'react'

export function useGroupStoreFilter(filter: EntityFilter<GroupEntity>, deps: DependencyList = []) {
  const groups = useGroupsStore(groupsSelector)
  const filtered = useMemo(() => groups.filter(filter), deps)
  
  return filtered
}
