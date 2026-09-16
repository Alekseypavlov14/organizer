import type { ColorModel } from '@/entities/shared'
import { useColorSelectionStore } from '../selection.store'

export function useColorSelection() {
  const { selectedColor, updateSelectedColor } = useColorSelectionStore()

  function updateColor(color: ColorModel) {
    updateSelectedColor(color)
  }

  return ({
    selectedColor,
    updateColor,
  })
}
