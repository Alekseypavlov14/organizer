import type { ModalOnOpen } from '../types/ModalOnOpen'
import type { ModalModel } from '../types/ModalModel'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'

export function useOnModalOpen(model: ModalModel, onOpen: ModalOnOpen) {
  useOnPageOpened(() => {
    model.store.updateOnOpen(onOpen)
  })
}
