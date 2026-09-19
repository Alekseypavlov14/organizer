import { SelectActionModal, SelectActionModalOption } from '@/features/shared/modals'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { useNotionDetailsSelectActionModal } from '../../modals.feature'
import { useGroupFeedNotionDetails } from '../../hooks/useGroupFeedNotionDetails'
import { buttonVariantDanger } from '@/shared/components/Button'
import { Text } from '@/shared/components/Text'

export function GroupFeedNotionDetailsSelectActionModal() {
  const notionDetailsSelectActionModal = useNotionDetailsSelectActionModal()
  const groupFeedNotionDetails = useGroupFeedNotionDetails()

  return (
    <SelectActionModal modal={notionDetailsSelectActionModal}>
      <Flex
        direction={flexDirectionVertical}
        gap={flexGapSmall}
      >
        <SelectActionModalOption
          onClick={groupFeedNotionDetails.openNotionMoveModal}
        >
          <Text>Move</Text>
        </SelectActionModalOption>
        
        <SelectActionModalOption
          onClick={groupFeedNotionDetails.openNotionDeleteModal}
          variant={buttonVariantDanger}
        >
          <Text>Delete</Text>
        </SelectActionModalOption>
      </Flex>
    </SelectActionModal>
  )
}
