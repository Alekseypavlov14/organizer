import { useGroupSelectionExplorer } from '../../../GroupSelectionModal/selection.explorer'
import { Text } from '@/shared/components/Text'
import styles from './GroupSelectionValue.module.css'

export function GroupSelectionValue() {
  const explorer = useGroupSelectionExplorer()

  if (!explorer.store.currentGroup) return null

  return (
    <Text className={styles.GroupSelectionValue}>
      Selected: {explorer.store.currentGroup.title}
    </Text>
  )
}
