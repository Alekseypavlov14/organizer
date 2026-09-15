import { currentGroupSelector, useGroupSelectionStore } from '../../selection.store'
import { Text } from '@/shared/components/Text'
import styles from './GroupSelectionValue.module.css'

export function GroupSelectionValue() {
  const currentGroup = useGroupSelectionStore(currentGroupSelector)

  if (!currentGroup) return null

  return (
    <Text className={styles.GroupSelectionValue}>
      Selected: {currentGroup.title}
    </Text>
  )
}
