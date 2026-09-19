import { groupsSelector, useGroupActions, useGroupsStore, type GroupEntity } from '@/entities/groups'
import { useGroupExplorerDisplayGroups, useGroupExplorerGroups } from '@/features/groups/explorer'
import { notionsSelector, useNotionsStore, type NotionEntity } from '@/entities/notions'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { NotionFeed, NotionFeedItems, NotionItem } from '@/features/notions/feed'
import { useGroupExplorerFeedNotionFeed } from './notion.feed'
import { useGroupExplorerFeedExplorer } from './group.explorer'
import { GroupFeed, GroupFeedItems, GroupItem } from '@/features/groups/feed'
import { GroupExplorerFeedTitle } from './components/GroupExplorerFeedTitle'
import { GroupExplorerFeedPath } from './components/GroupExplorerFeedPath'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useNavigation } from '@/app/navigation'
import { useGroupFeed } from './group.feed'
import { Placeholder } from '@/shared/components/Placeholder'
import { useEffect } from 'react'
import { Text } from '@/shared/components/Text'

interface GroupExplorerFeedProps {
  onGroupClick?: (group: GroupEntity) => void
  onNotionClick?: (notion: NotionEntity) => void
  onNotionDetailsClick?: (notion: NotionEntity) => void
}

export function GroupExplorerFeed({
  onGroupClick = () => {},
  onNotionClick = () => {},
  onNotionDetailsClick = () => {},
}: GroupExplorerFeedProps) {
  const navigation = useNavigation()
  const groupActions = useGroupActions()

  const groupExplorer = useGroupExplorerFeedExplorer()
  const groupFeed = useGroupFeed()

  useOnPageClosed(groupExplorer.reset)

  const groups = useGroupsStore(groupsSelector)
  useGroupExplorerGroups(groupExplorer, groups)

  const displayGroups = useGroupExplorerDisplayGroups(groupExplorer)
  useEffect(() => groupFeed.updateGroups(displayGroups), [displayGroups])

  const notions = useNotionsStore(notionsSelector)
  const notionFeed = useGroupExplorerFeedNotionFeed()

  useEffect(() => {
    const currentGroupId = groupExplorer.store.currentGroup?.id ?? null
    const currentGroupNotions = groupActions.getGroupNotionsById(currentGroupId) ?? []
    
    notionFeed.updateNotions(currentGroupNotions)
  }, [notions, groupExplorer.store.currentGroup])

  function onGroupClickHandler(group: GroupEntity) {
    groupExplorer.navigateGroup(group)
    onGroupClick(group)
  }

  function onNotionClickHandler(notion: NotionEntity) {
    navigation.navigateNotionDisplayPage(notion.id)
    onNotionClick(notion)
  }

  function onNotionDetailsClickHandler(notion: NotionEntity) {
    onNotionDetailsClick(notion)
  }

  return (
    <GroupFeed store={groupFeed.store}>
      <Flex
        direction={flexDirectionVertical}
        gap={flexGapMedium}
      >
        <GroupExplorerFeedPath />
        <GroupExplorerFeedTitle />

        <GroupFeedItems>
          {(group) => (
            <GroupItem 
              group={group}
              onClick={onGroupClickHandler}
            />
          )}
        </GroupFeedItems>

        <NotionFeed store={notionFeed.store}>
          <NotionFeedItems>
            {(notion) => (
              <NotionItem 
                notion={notion}
                onClick={onNotionClickHandler} 
                onDetailsClick={onNotionDetailsClickHandler}
                showDetails
              />
            )}
          </NotionFeedItems>
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
