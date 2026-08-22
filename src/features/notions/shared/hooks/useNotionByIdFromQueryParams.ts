import { defaultEntityIdParam } from '@/app/routing/constants'
import { useNotionActions } from '@/entities/notions'
import { useParams } from 'react-router-dom'

export interface UseNotionByIdFromQueryParamsProps {
  param?: string
  fallback?: () => void
}

export function useNotionByIdFromQueryParams({
  fallback = () => {},
  param = defaultEntityIdParam,
}: UseNotionByIdFromQueryParamsProps) {
  const { getNotionById } = useNotionActions()

  const id = Number(useParams()[param])
  if (!id) return fallback()
  
  const notion = getNotionById(id)
  if (!notion) return fallback()

  return notion
}
