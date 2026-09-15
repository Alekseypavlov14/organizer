import type { ModalOnOpen } from '../types/ModalOnOpen'
import type { ModalModel } from '../types/ModalModel'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'

export function useOnModalOpen(modal: ModalModel, onOpen: ModalOnOpen) {
  useOnPageOpened(() => {
    modal.store.updateOnOpen(onOpen)
  })
}
