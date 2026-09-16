import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { groupsSelector, useGroupsStore } from '@/entities/groups'
import { useGroupMove } from './useGroupMove'
import { useMemo } from 'react'

export function useGroupMoveCandidates(groupId: Nullable<Id>) {
  const groups = useGroupsStore(groupsSelector)
  const groupMove = useGroupMove()

  return useMemo(() => groupMove.getGroupMoveCandidatesById(groupId), [groups, groupId])
}
