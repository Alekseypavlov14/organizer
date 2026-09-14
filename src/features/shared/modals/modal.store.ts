import type { ModalOnClose } from './types/ModalOnClose'
import type { ModalOnOpen } from './types/ModalOnOpen'
import { create } from 'zustand'

interface ModalState {
  isOpened: boolean

  onOpen: ModalOnOpen
  onClose: ModalOnClose
}

interface ModalActions {
  open: () => void
  close: () => void

  updateOnOpen: (onOpen: ModalOnOpen) => void
  updateOnClose: (onClose: ModalOnClose) => void
}

export interface ModalStore extends ModalState, ModalActions {}

export function createModalStore() {
  return create<ModalStore>(set => ({
    isOpened: false,

    onOpen: () => {},
    onClose: () => {},
    
    open: () => set(state => ({ ...state, isOpened: true })),
    close: () => set(state => ({ ...state, isOpened: false })),

    updateOnOpen: (onOpen) => set(state => ({ ...state, onOpen })),
    updateOnClose: (onClose) => set(state => ({ ...state, onClose })),
  }))
}
