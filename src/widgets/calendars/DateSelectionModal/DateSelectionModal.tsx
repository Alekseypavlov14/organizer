import type { Timestamp } from '@/shared/utils/datetime'
import { Modal, ModalActions, ModalBody, ModalHeader } from '@/shared/components/Modal'
import { createDateModel, dateFormat, dateValidator } from '@/entities/shared'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { useDateSelectionCalendar } from './selection.calendar'
import { useDateSelectionModal } from './selection.modal'
import { Input } from '@/shared/components/Input'
import { Text } from '@/shared/components/Text'
import styles from './DateSelectionModal.module.css'

interface DateSelectionModalProps {
  onSelect?: (date: Timestamp) => void
  onCancel?: () => void
}

export function DateSelectionModal({
  onSelect = () => {},
  onCancel = () => {},
}: DateSelectionModalProps) {
  const dateSelectionModal = useDateSelectionModal()
  const dateSelectionCalendar = useDateSelectionCalendar()

  const dateModel = createDateModel(dateSelectionCalendar.store.selectedDate)
  const controlValue = dateFormat.toControl(dateModel)
  
  function selectHandler() {
    dateSelectionModal.close()
    onSelect(dateSelectionCalendar.store.selectedDate)
  }
  function cancelHandler() {
    dateSelectionModal.close()
    onCancel()
  }

  function changeHandler(value: string) {
    const dateModel = dateFormat.toModel(value)
    dateSelectionCalendar.updateSelectedDate(dateModel.value)
  }

  return (
    <Modal 
      className={styles.DateSelectionModal}
      isOpened={dateSelectionModal.store.isOpened}
      onBackgroundClick={cancelHandler}
    >
      <ModalBody>
        <ModalHeader>
          <Text size='l'>Select date</Text>
        </ModalHeader>

        <Input 
          value={controlValue}
          onValueChange={changeHandler}
          validate={dateValidator.validateControlValue}
          placeholder='Select date'
          hint='DD.MM.YYYY'
        />

        <ModalActions>
          <Button
            variant={buttonVariantPrimary}
            onClick={selectHandler}
          >
            Confirm
          </Button>
        </ModalActions>
      </ModalBody>
    </Modal>
  )
}
