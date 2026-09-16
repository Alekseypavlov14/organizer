import type { NotionEntity } from '@/entities/notions'
import { useGroupExplorerDisplayGroups, useGroupExplorerGroups } from '@/features/groups/explorer'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { groupsSelector, useGroupsStore } from '@/entities/groups'
import { NotionFeed, NotionFeedItems } from '@/features/notions/feed'
import { GroupFeed, GroupFeedItems } from '@/features/groups/feed'
import { GroupExplorerFeedPath } from './components/GroupExplorerFeedPath'
import { useGroupExplorer } from './group.explorer'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useNavigation } from '@/app/navigation'
import { useNotionFeed } from './notion.feed'
import { useGroupFeed } from './group.feed'
import { Placeholder } from '@/shared/components/Placeholder'
import { useEffect } from 'react'
import { Text } from '@/shared/components/Text'

export function GroupExplorerFeed() {
  const navigation = useNavigation()

  const groupExplorer = useGroupExplorer()
  const groupFeed = useGroupFeed()

  useOnPageClosed(groupExplorer.reset)

  const groups = useGroupsStore(groupsSelector)
  useGroupExplorerGroups(groupExplorer, groups)

  const displayGroups = useGroupExplorerDisplayGroups(groupExplorer)
  useEffect(() => groupFeed.updateGroups(displayGroups), [displayGroups])

  const notionFeed = useNotionFeed()
  useEffect(() => {
    const currentGroupNotions = groupExplorer.store.currentGroup?.notions ?? []
    notionFeed.updateNotions(currentGroupNotions)
  }, [groupExplorer.store.currentGroup])

  function onNotionClick(notion: NotionEntity) {
    navigation.navigateNotionDisplayPage(notion.id)
  }

  return (
    <GroupFeed store={groupFeed.store}>
      <Flex
        direction={flexDirectionVertical}
        gap={flexGapMedium}
      >
        <GroupExplorerFeedPath />

        <GroupFeedItems onGroupClick={groupExplorer.selectGroup} />

        <NotionFeed store={notionFeed.store}>
          <NotionFeedItems onNotionClick={onNotionClick} />
        </NotionFeed>

        {displayGroups.length <= 0 && notionFeed.store.notions.length <= 0 ? (
          <Placeholder>
            <Text>This group is empty</Text>
          </Placeholder>
        ) : null}
      </Flex>
    </GroupFeed>
  )
}
