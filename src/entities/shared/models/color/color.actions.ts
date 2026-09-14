import type { ColorModel } from './color.model'
import type { Nullable } from '@/shared/types/nullable'
import { updateColorsSelector, useColorsStore } from './color.store'
import { colorModelStorage } from './color.storage'

export function useColorActions() {
  const updateColors = useColorsStore(updateColorsSelector)

  function addColor(color: ColorModel): Nullable<ColorModel> {
    const saved = colorModelStorage.add(color)
    revalidate()

    return saved
  }

  function getColorByIndex(index: number): Nullable<ColorModel> {
    return colorModelStorage.getByIndex(index)    
  }

  function updateColorByIndex(index: number, color: ColorModel): Nullable<ColorModel> {
    const updated = colorModelStorage.updateByIndex(index, color)
    revalidate()

    return updated
  }

  function deleteColorByIndex(index: number): Nullable<ColorModel> {
    const deleted = colorModelStorage.deleteByIndex(index)
    revalidate()

    return deleted
  }

  function revalidate() {
    updateColors(colorModelStorage.getAll())
  }

  return ({
    addColor,
    getColorByIndex,
    updateColorByIndex,
    deleteColorByIndex,
  })
}
