import { SelectActionModal, SelectActionModalOption } from '@/features/shared/modals'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { useGroupEditionSelectActionModal } from '../../modals.feature'
import { useGroupFeedEdition } from '../../hooks/useGroupFeedEdition'
import { buttonVariantDanger } from '@/shared/components/Button'
import { Text } from '@/shared/components/Text'

export function GroupFeedEditionSelectActionModal() {
  const groupEditionSelectActionModal = useGroupEditionSelectActionModal()
  const groupFeedEdition = useGroupFeedEdition()

  return (
    <SelectActionModal modal={groupEditionSelectActionModal}> 
      <Flex
        direction={flexDirectionVertical}
        gap={flexGapSmall}
      >
        <SelectActionModalOption onClick={groupFeedEdition.openGroupEditionModal}>
          <Text>Edit</Text>
        </SelectActionModalOption>

        <SelectActionModalOption onClick={groupFeedEdition.openGroupMoveModal}>
          <Text>Move</Text>
        </SelectActionModalOption>

        <SelectActionModalOption 
          variant={buttonVariantDanger}
          onClick={groupFeedEdition.openGroupDeleteModal}
        >
          <Text>Delete</Text>
        </SelectActionModalOption>
      </Flex>
    </SelectActionModal>
  )
}
