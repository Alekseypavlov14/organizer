import { useGroupExplorerFeedExplorer } from '../../group.explorer'
import { flexGapExtraSmall } from '@/shared/components/Flex'
import { GroupPath } from '@/features/groups/shared'
import styles from './GroupExplorerFeedPath.module.css'

export function GroupExplorerFeedPath() {
  const groupExplorer = useGroupExplorerFeedExplorer()
  if (!groupExplorer.store.currentGroup) return null

  return (
    <GroupPath 
      groupId={groupExplorer.store.currentGroup.id} 
      onSegmentClick={groupExplorer.navigateGroup}
      className={styles.GroupExplorerFeedPath}
      onRootClick={groupExplorer.navigateRoot}
      gap={flexGapExtraSmall}
    />
  )
}
