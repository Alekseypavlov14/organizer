import { currentGroupSelector, selectionModeSelector, updateCurrentGroupSelector, useGroupSelectionStore } from '../../selection.store'
import { selectionModeHierarchy } from '../../constants'
import { GroupPath } from '@/features/groups/shared'
import { flexGapExtraSmall } from '@/shared/components/Flex'

export function GroupSelectionPath() {
  const currentGroup = useGroupSelectionStore(currentGroupSelector)
  const updateCurrentGroup = useGroupSelectionStore(updateCurrentGroupSelector)

  const selectionMode = useGroupSelectionStore(selectionModeSelector)

  if (selectionMode !== selectionModeHierarchy) return
  if (!currentGroup) return null

  return (
    <GroupPath 
      groupId={currentGroup.id} 
      onSegmentClick={updateCurrentGroup}
      gap={flexGapExtraSmall}
    />
  )
}
