import type { GroupEntity } from '@/entities/groups'
import { Flex, flexDirectionVertical, flexGapExtraSmall, flexGapMedium, flexGapSmall } from '@/shared/components/Flex'
import { Modal, ModalBody, ModalHeader, ModalActions } from '@/shared/components/Modal'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { GroupForm, useGroupForm } from '@/features/groups/form'
import { useGroupEditionModal } from './edition.modal'
import { useGroupEdition } from '@/features/groups/edition'
import { GroupPath } from '@/features/groups/shared'
import { Text } from '@/shared/components/Text'
import styles from './GroupEditionModal.module.css'

interface GroupEditionModalProps {
  onSave?: (group: GroupEntity) => void
  onColorClick?: () => void
  onCancel?: () => void
}

export function GroupEditionModal({
  onSave = () => {},
  onColorClick = () => {},
  onCancel = () => {},
}: GroupEditionModalProps) {
  const modal = useGroupEditionModal()
  
  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()

  function saveHandler() {
    const saved = groupEdition.saveGroup(groupForm.group)
    if (!saved) return 
    
    modal.close()
    onSave(saved)
  }

  function cancelHandler() {
    modal.close()
    onCancel()
  }

  return (
    <Modal 
      className={styles.GroupEditionModal}
      onBackgroundClick={cancelHandler}
      isOpened={modal.store.isOpened}
    >
      <ModalBody gap={flexGapMedium}>
        <ModalHeader>
          <Text size='l'>Edit group</Text>
        </ModalHeader>
  
        <Flex
          direction={flexDirectionVertical}
          gap={flexGapSmall}
        >
          <GroupPath 
            className={styles.Path}
            groupId={groupForm.group.parentId}
            gap={flexGapExtraSmall} 
          />
          
          <GroupForm onColorClick={onColorClick} />
        </Flex>
  
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
