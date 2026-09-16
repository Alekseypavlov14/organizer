import type { GroupEntity } from '@/entities/groups'
import { useGroupFeedContext } from '../../hooks/useGroupFeedContext'
import { GroupItem } from '../../components/GroupItem'
import styles from './GroupFeedItems.module.css'

export interface GroupFeedItemsProps {
  onGroupClick?: (group: GroupEntity) => void
}

export function GroupFeedItems({ 
  onGroupClick = () => {},
}: GroupFeedItemsProps) {
  const { groups } = useGroupFeedContext()

  return (
    <div className={styles.GroupFeedItems}>
      {groups.map(group => (
        <GroupItem 
          group={group}
          onClick={() => onGroupClick(group)}
          key={group.id}
        />
      ))}
    </div>
  )
}
