import type { GroupEntity } from '@/entities/groups'
import { selectionModeSelector, updateCurrentGroupSelector, updateSelectionModeSelector, useGroupSelectionStore } from '../../selection.store'
import { groupSavedAtFormat, selectionModeHierarchy, selectionModeSearch } from '../../constants'
import { Flex, flexDirectionVertical, flexGapExtraSmall, flexGapSmall } from '@/shared/components/Flex'
import { Text, textSizeSmall } from '@/shared/components/Text'
import { useDisplayGroups } from '../../hooks/useDisplayGroups'
import { Placeholder } from '@/shared/components/Placeholder'
import { GroupPath } from '@/features/groups/shared'
import styles from './GroupSelectionFeed.module.css'

export function GroupSelectionFeed() {
  const groups = useDisplayGroups()
  const selectionMode = useGroupSelectionStore(selectionModeSelector)

  const updateCurrentGroup = useGroupSelectionStore(updateCurrentGroupSelector)
  const updateSelectionMode = useGroupSelectionStore(updateSelectionModeSelector)

  function updateCurrentGroupHandler(group: GroupEntity) {
    updateCurrentGroup(group)
    updateSelectionMode(selectionModeHierarchy)
  }
  
  return (
    <Flex 
      className={styles.GroupSelectionFeed}
      direction={flexDirectionVertical}
      gap={flexGapSmall}  
    >
      {groups.map(group => (
        <Flex 
          className={styles.Group}
          direction={flexDirectionVertical}
          gap={flexGapExtraSmall}
          onClick={() => updateCurrentGroupHandler(group)}
          key={group.id}
        >
          <Text className={styles.Title}>
            {group.title}
          </Text>

          {selectionMode === selectionModeSearch ? (
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

      {groups.length <= 0 ? (
        <Placeholder>
          <Text>
            {selectionMode === selectionModeHierarchy ? "No subgroups" : null}
            {selectionMode === selectionModeSearch ? "No groups found" : null}
          </Text>
        </Placeholder>
      ) : null}
    </Flex>
  )
}
