import { NotionFeedContext } from '../feed.context'
import { useContext } from 'react'

export function useNotionFeedContext() {
  const context = useContext(NotionFeedContext)
  if (!context) throw new Error('Wrong useNotionFeedContext usage')

  return context
}
