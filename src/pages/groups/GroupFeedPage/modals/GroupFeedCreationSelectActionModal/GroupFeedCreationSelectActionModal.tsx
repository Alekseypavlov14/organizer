import { SelectActionModal, SelectActionModalOption } from '@/features/shared/modals'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { useGroupCreationSelectActionModal } from '../../modals.feature'
import { useGroupFeedCreation } from '../../hooks/useGroupFeedCreation'
import { Text } from '@/shared/components/Text'

export function GroupFeedCreationSelectActionModal() {
  const groupCreationSelectActionModal = useGroupCreationSelectActionModal()
  const groupFeedCreation = useGroupFeedCreation()

  return (
    <SelectActionModal modal={groupCreationSelectActionModal}>
      <Flex
        direction={flexDirectionVertical}
        gap={flexGapSmall}
      >
        <SelectActionModalOption onClick={groupFeedCreation.openGroupCreationModal}>
          <Text>Group</Text>
        </SelectActionModalOption>

        <SelectActionModalOption onClick={groupFeedCreation.openNotionCreationPage}>
          <Text>Notion</Text>
        </SelectActionModalOption>
      </Flex>
    </SelectActionModal>
  )
}
