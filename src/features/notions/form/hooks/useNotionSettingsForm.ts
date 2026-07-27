import type { NotionEntity } from '@/entities/notions'
import { useNotionFormStore } from '../form.store'

export function useNotionSettingsForm() {
  const { updateNotion } = useNotionFormStore()
  
  function updateFormNotion(notion: NotionEntity) {
    updateNotion(notion)
  }

  return ({ updateFormNotion })
}
