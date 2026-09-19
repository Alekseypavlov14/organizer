import type { GroupEntity } from '@/entities/groups'
import { Fragment, type ReactNode } from 'react'
import { useGroupFeedContext } from '../../hooks/useGroupFeedContext'
import styles from './GroupFeedItems.module.css'

export interface GroupFeedItemsProps {
  children?: (group: GroupEntity) => ReactNode
}

export function GroupFeedItems({ 
  children = () => null,
}: GroupFeedItemsProps) {
  const { groups } = useGroupFeedContext()

  return (
    <div className={styles.GroupFeedItems}>
      {groups.map(group => (
        <Fragment key={group.id}>
          {children(group)}
        </Fragment>
      ))}
    </div>
  )
}
