import type { ModalOnClose } from '../types/ModalOnClose'
import type { ModalModel } from '../types/ModalModel'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'

export function useOnModalClose(model: ModalModel, onClose: ModalOnClose) {
  useOnPageClosed(() => {
    model.store.updateOnClose(onClose)
  })
}