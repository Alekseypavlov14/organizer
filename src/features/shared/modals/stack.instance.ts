import type { ModalModel } from './types/ModalModel'
import type { Nullable } from '@/shared/types/nullable'
import { createModalStackStore } from './stack.store'

export function createModalStackInstance() {
  const useStore = createModalStackStore()

  return function useModalStack() {
    const store = useStore()

    function open(modal: ModalModel) {
      const current = getCurrent()
      if (current) current.close()

      addModal(modal)
      modal.open()
    }

    function close() {
      const current = getCurrent()
      const previous = getPrevious()

      if (current) {
        removeModal()
        current.close()
      }

      if (previous) previous.open()
    }

    function openCurrent() {
      const current = getCurrent()
      if (current) current.open()
    }

    function openPrevious() {
      const previous = getPrevious()
      removeModal()

      if (previous) previous.open()
    }

    function clear() {
      store.clear()
    }

    function addModal(modal: ModalModel) {
      store.addModal(modal)
    }

    function removeModal() {
      store.removeModal()
    }

    function getCurrent(): Nullable<ModalModel> {
      return store.modals.at(-1) ?? null
    }

    function getPrevious(): Nullable<ModalModel> {
      return store.modals.at(-2) ?? null
    }

    return ({
      store,
      
      open,
      close,
      
      openCurrent,
      openPrevious,

      addModal,
      removeModal,
      clear,

      getCurrent,
      getPrevious
    })
  }
}
