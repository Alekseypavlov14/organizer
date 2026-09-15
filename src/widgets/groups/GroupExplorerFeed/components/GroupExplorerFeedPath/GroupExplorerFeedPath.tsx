import { flexGapExtraSmall } from '@/shared/components/Flex'
import { useGroupExplorer } from '../../group.explorer'
import { GroupPath } from '@/features/groups/shared'
import { Text } from '@/shared/components/Text'
import styles from './GroupExplorerFeedPath.module.css'

export function GroupExplorerFeedPath() {
  const groupExplorer = useGroupExplorer()

  if (!groupExplorer.store.currentGroup) return null

  return (
    <Text className={styles.GroupExplorerFeedPath} size='s'>
      <GroupPath 
        groupId={groupExplorer.store.currentGroup.id} 
        onSegmentClick={groupExplorer.selectGroup}
        onRootClick={groupExplorer.navigateRoot}
        gap={flexGapExtraSmall}
        showRoot
      />
    </Text>
  )
}
