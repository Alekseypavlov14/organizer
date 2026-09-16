import type { ModalModel } from '../../types/ModalModel'
import type { ReactNode } from 'react'
import { Modal, ModalActions, ModalBody, ModalHeader } from '@/shared/components/Modal'
import { Button, type ButtonVariant } from '@/shared/components/Button'
import { Text } from '@/shared/components/Text'

interface ConfirmationModalProps {
  title: string
  modal: ModalModel
  
  onCancel?: () => void
  onConfirm?: () => void

  cancelButton?: ReactNode
  confirmButton?: ReactNode

  variant?: ButtonVariant
}

export function ConfirmationModal({ 
  title,
  modal,

  onCancel = () => {},
  onConfirm = () => {},

  cancelButton = 'Cancel',
  confirmButton = 'Confirm',

  variant,
}: ConfirmationModalProps) {
  const { store, close } = modal

  function cancelHandler() {
    onCancel()
    close()
  }

  function confirmHandler() {
    onConfirm()
    close()
  }

  function clickBackgroundHandler() {
    cancelHandler()
  }

  return (
    <Modal 
      onBackgroundClick={clickBackgroundHandler}
      isOpened={store.isOpened}
    >
      <ModalBody>
        <ModalHeader>
          <Text size='l'>{title}</Text>
        </ModalHeader>
  
        <ModalActions>
          <Button onClick={cancelHandler}>{cancelButton}</Button>
          <Button variant={variant} onClick={confirmHandler}>{confirmButton}</Button>
        </ModalActions>
      </ModalBody>
    </Modal>
  )
}
