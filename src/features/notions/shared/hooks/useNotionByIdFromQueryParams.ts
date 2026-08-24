import { useNotionActions, type NotionEntity } from '@/entities/notions'
import { defaultEntityIdParam } from '@/app/routing/constants'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export interface UseNotionByIdFromQueryParamsProps {
  success?: (notionEntity: NotionEntity) => void
  failure?: () => void
  param?: string
}

export function useNotionByIdFromQueryParams({
  success = () => {},
  failure = () => {},
  param = defaultEntityIdParam,
}: UseNotionByIdFromQueryParamsProps = {}) {
  const { getNotionById } = useNotionActions()
  const id = Number(useParams()[param])

  useEffect(() => {
    if (!id) return failure()
    
    const notion = getNotionById(id)
    if (!notion) return failure()
  
    success(notion)
  }, [])
}
