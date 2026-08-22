import type { NotionEntity } from '@/entities/notions'
import { useNotionFormStore } from '../form.store'

export function useNotionForm() {
  const { notion, updateNotion } = useNotionFormStore()
  
  function updateFormNotion(notion: NotionEntity) {
    updateNotion(notion)
  }

  return ({ notion, updateFormNotion })
}
