import { colorValidator, createColorModel, useColorActions, type ColorModel } from '@/entities/shared'
import { updateValueSelector, useColorAddStore, valueSelector } from '../../add.store'
import { Modal, ModalActions, ModalBody, ModalHeader } from '@/shared/components/Modal'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { initialColorAddControlValue } from '../../constants'
import { useColorAddModal } from '../../add.modal'
import { useNotifications } from '@/app/notifications'
import { ColorAddPreview } from '../../components/ColorAddPreview'
import { useOnModalOpen } from '@/features/shared/modals'
import { Input } from '@/shared/components/Input'
import { Text } from '@/shared/components/Text'
import styles from './ColorAddModal.module.css'

interface ColorAddModalProps {
  onAdd?: (color: ColorModel) => void
  onCancel?: () => void
}

export function ColorAddModal({ 
  onAdd = () => {}, 
  onCancel = () => {},
}: ColorAddModalProps) {
  const notifications = useNotifications()
  const colorActions = useColorActions()

  const modal = useColorAddModal()

  const value = useColorAddStore(valueSelector)
  const updateValue = useColorAddStore(updateValueSelector)

  useOnModalOpen(modal, () => updateValue(initialColorAddControlValue))

  function addColorHandler() {
    if (!colorValidator.validateControlValue(value)) return notifications.createErrorNotification('The color value is invalid')

    const color = createColorModel(value)
    const created = colorActions.addColor(color)

    if (!created) return notifications.createErrorNotification('The color is not saved')

    notifications.createSuccessNotification('The color is saved')
    
    modal.close()
    onAdd(created)
  }

  function cancelHandler() {
    modal.close()
    onCancel()
  }

  return (
    <Modal 
      className={styles.ColorAddModal}
      onBackgroundClick={cancelHandler}
      isOpened={modal.store.isOpened}
    >
      <ModalBody>
        <ModalHeader>
          <Text size='l'>Add new color</Text>
        </ModalHeader>

        <ColorAddPreview />
  
        <Input 
          onValueInput={updateValue}
          value={value}
        />
  
        <ModalActions>
          <Button 
            variant={buttonVariantPrimary}
            onClick={addColorHandler}
          >
            Save
          </Button>
        </ModalActions>
      </ModalBody>
    </Modal>
  )
}
