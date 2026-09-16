import type { ModalModel } from './types/ModalModel'
import { create } from 'zustand'

interface ModalStackState {
  modals: ModalModel[]
}

interface ModalStackActions {
  addModal: (modal: ModalModel) => void
  removeModal: () => void
  clear: () => void
}

interface ModalStackStore extends ModalStackState, ModalStackActions {}

export function createModalStackStore() {
  return create<ModalStackStore>(set => ({
    modals: [],

    addModal: (modal) => set(state => ({ ...state, modals: state.modals.concat([ modal ])})),
    removeModal: () => set(state => ({ ...state, modals: state.modals.slice(0, -1) })),
    clear: () => set(state => ({ ...state, modals: [] })),
  }))
}
