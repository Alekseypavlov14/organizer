import type { ColorModel } from '@/entities/shared'
import type { Nullable } from '@/shared/types/nullable'
import { create } from 'zustand'

interface ColorSelectionState {
  selectedColor: Nullable<ColorModel>
}

interface ColorSelectionActions {
  updateSelectedColor: (color: ColorModel) => void
}

export interface ColorSelectionStore extends ColorSelectionState, ColorSelectionActions {}

export const useColorSelectionStore = create<ColorSelectionStore>(set => ({
  selectedColor: null,
  updateSelectedColor: (selectedColor) => set(state => ({ ...state, selectedColor }))
}))

export const selectedColorSelector = (store: ColorSelectionStore) => store.selectedColor
export const updateSelectedColorSelector = (store: ColorSelectionStore) => store.updateSelectedColor
