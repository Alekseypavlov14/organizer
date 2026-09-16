import type { ModalModel } from '../../types/ModalModel'
import type { ReactNode } from 'react'
import { Modal } from '@/shared/components/Modal'

interface SelectActionModalProps {
  modal: ModalModel
  children?: ReactNode
}

export function SelectActionModal({ 
  modal,
  children 
}: SelectActionModalProps) {
  return (
    <Modal 
      onBackgroundClick={modal.close}
      isOpened={modal.store.isOpened}
    >
      {children}
    </Modal>
  )
}
