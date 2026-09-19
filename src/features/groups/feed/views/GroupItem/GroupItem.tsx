import type { GroupEntity } from '@/entities/groups'
import { groupSavedAtFormat } from '../../constants'
import { ColorIndicator } from '@/features/colors/shared'
import { Palette } from '@/shared/components/Palette'
import styles from './GroupItem.module.css'
import { Text } from '@/shared/components/Text'

interface GroupItemProps {
  group: GroupEntity
  onClick?: (group: GroupEntity) => void
}

export function GroupItem({
  group,
  onClick = () => {}
}: GroupItemProps) {
  return (
    <Palette 
      className={styles.GroupItem}
      onClick={() => onClick(group)}
    >
      <ColorIndicator value={group.color} />

      <div className={styles.Content}>
        <Text className={styles.Title}>{group.title}</Text>
        <Text className={styles.Date} size='s'>
          {groupSavedAtFormat(group.savedAt)}
        </Text>
      </div>
    </Palette>
  )
}
