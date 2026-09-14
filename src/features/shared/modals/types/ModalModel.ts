import type { ModalStore } from '../modal.store'

export interface ModalModel {
  store: ModalStore
  open: () => void
  close: () => void
}
