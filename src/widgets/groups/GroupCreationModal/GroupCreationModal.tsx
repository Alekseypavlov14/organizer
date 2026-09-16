import { Modal, ModalActions, ModalBody, ModalHeader } from '@/shared/components/Modal'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { GroupForm, useGroupForm } from '@/features/groups/form'
import { useGroupCreationModal } from './creation.modal'
import { useGroupEdition } from '@/features/groups/edition'
import { flexGapMedium } from '@/shared/components/Flex'
import { GroupPath } from '@/features/groups/shared'
import { Text } from '@/shared/components/Text'
import styles from './GroupCreationModal.module.css'

interface GroupCreationModalProps {
  onColorClick?: () => void
}

export function GroupCreationModal({
  onColorClick = () => {},
}: GroupCreationModalProps) {
  const modal = useGroupCreationModal()

  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()

  function saveHandler() {
    const saved = groupEdition.saveGroup(groupForm.group)
    if (saved) modal.close()
  }

  function cancelHandler() {
    modal.close()
  }

  return (
    <Modal 
      className={styles.GroupCreationModal}
      onBackgroundClick={cancelHandler}
      isOpened={modal.store.isOpened}
    >
      <ModalBody gap={flexGapMedium}>
        <ModalHeader>
          <Text size='l'>Create group</Text>
        </ModalHeader>
  
        <GroupPath groupId={groupForm.group.id} />
        <GroupForm onColorClick={onColorClick} />
  
        <ModalActions>
          <Button
            variant={buttonVariantPrimary}
            onClick={saveHandler}
          >
            Save
          </Button>
        </ModalActions>
      </ModalBody>
    </Modal>
  )
}
