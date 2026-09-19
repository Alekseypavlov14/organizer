import { selectedColorSelector, updateSelectedColorSelector, useColorSelectionStore } from '../../selection.store'
import { colorsSelector, predefinedColors, useColorsStore, type ColorModel } from '@/entities/shared'
import { Modal, ModalActions, ModalBody, ModalHeader } from '@/shared/components/Modal'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { useColorSelectionModal } from '../../selection.modal'
import { ColorSelector } from '../../components/ColorSelector'
import { isNull } from '@/shared/utils/validation'
import { Text } from '@/shared/components/Text'
import styles from './ColorSelectionModal.module.css'

interface ColorSelectionModalProps {
  onSelect?: (color: ColorModel) => void
  onAddNew?: () => void
  onCancel?: () => void
  showAddButton?: boolean
}

export function ColorSelectionModal({
  onSelect = () => {},
  onCancel = () => {},
  onAddNew = () => {},
  showAddButton,
}: ColorSelectionModalProps) {
  const colors = useColorsStore(colorsSelector)

  const modal = useColorSelectionModal()

  const selectedColor = useColorSelectionStore(selectedColorSelector)
  const updateSelectedColor = useColorSelectionStore(updateSelectedColorSelector)

  function selectHandler() {
    if (isNull(selectedColor)) return

    modal.close()
    onSelect(selectedColor)
  }

  function cancelHandler() {
    modal.close()
    onCancel()
  }

  return (
    <Modal 
      className={styles.ColorSelectionModal}
      onBackgroundClick={cancelHandler}
      isOpened={modal.store.isOpened}  
    >
      <ModalBody>
        <ModalHeader>
          <Text size='l'>Choose color</Text>
        </ModalHeader>

        <ColorSelector 
          colors={predefinedColors}
          onChange={updateSelectedColor}
          selectedColor={selectedColor}
        />
  
        <ColorSelector 
          colors={colors}
          onChange={updateSelectedColor}
          selectedColor={selectedColor}
        />
  
        <ModalActions>
          {showAddButton ? (
            <Button onClick={onAddNew}>
              Add
            </Button>
          ) : null} 

          <Button 
            variant={buttonVariantPrimary}
            disabled={isNull(selectedColor)}
            onClick={selectHandler} 
          >
            Confirm
          </Button>
        </ModalActions>
      </ModalBody>
    </Modal>
  )
}
