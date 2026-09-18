import type { NotionEntity } from '@/entities/notions'
import { useGroupExplorerDisplayGroups, useGroupExplorerGroups } from '@/features/groups/explorer'
import { groupsSelector, useGroupActions, useGroupsStore } from '@/entities/groups'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { useGroupExplorerFeedExplorer } from './group.explorer'
import { NotionFeed, NotionFeedItems } from '@/features/notions/feed'
import { GroupFeed, GroupFeedItems } from '@/features/groups/feed'
import { GroupExplorerFeedTitle } from './components/GroupExplorerFeedTitle'
import { GroupExplorerFeedPath } from './components/GroupExplorerFeedPath'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useNavigation } from '@/app/navigation'
import { useNotionFeed } from './notion.feed'
import { useGroupFeed } from './group.feed'
import { Placeholder } from '@/shared/components/Placeholder'
import { useEffect } from 'react'
import { Text } from '@/shared/components/Text'

export function GroupExplorerFeed() {
  const navigation = useNavigation()
  const groupActions = useGroupActions()

  const groupExplorer = useGroupExplorerFeedExplorer()
  const groupFeed = useGroupFeed()

  useOnPageClosed(groupExplorer.reset)

  const groups = useGroupsStore(groupsSelector)
  useGroupExplorerGroups(groupExplorer, groups)

  const displayGroups = useGroupExplorerDisplayGroups(groupExplorer)
  useEffect(() => groupFeed.updateGroups(displayGroups), [displayGroups])

  const notionFeed = useNotionFeed()
  useEffect(() => {
    const currentGroupNotions = groupExplorer.store.currentGroup?.notions ?? groupActions.getRootGroupNotions()
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
        <GroupExplorerFeedTitle />

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
