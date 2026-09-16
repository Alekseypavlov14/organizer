import { selectedColorSelector, updateSelectedColorSelector, useColorSelectionStore } from '../../selection.store'
import { colorsSelector, predefinedColors, useColorsStore, type ColorModel } from '@/entities/shared'
import { Modal, ModalActions, ModalBody, ModalClose, ModalHeader } from '@/shared/components/Modal'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { useColorSelectionModal } from '../../selection.modal'
import { useOnModalOpen } from '@/features/shared/modals'
import { ColorSelector } from '../../components/ColorSelector'
import { isNull } from '@/shared/utils/validation'
import { Text } from '@/shared/components/Text'
import styles from './ColorSelectionModal.module.css'

interface ColorSelectionModalProps {
  onSelect?: (color: ColorModel) => void
  onAddNew?: () => void
}

export function ColorSelectionModal({
  onSelect = () => {},
  onAddNew,
}: ColorSelectionModalProps) {
  const colors = useColorsStore(colorsSelector)

  const modal = useColorSelectionModal()

  const selectedColor = useColorSelectionStore(selectedColorSelector)
  const updateSelectedColor = useColorSelectionStore(updateSelectedColorSelector)

  useOnModalOpen(modal, () => updateSelectedColor(null))

  function selectHandler() {
    if (isNull(selectedColor)) return

    modal.close()
    onSelect(selectedColor)
  }

  return (
    <Modal 
      className={styles.ColorSelectionModal}
      onBackgroundClick={modal.close}
      isOpened={modal.store.isOpened}  
    >
      <ModalBody>
        <ModalHeader>
          <Text size='l'>Choose color</Text>
                            
          <ModalClose onClick={modal.close} />
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
          {onAddNew ? (
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
