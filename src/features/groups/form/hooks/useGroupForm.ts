import type { ColorModel } from '@/entities/shared'
import { useGroupFormStore } from '../form.store'

export function useGroupForm() {
  const { group, updateColor } = useGroupFormStore()

  function updateGroupColor(color: ColorModel) {
    updateColor(color)
  }

  return ({
    group,
    updateGroupColor
  })
}
