import { colorsSelector, useColorsStore, type ColorModel } from '@/entities/shared'
import { ModalActions, ModalClose, ModalHeader } from '@/features/shared/modals'
import { useColorSelectionModal } from '../../selection.modal'
import { Modal } from '@/shared/components/Modal'
import { Text } from '@/shared/components/Text'
import styles from './ColorSelectionModal.module.css'
import { ColorSelector } from '../../components/ColorSelector'
import { selectedColorSelector, updateSelectedColorSelector, useColorSelectionStore } from '../../selection.store'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { isNull } from '@/shared/utils/validation'

interface ColorSelectionModalProps {
  onSelect?: (color: ColorModel) => void
}

export function ColorSelectionModal({
  onSelect = () => {}
}: ColorSelectionModalProps) {
  const colors = useColorsStore(colorsSelector)

  const model = useColorSelectionModal()

  const selectedColor = useColorSelectionStore(selectedColorSelector)
  const updateSelectedColor = useColorSelectionStore(updateSelectedColorSelector)

  function selectHandler() {
    if (isNull(selectedColor)) return

    model.close()

    onSelect(selectedColor)
  }

  return (
    <Modal 
      className={styles.ColorSelectionModal}
      onBackgroundClick={model.close}
      isOpened={model.store.isOpened}  
    >
      <ModalHeader>
        <Text size='l'>Choose color:</Text>
                          
        <ModalClose onClick={model.close} />
      </ModalHeader>

      <ColorSelector 
        colors={colors}
        onChange={updateSelectedColor}
        selectedColor={selectedColor}
      />

      <ModalActions>
        <Button 
          variant={buttonVariantPrimary}
          disabled={isNull(selectedColor)}
          onClick={selectHandler} 
        >
          Confirm
        </Button>
      </ModalActions>
    </Modal>
  )
}
