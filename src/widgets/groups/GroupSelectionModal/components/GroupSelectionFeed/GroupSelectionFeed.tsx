import { explorerModeHierarchy, explorerModeSearch, useGroupExplorerDisplayGroups } from '@/features/groups/explorer'
import { Flex, flexDirectionVertical, flexGapExtraSmall, flexGapSmall } from '@/shared/components/Flex'
import { useGroupSelectionExplorer } from '../../../GroupSelectionModal/selection.explorer'
import { Text, textSizeSmall } from '@/shared/components/Text'
import { groupSavedAtFormat } from '../../../GroupSelectionModal/constants'
import { Placeholder } from '@/shared/components/Placeholder'
import { GroupPath } from '@/features/groups/shared'
import styles from './GroupSelectionFeed.module.css'

export function GroupSelectionFeed() {
  const explorer = useGroupSelectionExplorer()
  const displayGroups = useGroupExplorerDisplayGroups(explorer)

  return (
    <Flex 
      className={styles.GroupSelectionFeed}
      direction={flexDirectionVertical}
      gap={flexGapSmall}  
    >
      {displayGroups.map(group => (
        <Flex 
          className={styles.Group}
          direction={flexDirectionVertical}
          gap={flexGapExtraSmall}
          onClick={() => explorer.select(group)}
          key={group.id}
        >
          <Text className={styles.Title}>
            {group.title}
          </Text>

          {explorer.store.explorerMode === explorerModeSearch ? (
            <Text className={styles.Path} size='s'>
              <GroupPath 
                groupId={group.id}
                size={textSizeSmall}
              />
            </Text>
          ) : null}
        
          <Text className={styles.Date} size='s'>
            {groupSavedAtFormat(group.savedAt)}
          </Text>
        </Flex>
      ))}

      {displayGroups.length <= 0 ? (
        <Placeholder>
          <Text>
            {explorer.store.explorerMode === explorerModeHierarchy ? "No subgroups" : null}
            {explorer.store.explorerMode === explorerModeSearch ? "No groups found" : null}
          </Text>
        </Placeholder>
      ) : null}
    </Flex>
  )
}
