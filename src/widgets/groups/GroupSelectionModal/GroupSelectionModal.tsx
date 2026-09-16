import type { GroupEntity } from '@/entities/groups'
import { Modal, ModalActions, ModalBody, ModalClose, ModalHeader } from '@/shared/components/Modal'
import { Flex, flexAlignCenter, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { Button, buttonVariantPrimary } from '@/shared/components/Button'
import { useGroupSelectionExplorer } from './selection.explorer'
import { GroupSelectionSearchbar } from './components/GroupSelectionSearchbar'
import { useGroupSelectionModal } from './selection.modal'
import { GroupSelectionValue } from './components/GroupSelectionValue'
import { GroupSelectionPath } from './components/GroupSelectionPath'
import { GroupSelectionFeed } from './components/GroupSelectionFeed'
import { useOnModalOpen } from '@/features/shared/modals'
import { isNull } from '@/shared/utils/validation'
import { Text } from '@/shared/components/Text'
import styles from './GroupSelectionModal.module.css'

interface GroupSelectionModalProps {
  onSelect?: (group: GroupEntity) => void
}

export function GroupSelectionModal({
  onSelect = () => {},
}: GroupSelectionModalProps) {
  const explorer = useGroupSelectionExplorer()
  const modal = useGroupSelectionModal()

  useOnModalOpen(modal, explorer.reset)

  function confirmSelectionHandler() {
    if (!explorer.store.currentGroup) return

    onSelect(explorer.store.currentGroup)
    modal.close()
  }

  return (
    <Modal 
      className={styles.GroupSelectionModal}
      onBackgroundClick={modal.close}
      isOpened={modal.store.isOpened}
    >
      <ModalBody>
        <ModalHeader>
          <Text size='l'>Select group</Text>
          
          <ModalClose onClick={modal.close} />
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
              disabled={isNull(explorer.store.currentGroup)}
            >
              Confirm
            </Button>
          </ModalActions>
        </Flex>
      </ModalBody>
    </Modal>
  )
}
