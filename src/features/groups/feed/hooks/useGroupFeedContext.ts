import { useContext } from 'react'
import { GroupFeedContext } from '../feed.context'

export function useGroupFeedContext() {
  const store = useContext(GroupFeedContext)
  if (!store) throw new Error('Wrong useGroupFeedContext usage')

  return store
}
