import type { ModalOnClose } from '../types/ModalOnClose'
import type { ModalModel } from '../types/ModalModel'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'

export function useOnModalClose(modal: ModalModel, onClose: ModalOnClose) {
  useOnPageClosed(() => {
    modal.store.updateOnClose(onClose)
  })
}