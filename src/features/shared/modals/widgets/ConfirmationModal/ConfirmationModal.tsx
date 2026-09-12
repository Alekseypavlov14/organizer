import type { ModalStore } from '../../modal.store'
import type { ReactNode } from 'react'
import { Flex, flexDirectionVertical, flexGapLarge, flexGapMedium, flexJustifyEnd, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { Button, type ButtonVariant } from '@/shared/components/Button'
import { Modal } from '@/shared/components/Modal'
import { Text } from '@/shared/components/Text'
import { Icon } from '@/shared/components/Icon'

interface ConfirmationModalProps {
  title: string
  model: ModalStore
  
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
  const { isOpened, close } = model

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
      isOpened={isOpened}
    >
      <Flex 
        direction={flexDirectionVertical}
        gap={flexGapLarge}
      >
        <Flex 
          justify={flexJustifySpaceBetween}
          gap={flexGapMedium}
        >
          <Text size='l'>{title}</Text>
          
          {!forced ? (
            <Icon onClick={cancelHandler} name='x' />
          ) : null}
        </Flex>

        <Flex 
          justify={flexJustifyEnd}
          gap={flexGapMedium}
        >
          <Button onClick={cancelHandler}>{cancelButton}</Button>
          <Button variant={variant} onClick={confirmHandler}>{confirmButton}</Button>
        </Flex>
      </Flex>
    </Modal>
  )
}
