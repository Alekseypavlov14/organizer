import { useGroupExplorerFeedExplorer } from '../../group.explorer'
import { Text } from '@/shared/components/Text'
import styles from './GroupExplorerFeedTitle.module.css'

export function GroupExplorerFeedTitle() {
  const groupExplorer = useGroupExplorerFeedExplorer()
  if (!groupExplorer.store.currentGroup) return null

  return (
    <Text 
      className={styles.GroupExplorerFeedTitle}
      size='l'
    >
      {groupExplorer.store.currentGroup.title}
    </Text>
  )
}
