import type { GroupFeedStore } from '../../feed.store'
import type { GroupEntity } from '@/entities/groups'
import { Flex, flexAlignCenter, flexDirectionVertical, flexGapMedium, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { groupFeedDefaultTitle } from '../../constants'
import { GroupFeedProvider } from '../../providers/GroupFeedProvider'
import { GroupFeedItems } from '../../views/GroupFeedItems'
import { Text } from '@/shared/components/Text'

interface GroupFeedProps {
  store: GroupFeedStore
  
  title?: string
  onGroupClick?: (notion: GroupEntity) => void
}

export function GroupFeed({
  store,
   
  title = groupFeedDefaultTitle,
  onGroupClick = () => {},
}: GroupFeedProps) {
  return (
    <GroupFeedProvider store={store}>
      <Flex 
        direction={flexDirectionVertical}
        gap={flexGapMedium}
      >
        <Flex
          justify={flexJustifySpaceBetween}
          align={flexAlignCenter}
        >
          <Text size='l'>{title}</Text>
        </Flex>

        <GroupFeedItems onGroupClick={onGroupClick} />
      </Flex>
    </GroupFeedProvider>
  )
}
