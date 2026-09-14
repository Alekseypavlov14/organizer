import type { ColorModel } from './color.model'
import { colorModelStorage } from './color.storage'
import { create } from 'zustand'

interface ColorsState {
  colors: ColorModel[]
}

interface ColorsActions {
  updateColors: (colors: ColorModel[]) => void
}

export interface ColorsStore extends ColorsState, ColorsActions {}

export const useColorsStore = create<ColorsStore>(set => ({
  colors: colorModelStorage.getAll(),
  updateColors: (colors) => set(state => ({ ...state, colors }))
}))

export const colorsSelector = (store: ColorsStore) => store.colors
export const updateColorsSelector = (store: ColorsStore) => store.updateColors
