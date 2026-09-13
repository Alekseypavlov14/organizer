import type { EntityFilter } from '../shared/interfaces/entity.filter'
import type { NotionEntity } from './notion.entity'
import { notionsSelector, useNotionsStore } from './notion.store'
import { useMemo } from 'react'

export function useNotionsStoreFilter(filter: EntityFilter<NotionEntity>) {
  const notions = useNotionsStore(notionsSelector) 
  const filtered = useMemo(() => notions.filter(filter), [])

  return filtered
}
