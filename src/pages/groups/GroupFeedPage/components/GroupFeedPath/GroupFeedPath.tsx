import type { GroupEntity } from '@/entities/groups'
import type { Nullable } from '@/shared/types/nullable'
import { useGroupFeedGroupExplorer } from '../../group.explorer'
import { flexGapExtraSmall } from '@/shared/components/Flex'
import { GroupPath } from '@/features/groups/shared'
import { isNull } from '@/shared/utils/validation'
import styles from './GroupFeedPath.module.css'

interface GroupFeedPathProps {
  onSegmentClick?: (group: Nullable<GroupEntity>) => void
}

export function GroupFeedPath({
  onSegmentClick = () => {},
}: GroupFeedPathProps) {
  const groupFeedExplorer = useGroupFeedGroupExplorer()
  const currentGroupId = groupFeedExplorer.store.currentGroup?.id ?? null

  if (isNull(currentGroupId)) return null

  return (
    <GroupPath 
      className={styles.GroupFeedPath}

      onSegmentClick={onSegmentClick}
      onRootClick={() => onSegmentClick(null)}

      groupId={currentGroupId} 
      gap={flexGapExtraSmall}
    />
  )
}
