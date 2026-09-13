import type { GroupEntity } from '@/entities/groups'
import type { ReactNode } from 'react'
import { GroupFeedPlaceholder } from '../../components/GroupFeedPlaceholder'
import { useGroupFeedContext } from '../../hooks/useGroupFeedContext'
import { GroupItem } from '../../components/GroupItem'
import styles from './GroupFeedItems.module.css'

export interface GroupFeedItemsProps {
  onGroupClick?: (group: GroupEntity) => void
  placeholder?: ReactNode
}

export function GroupFeedItems({ 
  onGroupClick = () => {},
  placeholder,
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

      {groups.length === 0 ? (
        <GroupFeedPlaceholder>
          {placeholder}
        </GroupFeedPlaceholder>
      ) : null}
    </div>
  )
}
