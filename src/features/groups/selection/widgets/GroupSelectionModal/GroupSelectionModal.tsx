import type { GroupEntity } from '@/entities/groups'
import { Modal, ModalActions, ModalBody, ModalClose, ModalHeader } from '@/shared/components/Modal'
import { Flex, flexAlignCenter, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { currentGroupSelector, useGroupSelectionStore } from '../../selection.store'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { GroupSelectionSearchbar } from '../../components/GroupSelectionSearchbar'
import { useGroupSelectionModal } from '../../selection.modal'
import { GroupSelectionValue } from '../../components/GroupSelectionValue'
import { GroupSelectionPath } from '../../components/GroupSelectionPath'
import { GroupSelectionFeed } from '../../components/GroupSelectionFeed'
import { isNull } from '@/shared/utils/validation'
import { Text } from '@/shared/components/Text'
import styles from './GroupSelectionModal.module.css'

interface GroupSelectionModalProps {
  onSelect?: (group: GroupEntity) => void
}

export function GroupSelectionModal({
  onSelect = () => {},
}: GroupSelectionModalProps) {
  const model = useGroupSelectionModal()

  const currentGroup = useGroupSelectionStore(currentGroupSelector) 

  function confirmSelectionHandler() {
    if (!currentGroup) return

    onSelect(currentGroup)
    model.close()
  }

  return (
    <Modal 
      className={styles.GroupSelectionModal}
      onBackgroundClick={model.close}
      isOpened={model.store.isOpened}
    >
      <ModalBody>
        <ModalHeader>
          <Text size='l'>Select group</Text>
          
          <ModalClose onClick={model.close} />
        </ModalHeader>
  
        <GroupSelectionSearchbar />
        <GroupSelectionPath />
        <GroupSelectionFeed />

        <Flex
          justify={flexJustifySpaceBetween}
          align={flexAlignCenter}
        >
          <Flex>
            <GroupSelectionValue />
          </Flex>

          <ModalActions>
            <Button
              variant={buttonVariantPrimary}
              onClick={confirmSelectionHandler}
              disabled={isNull(currentGroup)}
            >
              Confirm
            </Button>
          </ModalActions>
        </Flex>
      </ModalBody>
    </Modal>
  )
}
