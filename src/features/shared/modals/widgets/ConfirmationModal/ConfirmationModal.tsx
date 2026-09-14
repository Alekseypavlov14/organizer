import type { ModalModel } from '../../types/ModalModel'
import type { ReactNode } from 'react'
import { Modal, ModalActions, ModalBody, ModalClose, ModalHeader } from '@/shared/components/Modal'
import { Button, type ButtonVariant } from '@/shared/components/Button'
import { Text } from '@/shared/components/Text'

interface ConfirmationModalProps {
  title: string
  model: ModalModel
  
  onCancel?: () => void
  onConfirm?: () => void

  cancelButton?: ReactNode
  confirmButton?: ReactNode

  variant?: ButtonVariant
  forced?: boolean
}

export function ConfirmationModal({ 
  title,
  model,

  onCancel = () => {},
  onConfirm = () => {},

  cancelButton = 'Cancel',
  confirmButton = 'Confirm',

  variant,
  forced,
}: ConfirmationModalProps) {
  const { store, close } = model

  function cancelHandler() {
    onCancel()
    close()
  }

  function confirmHandler() {
    onConfirm()
    close()
  }

  function clickBackgroundHandler() {
    if (forced) return
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
          
          {!forced ? (
            <ModalClose onClick={cancelHandler} />
          ) : null}
        </ModalHeader>
  
        <ModalActions>
          <Button onClick={cancelHandler}>{cancelButton}</Button>
          <Button variant={variant} onClick={confirmHandler}>{confirmButton}</Button>
        </ModalActions>
      </ModalBody>
    </Modal>
  )
}
