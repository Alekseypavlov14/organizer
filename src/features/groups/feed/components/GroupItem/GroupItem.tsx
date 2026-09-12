import type { GroupEntity } from '@/entities/groups'
import { Palette } from '@/shared/components/Palette'
import styles from './GroupItem.module.css'

interface GroupItemProps {
  group: GroupEntity
  onClick?: () => void
}

export function GroupItem({
  group,
  onClick = () => {}
}: GroupItemProps) {
  return (
    <Palette 
      className={styles.GroupItem}
      onClick={onClick}
    >
      <div className={styles.Header}>
        <div className={styles.Title}>{group.title}</div>
      </div>
    </Palette>
  )
}
