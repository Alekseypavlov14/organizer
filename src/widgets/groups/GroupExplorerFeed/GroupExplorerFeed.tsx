import { useGroupExplorerDisplayGroups, useGroupExplorerGroups } from '@/features/groups/explorer'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { groupsSelector, useGroupsStore } from '@/entities/groups'
import { GroupFeed, GroupFeedItems } from '@/features/groups/feed'
import { GroupExplorerFeedPath } from './components/GroupExplorerFeedPath'
import { useGroupExplorer } from './group.explorer'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useGroupFeed } from './group.feed'
import { useEffect } from 'react'

export function GroupExplorerFeed() {
  const groupFeed = useGroupFeed()
  const groupExplorer = useGroupExplorer()

  const groups = useGroupsStore(groupsSelector)
  useGroupExplorerGroups(groupExplorer, groups)

  const displayGroups = useGroupExplorerDisplayGroups(groupExplorer)
  useEffect(() => groupFeed.updateGroups(displayGroups), [displayGroups])

  useOnPageClosed(groupExplorer.reset)

  return (
    <GroupFeed store={groupFeed.store}>
      <Flex
        direction={flexDirectionVertical}
        gap={flexGapMedium}
      >
        <GroupExplorerFeedPath />

        <GroupFeedItems onGroupClick={groupExplorer.selectGroup} />
      </Flex>
    </GroupFeed>
  )
}
