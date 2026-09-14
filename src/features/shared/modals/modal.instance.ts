import { createModalStore } from './modal.store'
import type { ModalModel } from './types/ModalModel'

export function createModalInstance() {
  const useStore = createModalStore()

  return function useModal(): ModalModel {
    const store = useStore()

    function open() {
      store.open()
      store.onOpen()
    }

    function close() {
      store.close()
      store.onClose()
    }

    return ({
      store,
      open,
      close,
    })
  } 
}
