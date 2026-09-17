import { useGroupSelectionExplorer } from '../../selection.explorer'
import { rootGroupTitle } from '@/entities/groups'
import { Text } from '@/shared/components/Text'
import styles from './GroupSelectionValue.module.css'

export function GroupSelectionValue() {
  const explorer = useGroupSelectionExplorer()

  const currentGroupTitle = explorer.store.currentGroup?.title ?? rootGroupTitle

  return (
    <Text className={styles.GroupSelectionValue}>
      Selected: {currentGroupTitle}
    </Text>
  )
}
