import type { ColorModel } from '@/entities/shared'
import { useColorSelectionStore } from '../selection.store'

export function useColorSelection() {
  const { selectedColor, updateSelectedColor } = useColorSelectionStore()

  function updateColor(color: ColorModel) {
    updateSelectedColor(color)
  }

  function resetColor() {
    updateSelectedColor(null)
  }

  return ({
    selectedColor,
    updateColor,
    resetColor,
  })
}
