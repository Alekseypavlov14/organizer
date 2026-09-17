import type { GroupEntity } from '@/entities/groups'
import type { Nullable } from '@/shared/types/nullable'
import { Flex, flexAlignCenter, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { Modal, ModalActions, ModalBody, ModalHeader } from '@/shared/components/Modal'
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
  onSelect?: (group: Nullable<GroupEntity>) => void
  onCancel?: () => void
  allowRoot?: boolean
}

export function GroupSelectionModal({
  onSelect = () => {},
  onCancel = () => {},
  allowRoot
}: GroupSelectionModalProps) {
  const explorer = useGroupSelectionExplorer()
  const modal = useGroupSelectionModal()

  useOnModalOpen(modal, explorer.reset)

  function confirmSelectionHandler() {
    if (!allowRoot && !explorer.store.currentGroup) return

    modal.close()
    onSelect(explorer.store.currentGroup)
  }

  function cancelHandler() {
    modal.close()
    onCancel()
  }

  const confirmDisabled = !allowRoot && isNull(explorer.store.currentGroup)

  return (
    <Modal 
      className={styles.GroupSelectionModal}
      onBackgroundClick={cancelHandler}
      isOpened={modal.store.isOpened}
    >
      <ModalBody>
        <ModalHeader>
          <Text size='l'>Select group</Text>
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
              disabled={confirmDisabled}
            >
              Confirm
            </Button>
          </ModalActions>
        </Flex>
      </ModalBody>
    </Modal>
  )
}
