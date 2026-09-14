import { initialColorAddControlValue } from './constants'
import { create } from 'zustand'

interface ColorAddState {
  value: string
}

interface ColorAddActions {
  updateValue: (value: string) => void
}

export interface ColorAddStore extends ColorAddState, ColorAddActions {}

export const useColorAddStore = create<ColorAddStore>(set => ({
  value: initialColorAddControlValue,
  updateValue: (value) => set(state => ({ ...state, value })),
}))

export const valueSelector = (store: ColorAddStore) => store.value
export const updateValueSelector = (store: ColorAddStore) => store.updateValue
