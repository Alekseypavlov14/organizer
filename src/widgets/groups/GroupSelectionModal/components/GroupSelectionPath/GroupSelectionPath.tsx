import { useGroupSelectionExplorer } from '../../../GroupSelectionModal/selection.explorer'
import { explorerModeHierarchy } from '@/features/groups/explorer'
import { flexGapExtraSmall } from '@/shared/components/Flex'
import { GroupPath } from '@/features/groups/shared'

export function GroupSelectionPath() {
  const explorer = useGroupSelectionExplorer()

  if (explorer.store.explorerMode !== explorerModeHierarchy) return
  if (!explorer.store.currentGroup) return null

  return (
    <GroupPath 
      groupId={explorer.store.currentGroup.id} 
      onSegmentClick={explorer.select}
      gap={flexGapExtraSmall}
    />
  )
}
