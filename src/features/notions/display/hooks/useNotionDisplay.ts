import type { NotionEntity } from '@/entities/notions'
import { useNotionDisplayStore } from '../display.store'

export function useNotionDisplay() {
  const { notion, updateNotion } = useNotionDisplayStore()
    
  function updateNotionDisplay(notion: NotionEntity) {
    updateNotion(notion)
  }

  return ({ notion, updateNotionDisplay })
}
