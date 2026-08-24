import type { NotionDisplayStore } from '../display.store'
import { NotionDisplayContext } from '../display.context'
import { useContext } from 'react'

export function useNotionDisplayContext(): NotionDisplayStore {
  const context = useContext(NotionDisplayContext)
  if (!context) throw new Error('Wrong useNotionDisplayContext usage')
    
  return context
}
