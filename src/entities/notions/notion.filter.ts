import type { EntityFilter } from '../shared'
import type { NotionEntity } from './notion.entity'
import { notionsSelector, useNotionsStore } from './notion.store'
import { useMemo, type DependencyList } from 'react'

export function useNotionsStoreFilter(filter: EntityFilter<NotionEntity>, deps: DependencyList = []) {
  const notions = useNotionsStore(notionsSelector) 
  const filtered = useMemo(() => notions.filter(filter), deps)

  return filtered
}
