import type { ModalOnClose } from '../types/ModalOnClose'
import type { ModalModel } from '../types/ModalModel'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'

export function useOnModalClose(modal: ModalModel, onClose: ModalOnClose) {
  useOnPageOpened(() => {
    modal.store.updateOnClose(onClose)
  })
}