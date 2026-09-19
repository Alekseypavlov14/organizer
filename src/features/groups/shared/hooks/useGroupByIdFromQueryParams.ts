import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { defaultEntityIdParam } from '@/app/routing/constants'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export interface UseGroupByIdFromQueryParamsProps {
  success?: (groupEntity: GroupEntity) => void
  failure?: () => void
  param?: string
}

export function useGroupByIdFromQueryParams({
  success = () => {},
  failure = () => {},
  param = defaultEntityIdParam,
}: UseGroupByIdFromQueryParamsProps = {}) {
  const { getGroupById } = useGroupActions()
  const id = Number(useParams()[param])

  useEffect(() => {
    if (!id) return failure()
    
    const group = getGroupById(id)
    if (!group) return failure()
  
    success(group)
  }, [id])
}
