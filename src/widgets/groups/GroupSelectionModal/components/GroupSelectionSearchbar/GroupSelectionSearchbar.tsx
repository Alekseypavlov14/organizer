import { useGroupSelectionExplorer } from '../../../GroupSelectionModal/selection.explorer'
import { Input } from '@/shared/components/Input'

export function GroupSelectionSearchbar() {
  const explorer = useGroupSelectionExplorer()

  return (
    <Input 
      value={explorer.store.searchQuery}
      onValueChange={explorer.searchGroups}
      placeholder='Search by name'
    />
  )
}
