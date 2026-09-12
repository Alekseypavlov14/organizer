import { create } from 'zustand'

export interface ModalState {
  isOpened: boolean
}

export interface ModalActions {
  open: () => void
  close: () => void
}

export interface ModalStore extends ModalState, ModalActions {}

export function createModalStore() {
  return create<ModalStore>(set => ({
    isOpened: false,
    
    open: () => set(state => ({ ...state, isOpened: true })),
    close: () => set(state => ({ ...state, isOpened: false })),
  }))
}
