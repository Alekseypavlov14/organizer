import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { flexGapExtraSmall } from '@/shared/components/Flex'
import { useGroupExplorer } from '../../group.explorer'
import { GroupPath } from '@/features/groups/shared'
import { Text } from '@/shared/components/Text'
import styles from './GroupExplorerFeedPath.module.css'

export function GroupExplorerFeedPath() {
  const groupExplorer = useGroupExplorer()

  const currentGroupId: Nullable<Id> = groupExplorer.store.currentGroup?.id ?? null

  return (
    <Text className={styles.GroupExplorerFeedPath} size='s'>
      <GroupPath 
        groupId={currentGroupId} 
        onSegmentClick={groupExplorer.selectGroup}
        onRootClick={groupExplorer.navigateRoot}
        gap={flexGapExtraSmall}
        showRoot
      />
    </Text>
  )
}
